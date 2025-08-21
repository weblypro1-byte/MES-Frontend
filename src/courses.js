// import { Star } from "lucide-react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import './course.scss'
// const courses = [
//   {
//     category: "English Proficiency",
//     title: "IELTS Academic Course",
//     description:
//       "Prepare for university studies with our comprehensive IELTS Academic Course. Learn test strategies and improve your skills.",
//     img: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
//     rating: 5,
//     link: "#",
//   },
//   {
//     category: "English Proficiency",
//     title: "PTE Academic",
//     description:
//       "Excel in PTE Academic with comprehensive training. Enhance language skills, ace exams, and achieve your study abroad goals.",
//     img: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
//     rating: 5,
//     link: "#",
//   },
//   {
//     category: "English Proficiency",
//     title: "IELTS Life Skills (A1/B1)",
//     description:
//       "Attain practical language competence with IELTS Life Skills A1/B1. Develop essential communication skills for life abroad.",
//     img: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
//     rating: 5,
//     link: "#",
//   },
// ];

// export default function FeaturedCourses() {
//   return (
//     <section className="py-5 bg-light">
//       <div className="container">
//         {/* Section Header */}
        
//         <div className="image-slider">
//       <h2 className="slider-heading">OUR TOP COURSES</h2>
      
//         <div className="line"></div>
       
//       <p className="subtitle">
//       Prepare for university with IELTS Academic, excel in PTE Academic, and develop communication skills with IELTS Life Skills (A1/B1)
//       </p>
//       </div>



//         {/* Course Grid */}
//         <div className="row g-4">
//           {courses.map((course, idx) => (
//             <div key={idx} className="col-12 col-md-6 col-lg-4">
//               <div className="card border-0 shadow-lg h-100 rounded-4 overflow-hidden">
//                 {/* Image */}
//                 <img
//                   src={course.img}
//                   className="card-img-top"
//                   style={{ height: "200px", objectFit: "cover" }}
//                   alt={course.title}
//                 />

//                 {/* Card Body */}
//                 <div className="card-body d-flex flex-column position-relative">
//                   {/* Stars at top-right */}
//                   <div className="position-absolute top-0 end-0 m-2 d-flex">
//                     {[...Array(course.rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         size={16}
//                         color="#FFD700"
//                         fill="#FFD700"
//                         className="me-1"
//                       />
//                     ))}
//                   </div>

//                   <p className="text-primary small fw-semibold mb-1">
//                     {course.category}
//                   </p>
//                   <h5 className="card-title fw-bold">{course.title}</h5>
//                   <p className="card-text text-muted small flex-grow-1">
//                     {course.description}
//                   </p>

//                   {/* Button */}
//                   <a
//                     href={course.link}
//                     className="btn btn-sm btn-dark fw-semibold align-self-start rounded-pill px-3 shadow-sm"
//                   >
//                     Enroll Now
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import './course.scss';

const courses = [
  {
    category: "English Proficiency",
    title: "IELTS Academic Course",
    description: "Prepare for university studies with our comprehensive IELTS Academic Course. Learn test strategies and improve your skills.",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1755763434/pexels-photo-1595391_lbnjol.jpg",
    rating: 5,
    link: "#",
  },
  {
    category: "English Proficiency",
    title: "PTE Academic",
    description: "Excel in PTE Academic with comprehensive training. Enhance language skills, ace exams, and achieve your study abroad goals.",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1755763450/pexels-photo-3184325_dfu3by.jpg",
    rating: 5,
    link: "#",
  },
  {
    category: "English Proficiency",
    title: "IELTS Life Skills (A1/B1)",
    description: "Attain practical language competence with IELTS Life Skills A1/B1. Develop essential communication skills for life abroad.",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1755763454/pexels-photo-1181676_zkjdpy.jpg",
    rating: 5,
    link: "#",
  },
];

export default function FeaturedCourses() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      
      // Observe each course card for individual animations
      const cards = sectionRef.current.querySelectorAll('.course-card');
      cards.forEach(card => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="featured-courses py-5 bg-light" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="image-slider">
          <h2 className="slider-heading">OUR TOP COURSES</h2>
          <div className="line"></div>
          <p className="subtitle">
            Prepare for university with IELTS Academic, excel in PTE Academic, and develop communication skills with IELTS Life Skills (A1/B1)
          </p>
        </div>

        {/* Course Grid */}
        <div className="row g-4">
          {courses.map((course, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div className={`course-card card border-0 shadow-lg h-100 rounded-4 overflow-hidden`}>
                {/* Image Container */}
                <div className="card-img-container overflow-hidden">
                  <img
                    src={course.img}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt={course.title}
                  />
                  <div className="image-overlay"></div>
                </div>

                {/* Card Body */}
                <div className="card-body d-flex flex-column position-relative">
                  {/* Stars at top-right */}
                  <div className="position-absolute top-0 end-0 m-2 d-flex">
                    {[...Array(course.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        color="#FFD700"
                        fill="#FFD700"
                        className="me-1 star-icon"
                      />
                    ))}
                  </div>

                  <p className="text-primary small fw-semibold mb-1 category-text">
                    {course.category}
                  </p>
                  <h5 className="card-title fw-bold title-text">{course.title}</h5>
                  <p className="card-text text-muted small flex-grow-1 description-text">
                    {course.description}
                  </p>

                  {/* Button */}
                  <a
                    href={course.link}
                    className="btn btn-sm btn-dark fw-semibold align-self-start rounded-pill px-3 shadow-sm enroll-btn"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}