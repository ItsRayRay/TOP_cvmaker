import React from 'react'

export default function CVpage(props) {


    const educationElement = props.education.map(thing => 
        
        <div className="education__container">
            <div className="education__item">
                <p className="education__school">School: {thing.school}</p>
                <p className="education__city"> City: {thing.city}</p>
                <p className="education__degree"> Degree: {thing.degree}</p>
                <p className="education__subject"> Subject: {thing.subject}</p>
                <p className="education__from"> From: {thing.fromEdu}</p>
                <p className="education__to">To: {thing.toEdu}</p>
            </div>
        </div>
    )


    const experienceElement = props.experience.map(thing =>
        <div className="experience__container">
            <div className="experience__item">
                <p className="experience__position">Position: {thing.position}</p>
                <p className="experience__company">Company: {thing.company}</p>
                <p className="experience__city">City: {thing.city}</p>
                <p className="experience__from">From: {thing.from}</p>
                <p className="experience__to">To: {thing.to}</p>
            </div>
        </div>
    )


   

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
            <p className="profile__info__text">Address: {props.address} </p>
            <p className="profile__info__text">Website: {props.website}</p>
          </div>
        </div>
        <div className="right__part">
            <h1>Experience</h1>
             {experienceElement}
            <h1>Education</h1>
              {educationElement}
        </div>
      </div>
    </>
  )
}
