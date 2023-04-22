//Document Ready
$(document).ready(function () {
    $('#submit').click(function() {
        if (validateForm()) {
          // submit the form
          $('.contact-form').submit();
        }
      });
});

function validateForm() {
    var firstName = $('#fName').val();
    var lastName = $('#lName').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var category = $('#Category').val();
    var questions = $('#questions').val();
  
    // check each input field
    if (firstName === '') {
      alert('Please enter your first name.');
      return false;
    }
    if (lastName === '') {
      alert('Please enter your last name.');
      return false;
    }
    if (email === '') {
      alert('Please enter your email address.');
      return false;
    } else if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    if (phone === '') {
      alert('Please enter your phone number.');
      return false;
    } else if (!isValidPhone(phone)) {
      alert('Please enter a valid phone number.');
      return false;
    }
    if (category === '') {
      alert('Please select a category.');
      return false;
    }
    if (questions === '') {
      alert('Please enter your questions.');
      return false;
    }
  
    // if all fields are valid, submit the form
    return true;
  }
  
  function isValidEmail(email) {
    // use a regular expression to check if the email is valid
    // this is a simple example, there are many possible ways to validate an email address
    var emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }
  
  function isValidPhone(phone) {
    // use a regular expression to check if the phone number is valid
    // this is a simple example, there are many possible ways to validate a phone number
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
  