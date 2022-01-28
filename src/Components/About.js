import React from "react";
import myImage from "../assets/images/md.jpg";
import Services from "../pages/Services";
import Skills from "../pages/Skills";
import Works from "../pages/Works";
import Contact from "./Contact";
import Title from "./Title";
const About = () => {
  return (
    <div>
      <Title title={"About me"}/>
<div className="flex flex-row">

      <div className="flex basis-1/2 p-3">
        
      <ul class="steps steps-vertical">
  <li class="step">Completed 10th</li> 
  <li class="step ">Completed XII</li> 
  <li class="step">Joined TKMCE</li> 
  <li class="step step-warning">Still Searching for Hope</li>
</ul>
      </div>
      <div class="divider divider-vertical"></div> 
<div className="flex basis-1/2">
        <Skills />
      </div>
    </div>

    </div>
      );
};

export default About;
