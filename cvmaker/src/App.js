
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
    <Header />

      <div className='input__field'>
        <p>Personal Information</p>
        <input type='text' placeholder='Enter your first name' />
        <input type='text' placeholder='Enter your last name' />
        <input type='text' placeholder='Enter your email' />
        <input type='text' placeholder='Enter your phone number' />
        <input type='text' placeholder='Enter your address' />
        <input type='text' placeholder='Enter your website' />
        <input type='text' placeholder='Enter your summary' />
        <input type='text' placeholder='Enter your skills' />
        <input type='text' placeholder='Enter your experience' />
        <input type='text' placeholder='Enter your education' />
        <input type='text' placeholder='Enter your languages' />
        <input type='text' placeholder='Enter your interests' />

        <p>Experience</p>
        <input type='text' placeholder='Enter your career objective' />
        <input type='text' placeholder='Enter your career objective' />
        <input type='text' placeholder='Enter your career objective' />
        <input type='text' placeholder='Enter your career objective' />
        <button className="button__add">Add</button>
        <button className="button__remove">Remove</button>

        <p>Education</p>
        <input type='text' placeholder='Enter your education' />
        <input type='text' placeholder='Enter your education' />
        <input type='text' placeholder='Enter your education' />
        <input type='text' placeholder='Enter your education' />
        <button className="button__add">Add</button>
        <button className="button__remove">Remove</button>

      </div>

      <div className='output__field'>
        <div className="left__part">
          <div className="profile__picture">
            <img className="profile__picture__img" src="https://images.getpng.net/uploads/preview/instagram-social-network-app-interface-icons-smartphone-frame-screen-template27-1151637511568djfdvfkdob.webp" alt="profile picture" />
          </div>
          <div className="profile__info">
            <h2 className="profile__info__text">Raymond Boerema</h2>
            <p className="profile__info__text">Date of birth: </p>
            <p className="profile__info__text">Email:</p>
            <p className="profile__info__text">Phone:</p>
            <p className="profile__info__text">Address:</p>
            <p className="profile__info__text">Website:</p>
            </div>

        </div>
        <div></div>
      </div>

    <Footer />
    </>
  );
}

export default App;

