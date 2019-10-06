// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDD5mQxiGQ9RQwfYTKgLUzaCIChAZPem40",
    authDomain: "dscku-register.firebaseapp.com",
    databaseURL: "https://dscku-register.firebaseio.com",
    projectId: "dscku-register",
    storageBucket: "dscku-register.appspot.com",
    messagingSenderId: "715362670942",
    appId: "1:715362670942:web:21a9fb10d5a8c25bca57cf",
    measurementId: "G-T770V851NE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  //Reference for form collection
  let formMessage = firebase.database().ref('members');

  //listen for submit event//
  document
    .getElementById('addform')
    .addEventListener('submit', formSubmit);
  
  //Submit form
  function formSubmit(e) {
      e.preventDefault();
      // Get Values from the DOM
      let username = document.querySelector('#username').value;
      let email = document.querySelector('#email').value;
      let phone = document.querySelector('#phone').value;
      let course = document.querySelector('#course').value;
      let year = document.querySelector('#year').value;
      // push the select into ana array
      const interests = []
      let web = document.querySelector('#web').value;
      let mobile = document.querySelector('#mobile').value;
      let iot = document.querySelector('#iot').value;
      let cloud = document.querySelector('#cloud').value;
      let ml = document.querySelector('#ml').value;
      interests.push(web);
      interests.push(mobile);
      interests.push(iot);
      interests.push(cloud);
      interests.push(ml);
      
      //send message values
      sendMessage(username, email, phone, course, year, interests);
    
      //Show Alert Message
      // document.querySelector('.alert').style.display = 'block';
      Swal.fire({
          title: `Wooaaah... Welcome ${username}`,
          type: 'success',
          // style:'font-size: 1.6rem !important;',
          customClass: {
            popup: 'format-pre'
          }
      })
    
      //Hide Alert Message After Seven Seconds(6)
      setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
      }, 7000);
    
      //Form Reset After Submission
      document.getElementById('addform').reset();
    }
    
    //Send Message to Firebase
    function sendMessage(username, email, phone, course, year, interests) {
      let newFormMessage = formMessage.push();
      newFormMessage.set({
        username: username,
        email: email,
        phone: phone,
        course: course,
        year: year,
        interests: interests
      });
    }