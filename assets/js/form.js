 let login = document.querySelector('.login')
 let modal = document.querySelector('.modal')
 let remove = document.querySelector('.remove')
 const summit = document.querySelector('#summitLogin')

 



 
 login.addEventListener('click',() =>{
    modal.style.display = "block"
    
 })

 remove.addEventListener('click',() =>{
    modal.style.display = "none"
 })

 summit.addEventListener('click',() =>{
   const inputEmail = document.querySelector('#ema').value
 const inputPassword = document.querySelector('#pass').value
   var email = "form@gmail.com"
   var password = "godwinkachi"
   const result = document.querySelector('.result')
      const resul = document.querySelector('#resul')
      resul.style.display = "block"
      result.style.display = 'block'
      result.style.paddingTop = '0.2rem'
      result.style.color ='white'
      resul.addEventListener('click',() =>{
         modal.style.display = "block"
         result.style.display ='none'
         resul.style.display = "none"
      })
   
   if(inputEmail == "" || inputPassword == ""){
      
      document.querySelector('.result').innerHTML = "Please fill in the blank space!!"
      document.querySelector('.resul').innerHTML = "x"
      // alert("check")
   }
  else if(inputEmail != email && inputPassword == password){
         // alert("uncheck")
         document.querySelector('.result').innerHTML = "your email is incorrect!!" 
         document.querySelector('.resul').innerHTML = "x"
         
      }
      else if(inputEmail == email && inputPassword != password ){
         document.querySelector('.result').innerHTML= "your password is incorrect!!" 
         document.querySelector('.resul').innerHTML = "x"
   //  alert('correct man')
      }else if(inputEmail != email && inputPassword != password){
         document.querySelector('.result').innerHTML = "your email and password are incorrect!!" 
         document.querySelector('.resul').innerHTML = "x"

      }
      else if(inputEmail == email && inputPassword == password){
         result.style.display ='none'
         resul.style.display = "none"
         // setTimeout(function(){
         //    window.location.reload();
         // }, 5000)
         setTimeout(function() {
            window.location.href = "http://127.0.0.1:5500/dashboard/dashboard.html";
         });
         // window.location.href = "http://127.0.0.1:5500/dashboard/dashboard.html"
         // alert('click ok to take you to dashboard')
         // location.href =  "../dashboard/dashboard.html"

      }
 })
 
