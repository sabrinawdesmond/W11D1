import { useState, useRef } from "react";

const Form = () => {
  const passwordFilled = useRef(null)

  const [user, setUser] = useState( {
    firstName: "",
    lastName: "",
    email: "", 
    phoneNumber: "",
    phoneType: "",
    staff: "", 
    bio: "", 
    signUpNotification: ""
  })

  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="First Name" value={user.firstName} onChange={handleChange('firstName')}/>
      <input type="text" placeholder="Last Name" value={user.lastName} onChange={handleChange('lastName')}/>
      <input type="email" placeholder="Email" value={user.email} onChange={handleChange('email')}/>
      <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone Number" value={user.phoneNumber} onChange={handleChange('phoneNumber')}/>
      <label for="Phone Type">Choose Phone Type</label>
      <select id="phoneType" size="3" multiple vaule={user.phoneType} onChange={handleChange("phoneType")}>
        <option value="home">Home</option>
        <option value="work">Work</option>
        <option value="mobile">Mobile</option>
      </select>
      <input type="radio" id="instructor" value={user.staff} onChange={handleChange("staff")}/>
        <label for="instructor">Instructor</label>

        <input type="radio" id="student" value={user.staff} onChange={handleChange("staff")}/>
        <label for="student">Student</label>
        <input type="textarea" placeholder="Bio" value={user.bio} onChange={handleChange("bio")}/>
        <input type="checkbox" id="signUpNotification" name="sign up notification" value={user.signUpNotification} onChange={handleChange("signUpNotification")}/>
        <label for="signUpNotification">Sign up for email notifications</label>
    </form>
    </>
  )
}

export default Form;