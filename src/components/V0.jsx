import React from 'react'
import FooterV0 from './FooterV0'
import dp from '../assets/Images/Orginal.jpg'

const V0 = () => {
  return (
    <div className="portfolio-container">
      {/* Content Container */}
      <div className="content-wrapper">
        {/* Main Div */}
        <div className="main-card">
          {/* top bar , Name and Social Icons  */}
          <div className="name-intro">
            I'm , <span className="name-highlight">Rachit Dhaka </span>
          </div>
          
          {/* Profile Image - Mobile only (at top) */}
          <div className="mobile-profile-container">
            <div className="image-wrapper">
              <div className="glow-effect primary-glow"></div>
              <div className="glow-effect secondary-glow"></div>
              <img src={dp} alt="Rachit Dhaka" className="profile-image" />
            </div>
          </div>

          {/* Intro Div */}
          <div className="intro-section">
            <div className="intro-list-container">
              <ul className="intro-list">
                <li>Developer-Dsa-Designer</li>
                <li>Full Stack Developer </li>
                <li>Building Vartalaap Podacast</li>
                <li>Core Member of GeeksForGeeks SRM-RMP</li>
              </ul>
            </div>

            {/* Desktop Profile Image (hidden on mobile) */}
            <div className="desktop-profile-container">
              <div className="image-wrapper">
                <div className="glow-effect primary-glow"></div>
                <div className="glow-effect secondary-glow"></div>
                <img src={dp} alt="Rachit Dhaka" className="profile-image" />
              </div>
            </div>
          </div>

          <div className="section-title">Projects</div>
          {/* Project Div */}
          <div className="project-section">
            <ol className="project-list">
              <li>
                <a
                  href="https://github.com/rachitdhaka/Paste-Application"
                  className="project-link"
                >
                  Paste Application{" "}
                </a>
                - Notes Saving Application
              </li>
              <li>
                <a
                  href="https://devfolio.co/projects/orbitus-d287"
                  className="project-link"
                >
                  Orbit Us -{" "}
                </a>
                Decentralised Drop servicing Platform
              </li>
              <li>
                <a
                  href="https://eth-link-vcpn.vercel.app/"
                  className="project-link"
                >
                  Eth Link -{" "}
                </a>
                Decentralised Job Searching Platform
              </li>
            </ol>
          </div>

          {/* Education Div */}
          <div className="section-title">Education</div>
          <div className="education-section">
            <ul className="education-list">
              <li>
                SRM Institute of Science & Technology - Chennai
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-container">
        <FooterV0/>
      </div>

      <style jsx>{`
        /* Base styles (mobile first) */
        .portfolio-container {
          background-color: #18181b;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 15px;
          color: white;
        }
        
        .content-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        
        .main-card {
          width: 100%;
          min-height: 90%;
          border-radius: 1.5rem;
          padding: 15px;
        }
        
        .name-intro {
          font-size: 1.1rem;
          color: #9b9b9b;
          margin-bottom: 15px;
        }
        
        .name-highlight {
          font-weight: bold;
          font-size: 1.75rem;
          color: white;
        }
        
        /* Mobile profile image - at the top */
        .mobile-profile-container {
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }
        
        /* Desktop profile image - hidden on mobile */
        .desktop-profile-container {
          display: none;
        }
        
        .intro-section {
          padding: 10px;
          display: flex;
          flex-direction: column;
          margin-top: 5px;
        }
        
        .intro-list-container {
          width: 100%;
        }
        
        .intro-list {
          list-style-type: disc;
          padding-left: 20px;
          color: #9b9b9b;
          font-size: 0.95rem;
        }
        
        .image-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
        }
        
        .glow-effect {
          position: absolute;
          inset: 0;
          border-radius: 0.375rem;
        }
        
        .primary-glow {
          background-color: #525252;
          filter: blur(15px);
          opacity: 0.5;
        }
        
        .secondary-glow {
          background-color: white;
          filter: blur(5px);
          opacity: 0.4;
        }
        
        .profile-image {
          position: relative;
          width: 120px;
          height: 120px;
          border-radius: 0.375rem;
          z-index: 10;
        }
        
        .section-title {
          font-weight: bold;
          font-size: 1.4rem;
          margin-top: 20px;
        }
        
        .project-section {
          padding-left: 15px;
          margin-top: 12px;
        }
        
        .project-list {
          list-style-type: decimal;
          padding-left: 20px;
          color: #9b9b9b;
          font-size: 0.95rem;
        }
        
        .project-link {
          font-weight: 600;
          color: white;
        }
        
        .education-section {
          padding-left: 15px;
        }
        
        .education-list {
          list-style-type: disc;
          padding-left: 20px;
          color: #9b9b9b;
          margin-top: 12px;
          font-size: 0.95rem;
        }
        
        .footer-container {
          margin-top: 30px;
          padding-bottom: 15px;
        }
        
        /* Tablet Screens (576px+) */
        @media screen and (min-width: 576px) {
          .portfolio-container {
            padding: 20px;
          }
          
          .main-card {
            padding: 20px;
          }
          
          .name-intro {
            font-size: 1.25rem;
          }
          
          .name-highlight {
            font-size: 2rem;
          }
          
          /* Hide mobile profile image */
          .mobile-profile-container {
            display: none;
          }
          
          /* Show desktop profile image */
          .desktop-profile-container {
            display: flex;
            justify-content: center;
            width: 25%;
          }
          
          .intro-section {
            flex-direction: row;
            justify-content: space-between;
            padding: 15px 30px;
            margin-top: 20px;
          }
          
          .intro-list-container {
            width: 75%;
          }
          
          .intro-list {
            font-size: 1rem;
          }
          
          .section-title {
            font-size: 1.65rem;
          }
          
          .project-section, .education-section {
            padding-left: 30px;
          }
          
          .project-list, .education-list {
            font-size: 1rem;
          }
        }
        
        /* Medium Screens (768px+) */
        @media screen and (min-width: 768px) {
          .main-card {
            width: 80%;
          }
          
          .name-highlight {
            font-size: 2.25rem;
          }
        }
        
        /* Large Screens (992px+) */
        @media screen and (min-width: 992px) {
          .main-card {
            width: 60%;
          }
          
          .intro-list-container {
            width: 80%;
          }
          
          .desktop-profile-container {
            width: 20%;
          }
        }
        
        /* Extra Large Screens (1200px+) */
        @media screen and (min-width: 1200px) {
          .main-card {
            width: 50%;
          }
        }
      `}</style>
    </div>
  )
}

export default V0