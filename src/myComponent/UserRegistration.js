
import './UserRegistration.css'

import React, { useState, useEffect } from 'react';

export const UserRegistration = () => {
    const [fName,setfName] = useState("");
    const [lName,setlName] = useState("");
    const [email,setemail] = useState("");
    const [phnNo,setphnNo] = useState("");
    const [userName,setuserName] = useState("");
    const [address,setaddress] = useState("");

    const [submitDisabled,setsubmitDisabled] = useState(true);
    const user = {FirstName: fName, LastName:lName,Email: email,phnNo:phnNo,UserName: userName,Address: address};
    const tvalidfName = (e) =>{
     let name = fName;
     
     if(name.length=== 0){ 
        setsubmitDisabled(false)
         }
         else{setsubmitDisabled(true)}
   }

   const submit= (e)=>{
    e.preventDefault();
    let str =phnNo;
    str.slice(0,3)
    if(str !== '+880'||phnNo.length !== 14){
    alert(" The number extension need to be a Bangladeshi extension or the digit of number is not valid");
  }
   console.log(JSON.stringify(user));
   }
        return(
            <div>
                 <form onSubmit={submit}>
                 <h1>Hello {fName} {lName}</h1>
                <h1>Registration User</h1>

               <div className="formContent">
                < input 
                className="input"  
                type="text" required
                name="fName"
                placeholder="First name* :"
                value={fName}
                onChange ={(e)=>{setfName(e.target.value);tvalidfName(e)}}
                
                />

               
                < input 
                className="input"   
                type="text" required 
                name="lName"
                placeholder="Last Name* :"
                value={lName}
                onChange={(e) => setlName(e.target.value)}/><br/>

               
                < input 
                className="input" 
                type="email" required
                    name="email"
                    placeholder="Email Address* :"
                    value={email}
                onChange={(e) => setemail(e.target.value)}/>

               
                < input 
                className="input" 
                type="text" required
                    name="phnNo"
                    placeholder="Phone No* :"
                    value={phnNo}
                onChange={(e) => setphnNo(e.target.value)}/><br/>

                
                < input 
                className="input" 
                type="text"  required
                name="username"
                placeholder="Username* :"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}/>

               
                < input 
                className="input" 
                type="text" required
                    name="address"
                    placeholder="Address* :"
                    value={address}
                onChange={(e) => setaddress(e.target.value)}/><br/>

                <>Gender</>

                < input 
                className="input" 
                type="checkbox" 
                name="Female"
                />
                

                < input 
                className="input" 
                type="checkbox"  
                name="Male"
                />
              

                < input 
                className="input" 
                type="checkbox" 
                name="other"
               />
                <br/>

                < button 
                 className="input"
                 id="submit" 
                 type="submit" 
                 name="Submit"
                 disabled={submitDisabled}>Submit</button><br/>
                 </div> 
            </form>
            </div>
        
    )
}
