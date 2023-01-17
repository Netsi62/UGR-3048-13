const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    if (!checkInputs()) {
          e.preventDefault();
      }
  });


  function checkInputs() {
    // trim to remove the whitespaces
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    // const passwordValue = password.value.trim();
      const messageValue = message.value.trim();
      var check = true;




      if(nameValue === '') {
        setErrorFor(name, 'Please enter Full name');
            check  = false;
            
      } else {
        setSuccessFor(name);
      }
      
      if(emailValue === '') {
        setErrorFor(email, 'Please enter email');
            check = false;
      } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
            check = false;
      } else {
        setSuccessFor(email);
      }
      
      // if(passwordValue === '') {
      //   setErrorFor(password, 'Please enter password');
      // } else {
      //   setSuccessFor(password);
      // }
      
     
        if(messageValue === '') {
        setErrorFor(message, 'Please enter your message');
            check = false;
      } else{
        setSuccessFor(message);
      }
        if (check === false) {
            return false;
        } else{
            return true;
        }
    }

    function setErrorFor(input, message) {
        const inputBox = input.parentElement;
        const small = inputBox.querySelector('small');
        inputBox.className = 'input-box error';
        small.innerText = message;
      }
      
      function setSuccessFor(input) {
        const inputBox = input.parentElement;
        inputBox.className = 'input-box success';
      }
        
      function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      }
      
      function alertFunction() {
          if(checkInputs()) {
              alert('Thank you for your message. We replay soon')
          }
      }    