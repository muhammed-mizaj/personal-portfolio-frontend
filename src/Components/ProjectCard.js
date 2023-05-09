import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Modal from "./Modal";
import ThemeContext from "../contexts/ThemeContext";

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const { isDarkTheme } = useContext(ThemeContext);


  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const cardClass = isDarkTheme ? "max-w-sm rounded overflow-hidden shadow-lg bg-[#111] text-white" : "max-w-sm rounded overflow-hidden shadow-lg bg-white text-gray-900";


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
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">
          {project.stacks.map((stack) => stack.name).join(", ")}
        </span>
        {showLinks && (
          <div className="mt-2">
            {project.source_code_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#333]"
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
                className="hover:text-[#333] ml-4"
              >
                <FaExternalLinkAlt className="inline-block mr-2" />
                View
              </a>
            )}
          </div>
        )}
        <div className="mt-4">
          <button
            className="bg-[#333] hover:bg-[#222] text-white font-bold py-2 px-4 rounded"
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