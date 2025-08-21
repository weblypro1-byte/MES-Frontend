// import React from "react";
// import "./WhyChooseUs.scss";
// import { FaUserTie, FaGlobe, FaUniversity, FaUsers, FaGraduationCap, FaHandshake } from "react-icons/fa";

// const stats = [
//   {
//     icon: <FaUserTie />,
//     number: "20+ Years",
//     title: "Experienced Mentors",
//     desc: "Guiding students with expert career and academic advice."
//   },
//   {
//     icon: <FaGlobe />,
//     number: "60+",
//     title: "Destinations Covered",
//     desc: "Explore education opportunities across top global countries."
//   },
//   {
//     icon: <FaUniversity />,
//     number: "32+",
//     title: "Global Offices",
//     desc: "Worldwide presence ensuring you always have access to support."
//   },
//   {
//     icon: <FaUsers />,
//     number: "2,500+",
//     title: "University Partners",
//     desc: "Partnerships with prestigious universities worldwide."
//   },
  
//   {
//     icon: <FaGraduationCap />,
//     number: "50K+",
//     title: "Alumni Network",
//     desc: "Strong alumni network offering career and mentorship support."
//   },
//   {
//     icon: <FaHandshake />,
//     number: "2.2M+",
//     title: "Students Counselled",
//     desc: "Millions of students successfully guided towards career success."
//   },
//   {
//     icon: <FaUsers />,
//     number: "950+",
//     title: "Team Members",
//     desc: "A dedicated team committed to personalized student support."
//   }, {
//     icon: <FaGlobe />,
//     number: "100+",
//     title: "Success Stories",
//     desc: "Inspiring journeys of students achieving their global dreams."
//   }
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="why-choose">
//       <div className="container">
//         <h2 className="section-title">
//           WHY <span>CHOOSE US ?</span>
//         </h2>
//         <div className="line"></div>
//         <p className="subtitle">
//           Turning study abroad dreams into reality with trusted expertise and dream abroad.
//         </p>
      

//         <div className="cards">
//           {stats.map((item, index) => (
//             <div className="card" key={index}>
//               <div className="icon">{item.icon}</div>
//               <h3 className="number">{item.number}</h3>
//               <h4 className="title">{item.title}</h4>
//               <p className="desc">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


// import React, { useEffect, useRef } from "react";
// import { FaUserTie, FaGlobe, FaUniversity, FaUsers, FaGraduationCap, FaHandshake } from "react-icons/fa";
// import "./WhyChooseUs.scss";

// const stats = [
//   {
//     icon: <FaUserTie />,
//     number: "20+ Years",
//     title: "Experienced Mentors",
//     desc: "Guiding students with expert career and academic advice."
//   },
//   {
//     icon: <FaGlobe />,
//     number: "60+",
//     title: "Destinations Covered",
//     desc: "Explore education opportunities across top global countries."
//   },
//   {
//     icon: <FaUniversity />,
//     number: "32+",
//     title: "Global Offices",
//     desc: "Worldwide presence ensuring you always have access to support."
//   },
//   {
//     icon: <FaUsers />,
//     number: "2,500+",
//     title: "University Partners",
//     desc: "Partnerships with prestigious universities worldwide."
//   },
//   {
//     icon: <FaGraduationCap />,
//     number: "50K+",
//     title: "Alumni Network",
//     desc: "Strong alumni network offering career and mentorship support."
//   },
//   {
//     icon: <FaHandshake />,
//     number: "2.2M+",
//     title: "Students Counselled",
//     desc: "Millions of students successfully guided towards career success."
//   },
//   {
//     icon: <FaUsers />,
//     number: "950+",
//     title: "Team Members",
//     desc: "A dedicated team committed to personalized student support."
//   }, 
//   {
//     icon: <FaGlobe />,
//     number: "100+",
//     title: "Success Stories",
//     desc: "Inspiring journeys of students achieving their global dreams."
//   }
// ];

// const WhyChooseUs = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate");
            
//             // Animate individual cards with staggered delays
//             const cards = entry.target.querySelectorAll('.card');
//             cards.forEach((card, index) => {
//               card.style.transitionDelay = `${index * 0.1}s`;
//             });
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="why-choose" ref={sectionRef}>
//       <div className="container">
//         <h2 className="section-title">
//           WHY <span>CHOOSE US ?</span>
//         </h2>
//         <div className="line"></div>
//         <p className="subtitle">
//           Turning study abroad dreams into reality with trusted expertise and dream abroad.
//         </p>
      

//         <div className="cards">
//           {stats.map((item, index) => (
//             <div className="card" key={index}>
//               <div className="icon">{item.icon}</div>
//               <h3 className="number">{item.number}</h3>
//               <h4 className="title">{item.title}</h4>
//               <p className="desc">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import React, { useEffect, useRef } from "react";
import { FaUserTie, FaGlobe, FaUniversity, FaUsers, FaGraduationCap, FaHandshake } from "react-icons/fa";
import "./WhyChooseUs.scss";

const stats = [
  {
    icon: <FaUserTie />,
    number: "20+ Years",
    title: "Experienced Mentors",
    desc: "Guiding students with expert career and academic advice."
  },
  {
    icon: <FaGlobe />,
    number: "60+",
    title: "Destinations Covered",
    desc: "Explore education opportunities across top global countries."
  },
  {
    icon: <FaUniversity />,
    number: "32+",
    title: "Global Offices",
    desc: "Worldwide presence ensuring you always have access to support."
  },
  {
    icon: <FaUsers />,
    number: "2,500+",
    title: "University Partners",
    desc: "Partnerships with prestigious universities worldwide."
  },
  {
    icon: <FaGraduationCap />,
    number: "50K+",
    title: "Alumni Network",
    desc: "Strong alumni network offering career and mentorship support."
  },
  {
    icon: <FaHandshake />,
    number: "2.2M+",
    title: "Students Counselled",
    desc: "Millions of students successfully guided towards career success."
  },
  {
    icon: <FaUsers />,
    number: "950+",
    title: "Team Members",
    desc: "A dedicated team committed to personalized student support."
  }, 
  {
    icon: <FaGlobe />,
    number: "100+",
    title: "Success Stories",
    desc: "Inspiring journeys of students achieving their global dreams."
  }
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            
            // Animate header elements with delays
            setTimeout(() => {
              const title = entry.target.querySelector('.section-title');
              if (title) title.classList.add('animate');
            }, 200);
            
            setTimeout(() => {
              const line = entry.target.querySelector('.line');
              if (line) line.classList.add('animate');
            }, 400);
            
            setTimeout(() => {
              const subtitle = entry.target.querySelector('.subtitle');
              if (subtitle) subtitle.classList.add('animate');
            }, 600);
            
            // Animate cards with staggered delays
            const cards = entry.target.querySelectorAll('.card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate');
              }, 800 + (index * 100));
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-choose" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          WHY <span>CHOOSE US ?</span>
        </h2>
        <div className="line"></div>
        <p className="subtitle">
          Turning study abroad dreams into reality with trusted expertise and dream abroad.
        </p>
      
        <div className="cards">
          {stats.map((item, index) => (
            <div 
              className="card" 
              key={index}
              ref={el => cardsRef.current[index] = el}
            >
              <div className="icon">{item.icon}</div>
              <h3 className="number">{item.number}</h3>
              <h4 className="title">{item.title}</h4>
              <p className="desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;