// import React, { useState, useEffect } from "react";
// import "./Testimonials.scss";

// const testimonials = [
//   {
//   name: "Shiza Shafiq",
//   role: "Student",
//   review:
//     "If I could give 10 stars, I would... it was a wonderful experience with Konnect Study Advisor. Very professional, committed, and ever-helping team. I highly recommend Konnect for anyone planning to study abroad.",
//   source: "Google",
//   color: "red",
// },
// {
//   name: "Ali Nadeem",
//   role: "Student",
//   review:
//     "Great experience with Konnect Study Advisor... The staff is so cooperative and hardworking to fulfill students' dreams. Highly recommended for those who want to go abroad.",
//   source: "Google",
//   color: "orange",
// },
// {
//   name: "Rehman Butt",
//   role: "Student",
//   review:
//     "Alhamdulillah I got my UK study visa with the help of Konnect Study Advisor. They were honest, supportive, and guided me throughout the process. I strongly recommend their services.",
//   source: "Google",
//   color: "gray",
// },
// {
//   name: "Ayesha Khan",
//   role: "Student",
//   review:
//     "Konnect Study Advisor guided me at every step of my admission process. The team is very supportive, transparent, and reliable. Truly the best consultancy for overseas education.",
//   source: "Google",
//   color: "blue",
// },
// {
//   name: "Usman Ali",
//   role: "Student",
//   review:
//     "The best consultancy for studying abroad! Konnect Study Advisor helped me choose the right university and prepared my application flawlessly. I’m really happy with their service.",
//   source: "Google",
//   color: "green",
// },

// ];

// const Testimonials = () => {
//   const [index, setIndex] = useState(0);

//   const prevSlide = () => {
//     setIndex(index === 0 ? testimonials.length - 1 : index - 1);
//   };

//   const nextSlide = () => {
//     setIndex((index + 1) % testimonials.length);
//   };

//   // Autoplay effect (every 3 seconds)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000); // 3 sec

//     return () => clearInterval(interval); // cleanup on unmount
//   }, [index]);

//   // Show 3 testimonials at a time
//   const visibleCards = [
//     testimonials[index],
//     testimonials[(index + 1) % testimonials.length],
//     testimonials[(index + 2) % testimonials.length],
//   ];

//   return (
//     <div className="testimonials">
//       <h2>Testimonials</h2>
//       <div className="slider">
//         <button className="arrow left" onClick={prevSlide}>
//           &#8249;
//         </button>

//         <div className="cards-wrapper">
//           {visibleCards.map((t, i) => (
//             <div className="card" key={i}>
//               <span className="quote">“</span>
//               <p>{t.review}</p>
//               <span className="source">{t.source}</span>
//               <div className="author">
//                 <div className="avatar" style={{ backgroundColor: t.color }}>
//                   {t.name.charAt(0)}
//                 </div>
//                 <div>
//                   <h4>{t.name}</h4>
//                   <p>{t.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button className="arrow right" onClick={nextSlide}>
//           &#8250;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
import React from 'react'

export default function comments() {
  return (
    <div></div>
  )
}
