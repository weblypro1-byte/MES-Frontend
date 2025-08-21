// src/blogs.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; 
import './blogs.scss'
import "swiper/css";
import "swiper/css/navigation";

const blogs = [
  {
    category: "Student Life",
    title:"Cyprus e visa in 2025 – Your easy passport to adventure",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1755762349/storyblok_vsarry.webp",
    author: "Asfandyar Mazhar",
    authorImg: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "5 days ago",
  },
  {
    category: "Education",
    title: "How to Apply Scholarships for Pakistani Students in the UK",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1755762390/depositphotos_10800421-stock-photo-big-ben-with-red-double_hdwcjv.webp",
    author: "Ali Haider",
    authorImg: "https://randomuser.me/api/portraits/men/45.jpg",
    date: "1 week ago",
  },
  {
    category: "Universities",
    title: "University of the West England: For Pakistani Students in 2025",
    img: "https://res.cloudinary.com/du3tkzdhe/image/upload/v1755762954/Stonehenge-in-the-South-West-of-England_jdim3f.jpg",
    author: "Asfandyar Mazhar",
    authorImg: "https://randomuser.me/api/portraits/women/29.jpg",
    date: "2 weeks ago",
  },
  {
    category: "Guides",
    title: "Top 10 Tips for Studying Abroad in 2025",
    img: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
    author: "Ali Haider",
    authorImg: "https://randomuser.me/api/portraits/men/46.jpg",
    date: "3 weeks ago",
  },
];

export default function RecentBlogs() {
  return (<section className="py-5 bg-white">
    <div className="container">
      
      {/* Section Header */}
      <div className="section-header">
        <h2>TOP BLOGS</h2>
        <div className="line"></div>
        {/* <p >Our Recent Blogs for Students</p> */}
      </div>
  
      {/* Swiper controls */}
      <div className="d-flex justify-content-end gap-2 mb-4">
        <button className="btn btn-light rounded-circle shadow-sm blog-prev">
          <ChevronLeft size={20} />
        </button>
        <button className="btn btn-light rounded-circle shadow-sm blog-next">
          <ChevronRight size={20} />
        </button>
      </div>
  
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: ".blog-next",
          prevEl: ".blog-prev",
        }}
        loop={false}
        speed={600}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogs.map((blog, idx) => (
          <SwiperSlide key={idx}>
            <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden">
              <div className="position-relative">
                <Link
                  // to={`/categories/${blog.category.toLowerCase().replace(/\s+/g, "-")}`}
                  to={`/blogs`}
                  className="badge bg-light text-primary position-absolute top-0 start-0 m-2 px-3 py-2 rounded-pill shadow-sm text-decoration-none"
                >
                  {blog.category}
                </Link>
  
                {/* <Link to={`/blogs/${idx}`}> */}
                <Link to={`/blogs/`}>
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                </Link>
              </div>
  
              <div className="card-body d-flex flex-column">
                <Link
                  // to={`/blogs/${idx}`}
                  to={`/blogs/`}
                  className="text-dark text-decoration-none"
                >
                  <h6 className="fw-bold">{blog.title}</h6>
                </Link>
  
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={blog.authorImg}
                    alt={blog.author}
                    className="rounded-circle me-2"
                    style={{ width: "35px", height: "35px", objectFit: "cover" }}
                  />
                  <div>
                    <p className="mb-0 small fw-semibold">{blog.author}</p>
                    <p className="mb-0 text-muted small">{blog.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
  
    
  );
}
