import React from 'react';

const About = ({main}) => {

   let name, profilepic, bio, city, state, zip, phone, email, resumeDownload;

   if (main.address) {
      name = main.name;
      profilepic = 'images/' + main.image;
      bio = main.bio;
      city = main.address.city;
      state = main.address.state;
      zip = main.address.zip;
      phone = main.phone;
      email = main.email;
      resumeDownload = main.resumedownload;
    }

   return(
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src={profilepic} alt="Erick Pena Photo" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>{bio}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
						      <span>{name}</span><br />
						      <span>{city}<br />
						         {state}, {zip}
                        </span><br />
                        <span>{phone}</span><br />
                        <span>{email}</span>
					      </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a href='resume.pdf' target="blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default About;
