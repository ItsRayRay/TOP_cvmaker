import React from 'react'

export default function CVpage(props) {



    const thingsElement = props.education.map(thing => 
        
        <div className="education__container">
            <div className="education__item">
                <p className="education__school">{thing.school}</p>
                <p className="education__city">{thing.city}</p>
                <p className="education__degree">{thing.degree}</p>
                <p className="education__subject">{thing.subject}</p>
                <p className="education__from">{thing.fromEdu}</p>
                <p className="education__to">{thing.toEdu}</p>
            </div>
        </div>
    )


    
   

    // const experience = props.experience.map((exp, index) => {
    //     <div className="experience">
    //     <h2 className="experience__text">Experience</h2>
    //     <p className="experience__text">Position: {props.position} </p>
    //     <p className="experience__text">Company: {props.company}</p>
    //     <p className="experience__text">City: {props.city}</p>
    //     <p className="experience__text">From: {props.from}</p>
    //     <p className="experience__text">To: {props.to}</p>
    //     </div>
    // })





  return (
    <>
        <div className="output__field">
        <div className="left__part">
          <div className="profile__picture">
            <img
              className="profile__picture__img"
              src="https://images.getpng.net/uploads/preview/instagram-social-network-app-interface-icons-smartphone-frame-screen-template27-1151637511568djfdvfkdob.webp"
              alt="profile picture"
            />
          </div>
          <div className="profile__info">
            <h2 className="profile__info__text"> {props.name}</h2>
            <p className="profile__info__text">Email: {props.email}</p>
            <p className="profile__info__text">Phone:  {props.phone} </p>
            <p className="profile__info__text">Address: </p>
            <p className="profile__info__text">Website: </p>
          </div>
        </div>
        <div className="right__part">
             {/* {experience} */}
              {thingsElement}
        </div>
      </div>
    </>
  )
}
