import React, { useRef, useState } from 'react';
import styles from '../../public/styles/styles.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import '../app/globals.css';
import Cta from '../components/Cta';
import RightPage from '../components/RightPage';
import Link from "next/link";
import sections from './sections';
import { AuthProvider } from '../contexts/AuthContext';
import { useRouter } from 'next/router';


// import Head from 'next/head';

function HomeSignup({ Component, pageProps }) {
  const router = useRouter();

  {/* <Head>
  <link rel="stylesheet" href="/styles/styles.css" />
</Head> */}
  const [showSignup, setShowSignup] = useState(false);
  const [signupType, setSignupType] = useState('');
  const [errors, setErrors] = useState({});
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
    orgUrl: '',
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
  const targetRef = useRef(null);

  const handleGetStarted = () => {
    setShowSignup(true) || targetRef.current?.scrollIntoView({ behavior: 'smooth' });;
  };

  const handleSignupType = (type) => {
    setSignupType(type);
    router.push('#section-signup')
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  const validationRules = {
    firstName: {
      required: true,
      minLength: 3,
    },
    lastName: {
      required: true,
      minLength: 3,
    },
    email: {
      required: true,
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    username: {
      required: true,
      minLength: 3,
    },
    password: {
      required: true,
      minLength: 8,
      pattern: /^a-zA-Z0-9\W{8,}$/
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
    orgUrl: {
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
    const endpointUrl = 'http://localhost:8000/organization/signUp';
    const endpointUrl2 = 'http://localhost:8000/student/signup';
    axios.post(endpointUrl2, formData)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
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
    <> <Header />
      <Cta />
      <div className="flex flex-col h-[400vh]">
        <div className={styles.bgHdr}>

          {/* Hero section */}
          <div className="h-[80vh] bg-teal">
            <h1 className="text-9xl font-bold text-white gap-2 items-center my-20 mx-5 font-weight-800">
              Unlock<br /> your Potentials
            </h1>
            <h2 className='text-3xl font-bold text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 text-transparent bg-clip-text mx-5'>
              Discover the power of LearningInk today.
            </h2>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-20 text-xl font-bold py-2 px-4 rounded m-5" onClick={handleGetStarted}>Join us</button>

          </div>
          <div className="bg-gray-100 py-20">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-blue-600 text-3xl text-center mb-10 text-bold">
      LearningInk 
      <span className="section-title"> hosts these features and more</span>
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
      <div>
        <h3 className="text-3xl font-bold mb-1 text-green-200">• Excellent Learning Environment</h3>
        {/* <p className="text-gray-600 mb-2">Brief description</p> */}
        <h3 className="text-3xl font-bold mb-1">• Tech skills</h3>
        {/* <p className="text-gray-600 mb-2">Brief description</p> */}
        <h3 className="text-3xl font-bold mb-2">• Exam guides</h3>
        {/* <p className="text-gray-600 mb-2">Brief description</p> */}
        <h3 className="text-3xl font-bold mb-2">• Practical skills</h3>
        {/* <p className="text-gray-600 mb-2">Brief description</p> */}
        <h3 className="text-3xl font-bold mb-2">• Quizzes</h3>
        {/* <p className="text-gray-600 mb-2">Brief description</p> */}
      </div>
      <div>
        <h3 className="text-3xl font-bold mb-2">• Flashcards</h3>
        {/* <p className="text-gray-600 mb-5">Brief description</p> */}
        <h3 className="text-3xl font-bold mb-2">• Large Educational database</h3>
        {/* <p className="text-gray-600 mb-5">Brief description</p> */}
        <h3 className="text-3xl font-bold mb-2">• Excellent streaming</h3>
        {/* <p className="text-gray-600 mb-5">Brief description</p> */}
        <h3 className="text-3xl font-bold mb-2">• Kiddies section</h3>
        {/* <p className="text-gray-600 mb-5">Brief description</p> */}
        <h3 className="text-blue-600">
          Browse through our 
          <Link href="/sections">
            <b className="text-underline"> Sections </b>
          </Link> 
           page
        </h3>
      </div>
    </div>
  </div>
</div>


          {/* Testimonial section */}
          <div className="h-[100vh] bg-blue-400">

          </div>

        </div>

        <div className='flex'>
          <div ref={targetRef} id="target-section"  className={styles.leftPage}>
            {showSignup ? (
              <div>
                {signupType === '' && (
                  <>
                    {/* <h2>Sign up as:</h2> */}
                    <h2>
                      Ready to get started?
                    </h2>
                    <button
                      className={styles.signupButton1}
                      onClick={() => handleSignupType('student')}
                    >
                      Sign up as Student
                    </button>
                    <button
                      className={styles.signupButton2}
                      onClick={() => handleSignupType('organisation')}
                    >
                      Sign up as Organisation
                    </button>

                    <h3>Join our teeming community today! Sign up now</h3>
                    <h4>
                      Already signed up? <Link href="/loginPage"><b>Log in</b></Link> here
                    </h4>
                  </>
                )}
                {signupType === 'student' && (
                  <form className={styles.form} onSubmit={handleSubmit} id="section-signup">
                    <h2 className='font-bold text-3xl py-5 px-10 animation-bounce '>Student Sign-up</h2>
                    <>


                      <label >First Name:</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className='focus:outline-none focus:ring focus:border-rose-300 p-2;'
                      /><br />{errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
                      <label>Last Name:</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className='focus:outline-none focus:ring focus:border-blue-300 p-2;'
                      /><br />{errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
                      <label>Email:</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      /><br />{errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                      <label>Preferred Username:</label>
                      <input
                        type="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                      /><br />{errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
                      <label>Password:</label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      /><br />{errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                      <label>Confirm Password:</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      /><br />{errors.name && <div style={{ color: 'red' }}>Password does not match</div>}
                    </>
                    <button type="submit" className={styles.signup}>Sign up</button>
                  </form>
                )}
                {signupType === 'organisation' && (
                  <form className={styles.orgForm} onSubmit={handleSubmit} id="section-signup">
                    <h2>Organisation Sign-up</h2>
                    <label>Organisation Name:</label>
                    <input className
                      type="text"
                      name="orgName"
                      value={formData.orgName}
                      onChange={handleChange}
                    /><br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    <label>Organisation Type:</label>
                    <select
                      name="orgType"
                      value={formData.orgType}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="school">School</option>
                      <option value="university">University</option>
                      <option value="company">Company</option>
                    </select><br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}

                    <label>Organisation Description:</label>
                    <input
                      name="orgDescription"
                      value={formData.orgDescription}
                      onChange={handleChange}
                    /><br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    {/* orgAddr: '', orgHaveAnyBranches: '', orgIfAccountIsBranch: '', orgTelNo: '', orgCEO: '', orgChair: '', orgResrcPerson: '', orgYearsEst: '', orgYearsActv: '', //Biz Ideas orgFavSection: '', orgTarget: '', orgSecAudience: '', orgSector: '', orgVisStat: '', orgEmpSize: '', */}
                    <label>Address:</label>
                    <input
                      name="orgAddr"
                      value={formData.orgDescription}
                      onChange={handleChange}
                    /><br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    {/* <label> Have Any Branches:</label>
                    <select
                      name="orgHaveAnyBranches"
                      value={formData.orgDescription}
                      onChange={handleChange}
                    >
                      <option>Select</option>
                      <option value={formData.orgHaveAnyBranches}>Yes</option>
                      <option value={formData.orgHaveAnyBranches}>No</option>
                    </select><br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>} */}
                    <label>Branch Account:</label>
                    <select
                      name="orgIfAccountIsBranch"
                      value={formData.orgDescription}
                      onChange={handleChange}>
                      <option>Select</option>
                      <option value={formData.orgIfAccountIsBranch}>Yes</option>
                      <option value={formData.orgIfAccountIsBranch}>No</option>
                    </select>
                    <br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    <label>Contact No:</label>
                    <input
                      name="orgTelNo"
                      value={formData.orgDescription}
                      onChange={handleChange}
                    /><br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    <label>Company CEO:</label>
                    <input
                      name="orgCEO"
                      value={formData.orgDescription}
                      onChange={handleChange}
                    /><br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    <label>Company Chairman:</label>
                    <input
                      name="orgChair"
                      value={formData.orgDescription}
                      onChange={handleChange}
                    /><br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    {/* <label>Resource Person:</label>
                    <input
                      name="orgResrcPerson"
                      value={formData.orgDescription}
                      onChange={handleChange}
                    /><br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>} */}
                    <label>Years Established:</label>
                    <input
                      name="orgYearsEst"
                      value={formData.orgDescription}
                      onChange={handleChange}
                    /><br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    <label>Years Active:</label>
                    <input
                      name="orgYearsActv"
                      value={formData.orgDescription}
                      onChange={handleChange}
                    /><br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    <label>Favourite Section:</label>
                    <input
                      name="orgFavSection"
                      value={formData.orgDescription}
                      onChange={handleChange}
                    /><br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    <label>Target Audience:</label>
                    <input
                      name="orgTarget"
                      value={formData.orgDescription}
                      onChange={handleChange}
                    /><br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    {/* <label>Secondary Audience:</label>
                    <input
                      name="orgSecAudience"
                      value={formData.orgDescription}
                      onChange={handleChange}
                    /><br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>} */}
                    <>
                      <label for="orgEmpSize">Employee Size:</label> <br />
                      <input type="radio" name="orgEmpSize" value={formData.orgEmpSize} onChange={handleChange} />
                      <label for="">2-5</label>
                      <input type="radio" name="orgEmpSize" value={formData.orgEmpSize} onChange={handleChange} />
                      <label for="">6-20</label>
                      {/* <input type="radio" name="orgEmpSize" value="21-50" value={formData.orgEmpSize}/> */}
                      <input type="radio" name="orgEmpSize" value={formData.orgEmpSize} />
                      <label for="">21-50</label>
                      <input type="radio" name="orgEmpSize" value={formData.orgEmpSize} onChange={handleChange} />
                      <label for="">51-100</label>
                      <input type="radio" name="orgEmpSize" value={formData.orgEmpSize} onChange={handleChange} />
                      <label for="">101-200</label>
                      <input type="radio" name="orgEmpSize" value={formData.orgEmpSize} onChange={handleChange} />
                      <label for="">&gt;200</label>
                      <br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}

                    </>
                    <label>Password:</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    /><br />{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    <label>Confirm Password:</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    /><br />{errors.name && <div style={{ color: 'red' }}>Password does not match</div>}
                    <button type="submit" className={styles.signup}>Sign up</button>
                  </form>
                )}
              </div>
            ) : (
              <>
                <button id="target-section" className={styles.getStartedButton} onClick={handleGetStarted}>
                  Get Started
                </button>
                <p className="text-lg">Transforming Education with unique value proposition</p>

              </>

            )}
          </div>
          <div className={styles.rightPage}>
            {/* Right page content */}
            <RightPage />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

export default HomeSignup;