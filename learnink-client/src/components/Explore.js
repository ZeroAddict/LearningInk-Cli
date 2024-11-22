import React from 'react';
import Sections from './Sections';
import VideoSection from './VideoSection';
import Header from './Header'
import Footer from './Footer'

const Explore = () => (
    <>
    <Header/>
  <div className="max-w-screen-md mx-auto p-4">

    {/* <Sections /> */}
    <VideoSection />
  </div>
  <Footer />
  </>
);

const sectionsData = [
    {
    name: 'Programming',
    description: 'Learn coding fundamentals',
    subsections: ['Web Development', 'Mobile App Development', 'Data Science'],
    },
    {
    name: 'Math',
    description: 'Improve mathematical skills',
    subsections: ['Algebra', 'Geometry', 'Calculus', 'Analysis', 'Statis'],
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
    description: 'Understand chemical reactions',
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
]

export default Explore;