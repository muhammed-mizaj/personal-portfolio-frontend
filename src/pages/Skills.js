import React from 'react';
import SkillItem from '../Components/SkillItem';
const skillsData = [
  {
    "name": "Django",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/1200px-Django_logo.svg.png"
  },
  {
    "name": "React JS",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
  },
  {
    "name": "Flutter",
    "image": "https://flutter.dev/images/flutter-logo-sharing.png"
  },
  {
    "name": "Java",
    "image": "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
  },
  {
    "name": "Firebase",
    "image": "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png"
  },
  {
    "name": "MySQL",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png"
  },
  {
    "name": "Docker",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1200px-Docker_%28container_engine%29_logo.svg.png"
  },
  {
    "name": "AWS",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png"
  }
]

const Skills = () => {
  return (
    <div className=''>
      <h1 className="text-3xl font-bold mb-5">My Stacks</h1>
      <div class="container mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-2">
          {skillsData.map(skill => (
            <SkillItem name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
