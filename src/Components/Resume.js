import React from 'react';

const Resume = ({resume}) => {

  let skillMessage, education, work, skills;

  if (resume.skillmessage) {

    // Aquire skillMessage info
    skillMessage = resume.skillmessage;

    // Aquire education info
    education = resume.education.map(education => {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">{education.degree} 
            <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    // Aquire work info
    work = resume.work.map(work => {

      let workroles = work.descriptions.map((roles, index) => {
        return <li key={index}>{roles}</li>
      });

      return (
        <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;
              </span>
              <em className="date">{work.years}</em>
            </p>
          <ul className="workroles">{workroles}</ul>
        </div>
      );
    });

    // Aquire skills info
    skills = resume.skills.map(skills => {

      let className = 'bar-expand ' + skills.name.toLowerCase();

      return (
        <li key={skills.name}>
          <span style={{width:skills.level}}className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return(
    <section id="resume">
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>
         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work Experience</span></h1>
         </div>
         <div className="nine columns main-col">
          {work}
        </div>
      </div>

      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">
            <p>{skillMessage}</p>
				    <div className="bars">
				      <ul className="skills">
					      {skills}
					    </ul>
				    </div>
			    </div>
        </div>
    </section>
  );
}

export default Resume;
