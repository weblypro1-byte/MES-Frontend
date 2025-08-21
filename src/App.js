// // src/App.js
// import React, { useState } from 'react';
// import { useEffect } from "react";
// import Footer from './footer';
// import Navbar from './Navbar.js';
// import ImageSlider from './ImageSlider.jsx';
// import VideoCarousel from './VideoCarousel.jsx'
// import Form from './form.js'
// import './App.scss';
// import Loader from "./Loader.js";
// import Home from "./Home.js"; // your main page
// import Course from './courses.js'
// import RecentBlogs from "./blogs";
// import Icon from './icons.js';
// import WhyChoose from './whychoose.js';
// import Universities from './universities.js';
// import Backbutton from './Backbutton.js';
// import Steps from './steps.js'
// function App() {
  
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2500); // loader shows for 2.5s
//     return () => clearTimeout(timer);
//   }, []);
//   return (
//     <div className="App">
     
//       <Navbar />
      
//       {loading ? <Loader /> : <Home />}
//       <ImageSlider/>
//       <WhyChoose/>
//       <Icon/>
//       <Course/>
//       <Universities/>
//      <Steps/>
//       <RecentBlogs />
//       <Form/>
//       <VideoCarousel />
//       <Backbutton/>
   
//       <Footer />

//      </div>
//   );
// }


 

// export default App;


// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer';
import Loader from './Loader';
import Home from './Home';
import Course from './courses';
import RecentBlogs from './blogs';
import Icon from './icons';
import WhyChoose from './whychoose';
import Universities from './universities';
import Backbutton from './Backbutton';
import Steps from './steps';
import ImageSlider from './ImageSlider';
import VideoCarousel from './VideoCarousel';
import Form from './form';
import Comments from './comments.js';
import Aboutus from './About.js'
import './App.scss';


// Future pages
import UK from './pages/uk';
import Australia from './pages/australia';
import Europe from './pages/europe';
import USA from './pages/usa';
import OurOffices from './pages/OurOffices.js';
import Event from './pages/event.js'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Loader duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Icon />

      {loading ? (
        <Loader />
      ) : (
        <Routes>
          
          {/* Home page shows directly */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <ImageSlider />
                <WhyChoose />
                {/* <Icon /> */}
                <Course />
                <Universities />
                <Steps />
                <Aboutus/>
                <Form />
                <Comments/>
                <VideoCarousel />
                <RecentBlogs />
                <Backbutton />
              </>
            }
          />

          {/* Other pages accessible via navbar links */}
          <Route path="/courses" element={<Course />} />
          <Route path="/study-destinations" element={<Universities />} />
          <Route path="/uk" element={<UK />} />
          <Route path="/australia" element={<Australia />} />
          <Route path="/europe" element={<Europe />} />
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/whychoose' element={<WhyChoose/>}/>


          <Route path="/usa" element={<USA />} />
          <Route path="/events" element={<Event />} />
          <Route path="/blogs" element={<RecentBlogs />} />
          <Route path="/offices" element={<OurOffices />} />
        </Routes>
      )}

      <Footer />
    </div>
  );
}

export default App;
