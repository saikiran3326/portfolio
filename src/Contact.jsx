import "./Contact.css"
import { useEffect, useState } from "react";
export default function Contact() {
    useEffect(() => {
        const wi = window.innerWidth;
        console.log(wi);
        const ddElement = document.getElementById('parent');
        const dtt=document.getElementById('ipp');
        if(ddElement){
          if (wi < 800) {
            ddElement.style.flexDirection = "column";
            ddElement.style.backgroundColor = "beige";
          }
        }
      },[]);
    return(
          <div id="ipp" style={{display:"flex",flexDirection:"column",height:"100vh",justifyContent:"space-around",paddingTop:"50px",marginBottom:"0px"}}>
        <h1>Let's Talk</h1>
         <div id="parent">
        <div id="map">
        <h3>meet me</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30369.773398326186!2d83.3873686743164!3d17.92181180000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39581b73ffffff%3A0xd04b9046faa4565f!2sAnil%20Neerukonda%20Institute%20of%20Techonology%20and%20Sciences%20(ANITS)!5e0!3m2!1sen!2sin!4v1726775202487!5m2!1sen!2sin" width={"500"} height={"500"} style={{"border":"0"}}></iframe>
        </div> 
        <div id="form">
        <h3>Get In Touch</h3>
        <form id="forms">
            <label for="name">enter your name</label>
            <input type="text" id="name" name="name" placeholder="Your name"></input>
            <label for="email">enter your email</label>
            <input type="email" id="email" name="email" placeholder="Your email"></input>
            <label for="message">please put here</label>
                        <textarea id="message" name="message" placeholder="Your message" cols={15} rows={5}></textarea>
            <input id="but" type="submit" value="submit"></input>
          </form>
        </div>
        </div>
        <footer style={{padding:"20px"}}>
          <p>© 2021 All rights reserved</p>
        </footer>        
        </div>
    )}