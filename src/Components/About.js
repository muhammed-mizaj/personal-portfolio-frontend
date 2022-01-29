import React from "react";
import myImage from "../assets/images/md.jpg";
import Services from "../pages/Services";
import Skills from "../pages/Skills";
import Works from "../pages/Works";

import Contact from "./Contact";
import SocialMedia from "./SocialMedia";

import Title from "./Title";
const About = () => {
  return (
    <div>
      <Title title={"About me"} />
      <div className="md:flex flex-row">
      <div className="flex basis-1/2 p-5">
<p className="text-green-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>
<div class="divider divider-vertical"></div> 

      <div className="flex basis-1/2 pl-5">
      <img  src={myImage} className="w-72 h-72 rounded-full object-cover"/>
</div>

      
      </div>
    </div>
  );
};

export default About;
