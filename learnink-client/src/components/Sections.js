import React from 'react';
import '../app/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../../public/styles/styles.module.css'; 
import VideoSection from './VideoSection';

const sectionsData = [
  {
    name: 'Programming',
    description: 'Learn coding fundamentals',
    subsections: ['Web Development', 'Mobile App Development', 'Data Science'],
  },
  {
    name: 'Math',
    description: 'Improve mathematical skills',
    subsections: ['Algebra', 'Geometry', 'Calculus'],
  },
  {
    name: 'Accounting',
    description: 'Understand financial management',
    subsections: ['Financial Accounting', 'Managerial Accounting', 'Auditing'],
    },
    {
    name: 'Economics',
    description: 'Study economic principles',
    subsections: ['Microeconomics', 'Macroeconomics', 'International Trade'],
    },
    {
    name: 'Physics',
    description: 'Explore physical laws',
    subsections: ['Mechanics', 'Electromagnetism', 'Thermodynamics'],
    },
    {
    name: 'Biology',
    description: 'Discover life sciences',
    subsections: ['Cell Biology', 'Genetics', 'Ecology'],
    },
    {
    name: 'Chemistry',
    description: 'Understand the nature, composition and properties of substances',
    subsections: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry'],
    },
    {
    name: 'Vocational Skills',
    description: 'Develop practical skills',
    subsections: ['Carpentry', 'Plumbing', 'Electrical Work'],
    },
    {
    name: 'Hairdressing',
    description: 'Learn hairstyling techniques',
    subsections: ['Cutting', 'Tinting', 'Braiding', 'Styling'],
    },
    {
    name: 'Cosmetics',
    description: 'Understand beauty products',
    subsections: ['Skin Care', 'Makeup', 'Hair Care'],
    },
    {
    name: 'Language',
    description: 'Improve language skills',
    subsections: ['English', 'Spanish', 'French'],
    },
    {
    name: 'History',
    description: 'Study past events',
    subsections: ['Ancient History', 'Nok', 'Ife', 'Benin', 'Rome', 'Egypt', 'Saxony', 'Afro-American'],
    },
    // Catering, 
    //Crafts, //Modelling, //Genetics, //Engineering, //Civics 
];

const Section = ({ name, description, subsections }) => (
  <div className="flex flex-col p-4 border-b">
    <h2 className="text-lg font-bold mb-2">{name}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="flex flex-row justify-between mb-4">
      {subsections.map((subsection, index) => (
        <li key={index} className="px-2 py-1 bg-gray-200 rounded">
          {subsection}
        </li>
      ))}
    </ul>
    {/* <VideoSection/> */}
  </div>
);

const Sections = () => (
  <div className="flex flex-col">
    {sectionsData.map((section, index) => (
      <Section key={index} {...section} />
    ))}
  </div>
);

export default Sections;
