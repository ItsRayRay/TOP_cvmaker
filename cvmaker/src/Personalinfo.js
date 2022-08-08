import React from "react";

export default function Personalinfo() {
  const [info, setInfo] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    website: "",
  });

  console.log(info);

  function handleChange(event) {
    const { name, value } = event.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="input__field">
        <p>Personal Information</p>
        <input
          type="text"
          placeholder="Enter your full name"
          name="name"
          value={info.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={info.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your phone number"
          name="phone"
          value={info.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your address"
          name="address"
          value={info.address}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your website"
          name="website"
          value={info.website}
          onChange={handleChange}
        />
        <button>upload profile picture</button>

        <p>Experience</p>
        <input type="text" placeholder="Position" />
        <input type="text" placeholder="Company" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <button className="button__add">Add</button>
        <button className="button__remove">Remove</button>

        <p>Education</p>
        <input type="text" placeholder="Name School" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Degree" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <button className="button__add">Add</button>
        <button className="button__remove">Remove</button>
      </div>
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
            <h2 className="profile__info__text">{info.name}</h2>
            <p className="profile__info__text">Email: {info.email}</p>
            <p className="profile__info__text">Phone: {info.phone}</p>
            <p className="profile__info__text">Address: {info.address}</p>
            <p className="profile__info__text">Website: {info.website}</p>
          </div>
        </div>
        <div className="right__part">
          <div className="experience">
            <h2 className="experience__text">Experience</h2>
            <p className="experience__text">Position: </p>
            <p className="experience__text">Company:</p>
            <p className="experience__text">City:</p>
            <p className="experience__text">From:</p>
            <p className="experience__text">To:</p>
          </div>

          <div className="education">
            <h2 className="education__text">Education</h2>
            <p className="education__text">Name School:</p>
            <p className="education__text">City:</p>
            <p className="education__text">Degree:</p>
            <p className="education__text">Subject:</p>
            <p className="education__text">From:</p>
            <p className="education__text">To:</p>
          </div>
        </div>
      </div>
    </>
  );
}
