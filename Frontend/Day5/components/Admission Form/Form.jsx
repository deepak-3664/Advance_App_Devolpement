import '../../assets/css/Form.css'; // Assuming your CSS is in this file

const RegistrationForm = () => {
  return (
    <div>
      <form className="registration-form2" onSubmit={handleSubmit}>
        <center><h1 className='for'>ADMISSION FORM</h1></center>
      <div className='get-done2'>
        <div className="form-container2">
          <div className="personal-details2">
            <h2>Personal Details</h2>
            <div className="form-group2">
              <label htmlFor="fullName" className='label2'>Full Name</label>
              <input required id="fullName" type="text" placeholder="Enter your full name" className='input2' />
              <label htmlFor="dob" className='label2'>Date of Birth</label>
              <input required id="dob" type="date" className='input2'/>
              <label htmlFor="email" className='label2'>Email</label>
              <input required id="email" type="email" placeholder="Enter your email" className='input2'/>
              <label htmlFor="mobile" className='label2'>Mobile Number</label>
              <input required id="mobile" type="tel" placeholder="Enter mobile number"className='input2' />
              <label htmlFor="gender" className='label2'>Gender</label>
              <input required id="gender" type="text" placeholder="Enter your gender"className='input2' />
              <label htmlFor="occupation"className='label2'>Occupation</label>
              <input required id="occupation" type="text" placeholder="Enter your occupation"className='input2' />
            </div>
          </div>
          <div className="identity-details2">
            <h2>Identity Details</h2>
            <div className="form-group2">
              <label htmlFor="idType"className='label2'>ID Type</label>
              <input required id="idType" type="text" placeholder="Enter ID type" className='input2'/>
              <label htmlFor="idNumber"className='label2'>ID Number</label>
              <input required id="idNumber" type="text" placeholder="Enter ID number" className='input2'/>
              <label htmlFor="issueAuthority"className='label2'>Issue Authority</label>
              <input required id="issueAuthority" type="text" placeholder="Enter issue department" className='input2'/>
              <label htmlFor="issuedState"className='label2'>Issued State</label>
              <input required id="issuedState" type="text" placeholder="Enter issued state" className='input2'/>
              
            </div>
          </div>
          </div>  
        </div>
        <button className='btn-form2' type="submit">Next</button>
      </form>
      <div>
      </div>
    </div>
  );
}

const handleSubmit = (event) => {
  event.preventDefault();
  // Handle form submission logic here
}

export default RegistrationForm;