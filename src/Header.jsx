import React, { useEffect } from 'react';
import './Header.css'
export default function Header() {
  useEffect(() => {
    const wi = window.innerWidth;
    const ddElement = document.getElementById('ddimage'); 
    const dip=document.getElementById('ppppp');
    if (ddElement) {
      if (wi < 600) {
        ddElement.style.borderRadius = "50%";
        dip.style.height="100vh";
      }
    }
  }, []); 
  return (
        <div id='ppppp' style={{display:"flex",justifyContent:"space-evenly",alignItems:"center", flexWrap:"wrap",height:"80vh",backgroundColor:"beige"}}>
        <img id="ddimage" src="../public/sai background.png" alt="project1"/>
        <div id='content'>
            <h1>I'm Sai Kiran</h1>
            <h3>Web Developer</h3>
            <div id="social">
                <a href='https://www.facebook.com/'><img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="facebook" width={"50px"} /></a>
                <a href='https://www.linkedin.com/in/alikana-sai-kiran-webdeveloper/'><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="linkedin" width={"50px"} /></a>
                <a href='https://github.com/saikiran3326'><img src="https://cdn-icons-png.flaticon.com/128/25/25657.png" alt="github" width={"50px"} /></a>
            </div>
            <div id='hero'>
            <button onClick={openre}>
  <div>
    <span>
      <p><>Resume</></p>
    </span>
  </div>
  <div>
    <span>
      <p>Thanks</p>
    </span>
  </div>
</button>
<button onClick={opened}>
  <div>
    <span>
      <p><a id="viewed"></a>view more</p>
    </span>
  </div>
  <div>
    <span>
      <p>Thanks</p>
    </span>
  </div>
</button>
              </div>
        </div>
        </div>
    )}
    function opened(){
      window.open('#about','self');
    }
    function openre(){
      window.open('https://drive.google.com/file/d/1H4w5Cay6lK1F4cL6ds4xMfvT6bvM42V3/view?usp=sharing','self');
    }