import { useState } from "react";
import './form.css'

const Form = () => {
  const [user, setUser] = useState( {
    firstName: "",
    lastName: "",
    email: "", 
    phoneNumber: "",
    phoneType: "",
    staff: "", 
    bio: "", 
    signUpNotification: ""
  });
  
  const [errors, setErrors] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentErrors = validate();
    setErrors(currentErrors);

    if (currentErrors.length) {
      console.log('ERRORS!');
    } else {
      console.log('No Errors');
    } 
  };
  
  const handleChange = (field) => {
    return (e) => {
      const value = e.target.value
      setUser({
        ...user,
        [field]: value
      });
    } 
  };

  function isEmail(emailAdress){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) 
    return true; 

   else 
    return false; 
}
  const validate = () => {
    
    const currentErrors = [];
    if (user.firstName.length === 0) currentErrors.push('First Name is missing')
    if (user.lastName.length === 0) currentErrors.push('Last Name is missing')
    if (user.phoneNumber.length > 0 && user.phoneType === '') currentErrors.push('Phone type must be selected')
    if (user.bio.length > 280) currentErrors.push('Bio should have a character limit of 280 characters')
    if (!isEmail(user.email)) currentErrors.push('Invalid email address')
    return currentErrors;
  };




  
  return(
    <>
      <ul>
        {errors.map((error, i) => <li key={i}>{error}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" value={user.firstName} onChange={handleChange('firstName')}/>
        <br></br>
        <input type="text" placeholder="Last Name" value={user.lastName} onChange={handleChange('lastName')}/>
        <br></br>
        <input type="email" placeholder="Email" value={user.email} onChange={handleChange('email')}/>
        <br></br>
        <input type="tel" placeholder="123-123-1234" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={user.phoneNumber} onChange={handleChange('phoneNumber')}/>
        <br></br>
        
        {/* Drop down */}
        <label for="Phone Type">Select Phone Type  </label>
        <select id="phoneType"  size="1" vaule={user.phoneType} onChange={handleChange("phoneType")}>
          <option value="" disabled selected>Select your option</option>
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="mobile">Mobile</option>
        </select>
        
        <br></br>
        <input type="radio" id="instructor" name="staff" value={user.staff} onChange={handleChange("staff")}/>
          <label for="instructor">Instructor</label>

        <input type="radio" id="student" name="staff" value={user.staff} onChange={handleChange("staff")}/>
          <label for="student">Student</label>
        
        <br></br>
        <textarea placeholder="Bio" value={user.bio} onChange={handleChange("bio")}></textarea>
        <br></br>
        <input type="checkbox" id="signUpNotification" name="sign up notification" value={user.signUpNotification} onChange={handleChange("signUpNotification")}/>
        <label for="signUpNotification">Sign up for email notifications</label>

        <br></br>
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default Form;