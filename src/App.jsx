import React, { useState } from 'react';
import './App.css';

function App() {
  const [showMembers, setShowMembers] = useState(false);

  const members = [
    {
      fullName: "JAY BOHOLST PANER",
      photo: "/jay.jpg",
      age: 20,
      birthday: "May 20, 2005",
      address: "Brgy. Maticaa, Ormoc City",
      strand: "BSIT",
      school: "ACLC",
      education: { elem: "Matica-a Elementary School", high: "Matica-a National High School" },
      skills: ["Basketball", "Online Games"],
      stats: { height: "5'3", weight: "55kg", color: "Black" }
    },
    {
      fullName: "CABEROS DENMER JAMES G.",
      photo: "/denmer.jpg",
      age: 20,
      birthday: "December 17, 2005",
      address: "Visares, Capoocan, Leyte",
      strand: "BSIT",
      school: "ACLC College of Ormoc",
      education: { elem: "Visares Elementary School", high: "National Heroes Institute Inc." },
      skills: ["Cooking", "Online Games", "Volleyball", "Music"],
      stats: { height: "5'3", weight: "62kg", color: "Pink" }
    },
    {
      fullName: "ABIJAY FRANKLIN SAMSON",
      photo: "/abijay.jpg",
      age: 21,
      birthday: "October 22, 2004",
      address: "Brgy. San Pablo, Ormoc City",
      strand: "BSIT",
      school: "ACLC",
      education: { elem: "New Ormoc City High School", high: "New Ormoc City High School" },
      skills: ["Basketball", "Online Games"],
      stats: { height: "5'0", weight: "68kg", color: "Black" }
    }
  ];

  const goToHome = () => {
    setShowMembers(false);
    window.scrollTo(0, 0);
  };

  const goToAbout = () => {
    setShowMembers(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="logo" onClick={goToHome}>Port<span>folio</span></div>
        <ul className="nav-links">
          <li onClick={goToHome}>Home</li>
          <li onClick={goToAbout}>About</li>
        </ul>
      </nav>

      {!showMembers ? (
        <section className="landing-page">
          <div className="hero">
            <div className="hero-content">
              <h4>BSIT 2A | Appdev & Emerging Tech</h4>
              <h1 className="big-title">Meet our <span>Team</span></h1>
              
              {/* This image only shows on mobile/small screens via CSS */}
              <img src="/team.jpg" alt="Team" className="team-photo-mobile" />

              <p className="hero-desc">
                We are 2nd year IT students from ACLC College of Ormoc, introducing ourselves in this member portfolio.
              </p>
              <button className="btn-main" onClick={goToAbout}>Let's Start</button>
            </div>
            
            {/* This container will be hidden on mobile via CSS */}
            <div className="hero-image-right">
              <img src="/team.jpg" alt="Team" className="team-photo-big" />
            </div>
          </div>
        </section>
      ) : (
        <section className="members-list">
          <h2 className="section-title">About Our <span>Team</span></h2>
          {members.map((member, index) => (
            <div className="member-card-full" key={index}>
              <div className="member-visual">
                <img src={member.photo} alt={member.fullName} className="member-photo" />
              </div>
              <div className="member-info">
                <h2 className="name-header">{member.fullName}</h2>
                <div className="info-grid">
                  <p><strong>Age:</strong> {member.age}</p>
                  <p><strong>Birthdate:</strong> {member.birthday}</p>
                  <p><strong>Address:</strong> {member.address}</p>
                  <p><strong>Height:</strong> {member.stats.height}</p>
                  <p><strong>Weight:</strong> {member.stats.weight}</p>
                  <p><strong>Fav Color:</strong> {member.stats.color}</p>
                </div>
                
                <div className="edu-section">
                  <h4>Education</h4>
                  <p><strong>Elem:</strong> {member.education.elem}</p>
                  <p><strong>High School:</strong> {member.education.high}</p>
                </div>

                <div className="skills-section">
                  <h4>Skills & Hobbies</h4>
                  <div className="tags">
                    {member.skills.map(s => <span key={s} className="tag">{s}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className="btn-back" onClick={goToHome}>Back to Main</button>
        </section>
      )}

      <footer>
        <p>© 2026 ACLC BSIT Group - Portfolio</p>
      </footer>
    </div>
  );
}

export default App;