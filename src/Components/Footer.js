import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="items-center p-4 shadow-lg footer sm:flex sm:flex-row sm:justify-between sm:text-center sm:px-4">
        <div className="items-center grid-flow-col gap-4 place-self-center">

          <p>
            {" "}
            Created By <span className="">MdDevolopers</span> |
            &copy; 2023 All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center">
          <a href="https://www.instagram.com/muh_a_.mmed/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-400 mx-2">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://github.com/muhammed-mizaj" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-400 mx-2">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/muhammedmizaj" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-400 mx-2">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://twitter.com/MuhammedMizaj2" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-400 mx-2">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
        </div>
        
      </footer>
    </div>
  );
};

export default Footer;
