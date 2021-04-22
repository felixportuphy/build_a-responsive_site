
   var fname;
   var user_name;
   var email;
   var phone;
   var country;
   var subject;
   var allFields_alert;
   var error_message;
function validateForm() {
   
   fname = document.getElementById("name").value;
   user_name = document.getElementById("username").value;
   email= document.getElementById("email").value;
   phone = document.getElementById("phone").value;
   country = document.getElementById("country").value;
   subject = document.getElementById("subject").value;
   allFields_alert = document.querySelector("#af_msg");


   
      function error(){
         
         let show = ()=>{
            error_message.style.display = "block"
         }
          show();
         let hide = ()=>{
            error_message.style.display = "none"
         }
            setTimeout(hide,3000);
      }
    
      if(fname ==="" && user_name==="" && email==="" && phone===""){
         error_message = document.getElementById("af_msg");
         error_message.innerText ="All fields must be filled";
         error();
           
       return false;
      }
      else{
            if( fname === "" ) {      
               error_message = document.getElementById("name_error");
               error_message.innerText = "Please enter a valid Name";
              
               error();
               return false;
            }else if( user_name === "" ) {
               
               error_message =document.getElementById("username_error");
               error_message.innerText = "Please enter a valid username";
               error();
               return false;
            }else if( email === "" || email.indexOf("@") === -1|| email.length < 10 ) {
            
               error_message =document.getElementById("email_error");
               error_message.innerText = "Please enter a valid email address";
               error();
               return false;
            }else if(phone == "" || isNaN( phone ) || phone.length != 10  ) {
               error_message =document.getElementById("phone_error");
               error_message.innerText = "Please enter a valid phone number";
               error();
               return false;
            }else  if(phone[0] != 0){
               error_message =document.getElementById("phone_error");
               error_message.innerText = "Please enter phone number starting with 0";
               error();
               return false;
            }else if( country === "Select" ) {
              
               error_message =document.getElementById("country_error");
               error_message.innerText ="Please provide your country!";
               error();
               return false;
            }

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
            Fullname :${fname}
            Username :${user_name}
            PhoneNumber:${phone}
            Country:${country}
            ` )
         }

   });

     $(".menu").on("click",function(){
         $(".nav").slideToggle("fast");
      })