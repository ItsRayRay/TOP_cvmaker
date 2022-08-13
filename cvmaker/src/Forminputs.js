import React from 'react'
import CVpage from './CVpage'




export default function Forminputs() {

   const [personalInfo, setPersonalInfo] = React.useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        website: ''
    })

    function handleChange(event) {
        const { name, value } = event.target
        setPersonalInfo(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const [education, setEducation] = React.useState([
        {
            school: 'test',
            city: 'test',
            degree: 'test',
            subject: 'test',
            fromEdu: 'test',
            toEdu: 'test',
        },
    {
        school: 'test1',
        city: 'test1',
        degree: 'test1',
        subject: 'test1',
        fromEdu: 'test1',
        toEdu: 'test1',
    }
    ])



    function addEducation() {
        setEducation(prevState => [
            ...prevState,
            {
                school: 'test',
                city: 'test',
                degree: 'test',
                subject: 'test',
                fromEdu: 'test',
                toEdu: 'test',
            }
        ])
    }

    function addExperience() {
        setExperience(prevState => [
            ...prevState,
            {
                position: 'test',
                company: 'test',
                city: 'test',
                from: 'test',
                to: 'test',
            }
        ])
    }

    function handleChangeExperience(event) {
        const { name, value } = event.target
        setExperience(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    const [experience, setExperience] = React.useState([
        {
            position: 'test',
            company: 'test',
            city: 'test',
            from: 'test',
            to: 'test'
        }
    ])





  return (
    <>
     <div className="input__field">
        <p>Personal Information</p>
        <input
          type="text"
          placeholder="Enter your full name"
          name="name"
         value={personalInfo.name}
         onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
         value={personalInfo.email}
         onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your phone number"
          name="phone"
        value={personalInfo.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your address"
          name="address"
          value={personalInfo.address}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your website"
          name="website"
         value={personalInfo.website}
         onChange={handleChange}
        />
        <button>upload profile picture</button>

        <p>Education</p>
        <input type="text" placeholder="Name School" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Degree" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <button onClick={addEducation} className="button__add">Add</button>
        <button className="button__remove">Remove</button>
        <p>Experience</p>
        <input
          type="text"
          placeholder="Position"
          name="position"
         value={experience.position}
          onChange={handleChangeExperience}
        />

        <input
          type="text"
          placeholder="Company"
          name="company"
        //  value={experience.company}
        //  onChange={handleChangeExperience}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
        //  value={experience.city}
       //   onChange={handleChangeExperience}
        />
        <input
          type="text"
          placeholder="From"
          name="from"
         // value={experience.value}
        //  onChange={handleChangeExperience}
        />
        <input
          type="text"
          placeholder="To"
          name="to"
        //  value={experience.value}
        //  onChange={handleChangeExperience}
        />

        <button onClick={addExperience}  className="button__add">Add</button>
        <button className="button__remove">Remove</button>
  
      </div>
    <CVpage
        name={personalInfo.name}
        email={personalInfo.email}
        phone={personalInfo.phone}
        address={personalInfo.address}
        website={personalInfo.website}
        education={education}
        experience={experience}
    />
    </>
  )
}
