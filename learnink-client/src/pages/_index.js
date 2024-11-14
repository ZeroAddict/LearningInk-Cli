import React, { useState } from 'react';
import styles from '../../public/styles/styles.css';
import Header from '../components/Header'
// import Head from 'next/head';

function HomeSignup() {
{/* <Head>
  <link rel="stylesheet" href="/styles/styles.css" />
</Head> */}
  const [showSignup, setShowSignup] = useState(false);
  const [signupType, setSignupType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    // Organization fields
    orgName: '',
    orgType: '',
    orgDescription: '',
    orgAddr: '',
    orgHaveAnyBranches: '',
    orgIfAccountIsBranch: '',
    orgTelNo: '',
    orgCEO: '',
    orgChair: '',
    orgResrcPerson: '',
    orgYearsEst: '',
    orgYearsActv: '',
    //Biz Ideas
    orgFavSection: '',
    orgTarget: '',
    orgSecAudience: '',
    orgSector: '',
    orgVisStat: '',
    orgEmpSize: '',
  });

  const handleGetStarted = () => {
    setShowSignup(true);
  };

  const handleSignupType = (type) => {
    setSignupType(type);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validationRules = {
    name: {
      required: true,
      minLength: 3,
    },
    email: {
      required: true,
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    password: {
      required: true,
      minLength: 8,
    },
    confirmPassword: {
      required: true,
      match: 'password',
    },
    // Org fields...
    orgName: {
      required: true,
      minLength: 3,
    },
    orgType: {
      required: true,
      minLength: 3,
    },
    orgDescription: {
      required: true,
      minLength: 3,
    },
    orgAddr: {
      required: true,
      minLength: 3,
    },
    orgHaveAnyBranches: {
      required: false,
      minLength: 3,
    },
    orgIfAccountIsBranch: {
      required: true,
      minLength: 3,
    },
    orgTelNo: {
      required: true,
      minLength: 3,
    },
    orgCEO: {
      required: true,
      minLength: 3,
    },
    orgChair: {
      required: true,
      minLength: 3,
    },
    orgResrcPerson: {
      required: true,
      minLength: 3,
    },
    orgYearsEst: {
      required: true,
      minLength: 3,
    },
    orgYearsActv: {
      required: false,
      minLength: 3,
    },
    //Favourite Section
    orgFavSection: {
      required: true,
      minLength: 3,
    },
    orgTarget: {
      required: true,
      minLength: 3,
    },
    orgSecAudience: {
      required: true,
      minLength: 3,
    },
    orgSector: {
      required: true,
      minLength: 3,
    },
    orgVisStat: {
      required: true,
      minLength: 3,
    },
    orgEmpSize: {
      required: true,
      minLength: 3,
    },
  
  };
  
  //validation function
  const validateFormData = (formData) => {
    const errors = {};
    Object.keys(validationRules).forEach((field) => {
      const rule = validationRules[field];
      if (rule.required && !formData[field]) {
        errors[field] = 'Required';
      } else if (rule.minLength && formData[field].length < rule.minLength) {
        errors[field] = `Minimum ${rule.minLength} characters`;
      } else if (rule.pattern && !formData[field].match(rule.pattern)) {
        errors[field] = 'Invalid format';
      } else if (rule.match && formData[field] !== formData[rule.match]) {
        errors[field] = 'Passwords do not match';
      }
    });
    return errors;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to API or backend
    const endpointUrl = '/api/signup';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
    const errors = validateFormData(formData);
      
    if (Object.keys(errors).length > 0) {
      
      console.log(errors);
    } else {
        fetch(endpointUrl, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            if (data.error) {
              // Handle error, 1. if required field is empty or invalid 2. if user already exists 
              console.error(data.error);
            } else {
              // Handle successful signup
              console.log(data);
            }
          })
          .catch((error) => console.error(error));
        console.log(formData);
    }
  };

  return (
    <> <Header/>
    <div className={styles.container}>
      <div className={styles.leftPage}>
        {showSignup ? (
          <div>
            {signupType === '' && (
              <>
                {/* <h2>Sign up as:</h2> */}
                <button
                  className={styles.signupButton}
                  onClick={() => handleSignupType('student')}
                >
                  Sign up as Student
                </button>
                <button
                  className={styles.signupButton}
                  onClick={() => handleSignupType('organisation')}
                >
                  Sign up as Organisation
                </button>
              </>
            )}
            {signupType === 'student' && (
              <form onSubmit={handleSubmit}>
                <h2>Student Sign-up</h2>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label>Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>Password does not match</div>}
                <button type="submit">Sign up</button>
              </form>
            )}
            {signupType === 'organisation' && (
              <form onSubmit={handleSubmit}>
                <h2>Organisation Sign-up</h2>
                <label>Organisation Name:</label>
                <input
                  type="text"
                  name="orgName"
                  value={formData.orgName}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label>Organisation Type:</label>
                <select
                  name="orgType"
                  value={formData.orgType}
                  onChange={handleChange}
                >{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                  <option value="">Select</option>
                  <option value="school">School</option>
                  <option value="university">University</option>
                  <option value="company">Company</option>
                </select>
                <label>Organisation Description:</label>
                <textarea
                  name="orgDescription"
                  value={formData.orgDescription}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label>Organisation Description:</label>
                <textarea
                  name="orgDescription"
                  value={formData.orgDescription}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
    {/* orgAddr: '', orgHaveAnyBranches: '', orgIfAccountIsBranch: '', orgTelNo: '', orgCEO: '', orgChair: '', orgResrcPerson: '', orgYearsEst: '', orgYearsActv: '', //Biz Ideas orgFavSection: '', orgTarget: '', orgSecAudience: '', orgSector: '', orgVisStat: '', orgEmpSize: '', */}
                <label>Address:</label>
                <textarea
                  name="orgAddr"
                  value={formData.orgDescription}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label> Have Any Branches:</label>
                <textarea
                  name="orgHaveAnyBranches"
                  value={formData.orgDescription}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label>Branch Account:</label>
                <textarea
                  name="orgIfAccountIsBranch"
                  value={formData.orgDescription}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label>Contact No:</label>
                <textarea
                  name="orgTelNo"
                  value={formData.orgDescription}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label>Company CEO:</label>
                <textarea
                  name="orgCEO"
                  value={formData.orgDescription}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label>Company Chairman:</label>
                <textarea
                  name="orgChair"
                  value={formData.orgDescription}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label>Resource Person:</label>
                <textarea
                  name="orgResrcPerson"
                  value={formData.orgDescription}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label>Years Established:</label>
                <textarea
                  name="orgYearsEst"
                  value={formData.orgDescription}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label>Years Active:</label>
                <textarea
                  name="orgYearsActv"
                  value={formData.orgDescription}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label>Favourite Section:</label>
                <textarea
                  name="orgFavSection"
                  value={formData.orgDescription}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label>Target Audience:</label>
                <textarea
                  name="orgTarget"
                  value={formData.orgDescription}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label>Secondary Audience:</label>
                <textarea
                  name="orgSecAudience"
                  value={formData.orgDescription}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <label>Employee Size:</label>
                <textarea
                  name="orgEmpSize"
                  value={formData.orgDescription}
                  onChange={handleChange}
                />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                <button type="submit">Sign up</button>
              </form>
            )}
          </div>
        ) : (
          <button className={styles.getStartedButton} onClick={handleGetStarted}>
            Get Started
          </button>
        )}
      </div>
      <div className={styles.rightPage}>
        {/* Right page content */}
      </div>
    </div>
    </>
  );
}

export default HomeSignup;