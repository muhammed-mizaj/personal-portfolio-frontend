import React from "react";

const Modal = ({ project, onClose, isDarkTheme }) => {
  const bgColor = isDarkTheme ? "bg-black" : "bg-white";
  const textColor = isDarkTheme ? "text-white" : "text-black";

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className={`inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${bgColor} ${textColor}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className={`px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ${bgColor}`}>
            <div className="sm:flex sm:items-start">
              <div
                className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ${isDarkTheme ? 'bg-white' : 'bg-indigo-100'} sm:mx-0 sm:h-10 sm:w-10`}
              >
                <svg
                  className={`h-6 w-6 ${isDarkTheme ? 'text-black' : 'text-white-600'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className={`mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ${textColor}`}>
                <h3
                  className={`text-lg leading-6 font-medium ${textColor}`}
                  id="modal-headline"
                >
                  {project.name}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse ${bgColor}`}>
            <button
              type="button"
              className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ${isDarkTheme ? 'bg-white text-black' : 'bg-black text-white'} hover:${isDarkTheme ? 'bg-gray-200' : 'bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm transition duration-300 ease-in-out`}
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
