import React from 'react';
import './App.css';

function Contact() {

    window.addEventListener("DOMContentLoaded", function() {

        // get the form elements defined in your form HTML above
        
        var form = document.getElementById("my-form");
        var status = document.getElementById("status");
    
        // Success and Error functions for after the form is submitted
        
        function success() {
          form.reset();
          status.classList.add('success');
          status.innerHTML = "Thanks!";
        }
    
        function error() {
            status.classList.add('error');
          status.innerHTML = "Oops! There was a problem.";
        }
    
        // handle the form submission event
    
        form.addEventListener("submit", function(ev) {
          ev.preventDefault();
          var data = new FormData(form);
          ajax(form.method, form.action, data, success, error);
        });
      });
      
      // helper function for sending an AJAX request
    
      function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
          } else {
            error(xhr.status, xhr.response, xhr.responseType);
          }
        };
        xhr.send(data);
      }

  return (
    <div className="Contact">
    <div className=" team-top">
    <div className="team-banner">
          Contact Us
      </div>
    </div>
      <div className="Wrapper-of-contact">
         <div className="contact-from">
             <h3>Contact Us</h3>
             <p>We are happy to answer your question. Just send us the message in the form below.</p>
             
             <form action="https://formspree.io/f/mdopvlbw" method="POST" id="my-form">
                <label for="name">NAME</label><br></br>
                <input id="name" type="text" placeholder="Enter your name" /><br></br>

                <label for="email">EMAIL ADDRESS</label><br></br>
                <input id="email" type="text" placeholder="Enter your email" required/><br></br>

                <label for="message">MESSAGE</label><br></br>
                <textarea type="textarea" id="message" name="message" placeholder="Write your message here!" /><br></br>

                <button type="submit">SUBMIT</button>
             </form>
             <div id="submit-status"></div>
         </div>
         <div className="office-location">
            <div>
              <h6>US OFFICE</h6>
              <p>Christie Ave, Emeryille CA 94608</p>
            </div>
             
            <div>
              <h6>UAE OFFICE</h6>
              <p>Office 10, Level 1, Sharjah Media City, Sharjah</p>
            </div>

            <div>
              <h6>WORKING HOURS</h6>
              <p>08AM – 4PM, Monday – Friday</p>
            </div>

            <div>
              <h6>CONTACT</h6>
              <a href="www.contact@Steelbrain.net">contact@steelbrain.net</a>
              <p>(740) 247 5996</p>
            </div>

         </div>
      </div>
    </div>
  );
}

export default Contact;
