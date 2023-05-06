import { useState } from "react";
import PropTypes from "prop-types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Modal from "./Modal";

const ProjectCard = ({ project,isDarkTheme}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const cardClass = isDarkTheme ? "max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 text-white" : "max-w-sm rounded overflow-hidden shadow-lg bg-white text-gray-900";


  const handleMouseEnter = () => {
    setShowLinks(true);
  };

  const handleMouseLeave = () => {
    setShowLinks(false);
  };

  return (
    <div
      className={cardClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="w-full" src={project.image} alt={project.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.name}</div>
        <p className="">{project.short_desc}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {project.stacks.map((stack) => stack.name).join(", ")}
        </span>
        {showLinks && (
          <div className="mt-2">
            {project.source_code_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaGithub className="inline-block mr-2" />
                Source Code
              </a>
            )}
            {project.view_link && (
              <a
                href={project.view_link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 ml-4"
              >
                <FaExternalLinkAlt className="inline-block mr-2" />
                View
              </a>
            )}
          </div>
        )}
        <div className="mt-4">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleOpen}
          >
            Know more
          </button>
        </div>
      </div>
      {isOpen && <Modal isOpen={isOpen} onClose={handleClose} project={project} isDarkTheme={isDarkTheme} />}
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard