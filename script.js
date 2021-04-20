
   var name;
   var user_name;
   var email;
   var phone;
   var country;
   var subject;
   var allFields_alert;
function validateForm() {
   
   name = document.getElementById("name").value;
   user_name = document.getElementById("username").value;
   email= document.getElementById("email").value;
   phone = document.getElementById("phone").value;
   country = document.getElementById("country").value;
   subject = document.getElementById("subject").value;
   allFields_alert = document.querySelector("#af_msg");
    
    const data = [];
    if(name ==="" && user_name==="" && email==="" && phone===""){
      allFields_alert.innerText ="All fields must be filled";
      allFields_alert.style.display = "block";
     return false;
     }else if( name === "" ) {
      
        var error_message = document.getElementById("name_error");
        error_message.innerText = "wrong input";
        error_message.style.display = "block";
        return false;
     }else if( user_name === "" ) {
        
        var error_message =document.getElementById("username_error");
        error_message.innerText = "wrong input";
        error_message.style.display = "block";
        return false;
     }else if( email === "" || email.indexOf("@") === -1|| email.length < 10 ) {
      
        var error_message =document.getElementById("email_error");
        error_message.innerText = "wrong input";
        error_message.style.display = "block";
        return false;
     }else if(phone === "" || isNaN( phone ) || phone.length != 10 ) {
        var error_message =document.getElementById("phone_error");
        error_message.innerText = "wrong input";
        error_message.style.display = "block";
        return false;
     }else if( country == "-1" ) {
        alert( "Please provide your country!" );
        return false;
     }
     return  true;
}

 let submit_btn = document.getElementById("send");
 submit_btn.addEventListener("click",(e) => {
    e.preventDefault();
    validateForm();
  
    if(validateForm()){
       console.log(validateForm)
      alert(` 
      Fullname :${name}
      Username :${user_name}
      PhoneNumber:${phone}
      Country:${country}
      ` )
   }

      });


      $(".menu").on("click",function(){
         $(".nav").toggle();
      })