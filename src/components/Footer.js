import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
    <div className="contact-us">
       <ul className="news">
            <li>
            <h2>Newslleter</h2>
            <p>Get news about articles and updates in your inbox.</p>
            </li>
       </ul>
       <ul className="contact">
          <form action="#">
                 <input type="text" name="name" placeholder="NAME" required/>
                 
                 <input type="text" name="email" placeholder="EMAIL" required/>
                 
                 <input type="text" name="message" placeholder="MESSAGE" required/>
                 <button type="submit" name="submit" value="Submit">SEND</button>
         </form>
       </ul>
       </div>
       <div className="contact-heading">GET <br/> IN TOUCH</div>
       <div className="copyright">Copyright 2022 All Right Reserved By SG</div>
    </div>
  );
}
