import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../Components/ProjectCard';
import { BASE_URL } from '../constants/urls';

const Projects = ({isDarkTheme}) => {

  const [projects, setProjects] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get(BASE_URL+'/api/projects');
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <div className="container mx-auto py-10 px-5 sm:px-10">
      <h1 className="text-3xl font-bold mb-5">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {visibleProjects.map(project => (
          <ProjectCard key={project.id} project={project} isDarkTheme={isDarkTheme}/>
        ))}
      </div>
      {projects.length > 3 && (
        <button className={`mt-5 px-3 py-1 rounded ${isDarkTheme ? 'bg-white text-black' : 'bg-black text-white'}`} onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default Projects;
