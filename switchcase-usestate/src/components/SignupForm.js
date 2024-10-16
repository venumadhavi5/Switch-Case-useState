import React ,{useRef} from 'react'

function SignupForm() {
    let msgLabelRef= useRef();
    let stateSelectRef=useRef();
    let firstNameInputRef=useRef();
    let lastNameInputRef=useRef();
    let maleRBRef=useRef();
    let femaleRBRef=useRef();
    let selectedGender;
    let salutation;
    let maritalStatus;
    let languagesKnown={
        eng:false,
        tel:false,
        hin:false,
        tam:false,
        mal:false
    }
    let ageInputRef=useRef();

    let onClickSubmit =()=>{
       if( selectedGender==="male"){
        salutation ="Mr."
       }else{
        if(maritalStatus==="single"){
        salutation="Miss."
         } else{
            salutation="Mrs."
         } 
         }

         console.log(languagesKnown);
        msgLabelRef.current.innerHTML =`${salutation}${firstNameInputRef.current.value} ${lastNameInputRef.current.value} from ${stateSelectRef.current.value} ,your Account has been created successfully and you know
         ${languagesKnown.tel===true?"Telugu":""} ${languagesKnown.eng===true?"English":""} ${languagesKnown.hin===true?"Hindi":""} ${languagesKnown.tam===true?"Tamil":""} ${languagesKnown.mal===true?"Malayalam":""} `
    }
  return (
    <div>
        <h1>Signup Form</h1>

<form>
    <div>
        <label>FirstName</label>
        <input ref={firstNameInputRef}></input>
    </div>
    <div>
        <label>LastName</label>
        <input ref={lastNameInputRef}></input>
    </div>
    <div>
        <label>Gender</label>
        <input type='radio' name='gender' ref={maleRBRef} onChange={()=>{
               if(maleRBRef.current.checked===true){
                selectedGender="male"

               }
        }}
            ></input>
        <label className='innerLabel'>Male</label>
        <input type='radio' name='gender' ref={femaleRBRef} onChange={()=>{
               if(femaleRBRef.current.checked===true){
                selectedGender="female"

               }
        }}></input>
        <label className='innerLabel'>Female</label>
    </div>
    <div>
        <label>Marital Status</label>
        <input type='radio' name='ms' onChange={(eventObj)=>{
            console.log(eventObj);
            if(eventObj.target.checked===true){
                maritalStatus="single"

            }
        }

    }></input>
        <label className='innerLabel'>Single</label>
        <input type='radio' name='ms'onChange={(eventObject)=>{
            console.log(eventObject);
            if(eventObject.target.checked===true){
                maritalStatus="married"

            }
        }

    }></input>
        <label className='innerLabel'>Married</label>
        
    </div>
    <div>
        <label>State</label>
        <select ref={stateSelectRef} onChange={()=>{
            let state=stateSelectRef.current.value;
            console.log(state);
            switch (state) {
                case "Andhra Pradesh":
                    console.log("Amaravathi")
                    
                    break;
            
                default:
                    break;
            }
            switch (state) {
                case "Telangana":
                    console.log("Hyderabad")
                    
                    break;
            
                default:
                    break;
            }
            switch (state) {
                case "Tamil Nadu":
                    console.log("Chennai")
                    
                    break;
            
                default:
                    break;
            }
            switch (state) {
                case "Kerala":
                    console.log("Tiruvananthpuram")
                    
                    break;
            
                default:
                    break;
            }
            switch (state) {
                case "Karnataka":
                    console.log("Bengaluru")
                    
                    break;
            
                default:
                    break;
            }
            switch (state) {
                case "Madhya Pradesh":
                    console.log("Bhopal")
                    
                    break;
            
                default:
                    break;
            }
            switch (state) {
                case "Gujarath":
                    console.log("Gandhi Nagar")
                    
                    break;
            
                default:
                    break;
            }
            switch (state) {
                case "Maharashtra":
                    console.log("Mumbai")
                    
                    break;
            
                default:
                    break;
            }
            
        }}>
            <option>Select State</option>
            <option >Andhra Pradesh</option>
            <option >Telangana</option>
            <option >Tamil Nadu</option>
            <option>Kerala</option>
            <option >Karnataka</option>
            <option >Madhya Pradesh</option>
            <option >Gujarath</option>
            <option >Maharashtra</option>
            
        </select>
    </div>
    <div>
        <label>Languages Known</label>
        <input type='checkbox' onChange={(eventObj)=>{
           languagesKnown.tel= eventObj.target.checked;

        }} ></input>
        <label className='innerLabel'>Telugu</label>
        <input type='checkbox' onChange={(eventObj)=>{
           languagesKnown.eng= eventObj.target.checked;

        }}  ></input>
        <label className='innerLabel'>English</label>
        <input type='checkbox' onChange={(eventObj)=>{
           languagesKnown.hin= eventObj.target.checked;

        }}  ></input>
        <label className='innerLabel'>Hindi</label>
        <input type='checkbox' onChange={(eventObj)=>{
           languagesKnown.tam= eventObj.target.checked;

        }}  ></input>
        <label className='innerLabel'>Tamil</label>
        <input type='checkbox'onChange={(eventObj)=>{
           languagesKnown.mal= eventObj.target.checked;

        }}   ></input>
        <label className='innerLabel'>Malayalam</label>
    </div>
    <div>
        <label>Email</label>
        <input></input>
    </div>
    <div>
        <label>Password</label>
        <input></input>
    </div>
    <div>
        <label>Age</label>
        <input ref={ageInputRef} onChange={()=>{
            let age= Number(ageInputRef.current.value);
            if(age<5){
                console.log(`Infant`)
            }else if(age>=5 && age<=10){
                console.log(`kid`)
            }else if(age>=12 && age<=20){
                console.log(`Teen`)
            }else if(age>=20 && age<=30){
                console.log(`Young`)
               }   else if(age>=30 && age<=45){
                    console.log(`Middle Age`)
                }   else if(age>=45 && age<=70){
                    console.log(`Old Age`)
                }else{
                    console.log(`not a valid value`)
                }

}}></input>
    </div>
    <div>
        <button type='button' onClick={()=>{
            onClickSubmit();
        }}>Submit</button>
    </div>
    <label ref={msgLabelRef} style={{width:"500px"}}></label>
</form>
      
    </div>
  )
}

export default SignupForm
