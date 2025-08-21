import React, { useState } from "react";
import "./Partner.scss";

export default function Partners() {
  const [active, setActive] = useState("United Kingdom");
  const [open, setOpen] = useState(null); // for mobile accordion

  const countries = {
    "United Kingdom": [
      "https://sciencesprings.wordpress.com/wp-content/uploads/2021/06/university-of-central-lancashire-uk-logo.png?w=1100",
      "https://www.eduopinions.com/wp-content/uploads/2018/04/University-of-Suffolk-UoS-logo-350x87.png",
      "https://www.leedslearningalliance.org/wp-content/uploads/2022/08/trinity-Web-Carousel.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqneeQHoLrYITegq-IEeZre7aCPclluZqeUg&s",
      "https://biofilms.ac.uk/wp-content/uploads/2024/12/GlasgowCaledonianUniversity_NBICWebsite.png",
      "https://upload.wikimedia.org/wikipedia/en/3/35/University_of_Law_logo.png",

      "https://www.ourpeopleyourfuture.co.uk/wp-content/uploads/2025/04/d3cccb13-48bf-438f-89b0-52d948672a18.png",
      "https://upload.wikimedia.org/wikipedia/en/a/a4/University_of_Roehampton_logo.png",
      "https://upload.wikimedia.org/wikipedia/en/7/77/Ravensbourne_University_London_logo.png",
      "https://duhocnamphong.vn/images/schools//2019/10/18/resized/dai-hoc-university_of_huddersfield_logo-duhocnamphong_1571402655.png",

      "https://www.ncub.co.uk/wp-content/uploads/2013/10/Teesside-Uni-logo-2-e1619522932640.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14V9zI-ZRfNVq3D6L_xRbc_gAl6lEKWzqGw&s",
      "https://www.podarworldcollege.org/wp-content/uploads/2020/11/WOLVERHAMPTON-LOGO.jpeg",
      "https://www.studyacrossthepond.com/sites/default/files/Logo%20University%20of%20Hull.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJOCLyb6y0nMIDjD8gVCAUMAC00QMDHYJdA&s",
      "https://cdn.theuniguide.co.uk/uploads/image/file/11301/University_of_Dundee.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJpD0J2J7OswZuJiSVmoWBFOrd725GEbPTg&s",
      "https://storage-prtl-co.imgix.net/endor/organisations/427/logos/1580988059_logo-a1_fullcolour.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_GxKExJ5Ii3dXCiIATWLDGlzlh5TEb0BIQ&s",
      "https://crm.educationhub-bd.com/storage/university-logo/20250325130516427441-uws%20logo.jpg",
      "https://www.thinkpostgrad.com/wp-content/uploads/sites/2/2022/09/New-Edge-Hill-logo-1.jpg",
      "https://www.gstudyabroad.com/wp-content/uploads/2018/07/UoB-Logo-No-TIRI-e1511868015664.png",
      "https://bwbsedu.com/wp-content/uploads/2024/04/BPP-University.jpg",
      "https://www.bitcni.org.uk/wp-content/uploads/2024/10/Ulster-University-logo.png",
      "https://keystoneacademic-res.cloudinary.com/image/upload/c_pad,w_3840,h_1280/dpr_auto/f_auto/q_auto/v1/element/16/162096_UH_Dark_RGB3000.png",
      
    ],
    "United States": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNxy1-x_9Gl-HkrFFAzOH-2FTH6yXga35_XPbFddmBHYMQIUGXQjoDjG7i40fMkRrGQ&usqp=CAU",
      "https://d2jyir0m79gs60.cloudfront.net/college/logos/Seattle_University.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5MDRypOrRPXsKYwNu08IJPXJYd0Af0-qKSw&s",
      "https://my.aacsb.edu/Portals/0/assets/images/contact/San-Francisco-State-University.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CA1rxeKZWASKSbb1J3p3pK53euyaMzKakg&s"
    ],
    Australia: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE1MUV1KX_ywBduR8MsdvqB2S0fPYoiQOTyA&s",
      "https://www.drupal.org/files/styles/grid-4-2x/public/UoA_logo_col_vert.png?itok=N4Eflsf2",
      "https://www.eduopinions.com/wp-content/uploads/2017/08/University-of-Sydney-USyd-logo.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKt9cMrMBhN-fdMltUO9zAFxdJOGxrgVz3Q&s",
      "https://usercontent.one/wp/studyoptions.com/wp-content/uploads/2021/09/The-University-of-Western-Australia-logo-profile.jpg",
    ],
    Canada: [
      "https://www.diglib.org/wp-content/uploads/sites/3/2014/12/UofT_Logo.svg_-e1418677958967.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xOO-tz8BqNEtSPcClYS82ctA8Jz4Nk1tog&s",
      "https://www.cdnlogo.com/logos/u/27/university-of-alberta.svg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi234fg7bSyImNBgNbNaCvE7HNFzohge6JlQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3Vei2QiWDaDPskFMdfYddEmFGmB2AmJX9g&s",
    ],
  };

  const toggleAccordion = (country) => {
    setOpen(open === country ? null : country);
  };

  return (
    <section className="partners">
      <h2>OUR GLOBAL PARTNERS</h2>
      <div className="line"></div>
      <p>
      Make your dream education a reality with top universities worldwide, easily and confidently.
      </p>

    
          
          

      {/* Desktop Tabs */}
      <div className="partners__tabs desktop">
        {Object.keys(countries).map((country) => (
          <button
            key={country}
            className={active === country ? "active" : ""}
            onClick={() => setActive(country)}
          >
            {country}
          </button>
        ))}
      </div>

      <div className="partners__grid desktop">
        {countries[active].map((logo, i) => (
          <div className="partners__card" key={i}>
            <img src={logo} alt={`${active} university logo`} />
          </div>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="partners__accordion mobile">
        {Object.keys(countries).map((country) => (
          <div className="accordion__item" key={country}>
            <button
              className={`accordion__header ${
                open === country ? "open" : ""
              }`}
              onClick={() => toggleAccordion(country)}
            >
              {country} <span>{open === country ? "−" : "+"}</span>
            </button>
            {open === country && (
              <div className="accordion__content">
                {countries[country].map((logo, i) => (
                  <div className="partners__card" key={i}>
                    <img src={logo} alt={`${country} university logo`} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}