import React from "react";
import myImage from "../assets/images/md.jpg";
import mySideImage from "../assets/images/md_side.jpg";
import Services from "../pages/Services";
import Skills from "../pages/Skills";
import Works from "../pages/Works";

import Contact from "./Contact";
import SocialMedia from "./SocialMedia";

import Title from "./Title";
const About = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Title title={"About me"} />
      <div className="md:flex flex-row">
      <div className="flex basis-1/2 p-5">
<p className="text-green-700">I am Muhammed Mizaj, a passionate student devoloper, from Calicut, India.  I can refer to myself as an enthusiastic Django developer and is currently on the process of improving my skillsets. I am always open to opportunities to learn new technologies and be updated on the same.</p>
</div>
<div class="divider divider-vertical"></div> 

      <div className="flex basis-1/2 pl-5">
      <img  src={mySideImage} className="w-56 h-56 rounded-full object-cover fit"/>
</div>

      
      </div>
    </div>
  );
};

export default About;
