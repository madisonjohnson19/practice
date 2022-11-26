import React from 'react';
import emailjs from 'emailjs-com';

export const emails = (type) => {
    
    var templateParams = {
        type: type,
        notes: 'Check this out!'
    };
  
    const sendEmail = (e) => {
        console.log("EMAIL CALLED")
        
    //   e.preventDefault();
  
      emailjs.send('service_qj1il6r', 'template_uidaev9', templateParams, 'umsqxQzVj9Hk5BxC7')
        .then((result) => {
            console.log("EMAIL SENT SUCCESS")
            console.log(result.text);
        }, (error) => {
            console.log("EMAIL SENT FAILED")
            console.log(error.text);
        });
        // e.target.reset();
    };

return(
    <div >
        {sendEmail()}
        {/* <input name ={type}> </input> */}
        
        {console.log("*********")}
    </div>
    // <form onSubmit={sendEmail}>
    //     <input name ={type}> </input>
        
    // <label>Name</label>
//   </form>
);
}