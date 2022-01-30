import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="items-center p-4 shadow-lg footer bg-gray-900 text-white">
        <div class="items-center grid-flow-col gap-4 place-self-center md:justify-between">

          <p>
            {" "}
            Created By <span className="text-transparent bg-clip-text bg-gradient-to-l from-green-600 to-purple-500">MdDevolopers</span> |
            &copy; 2022 All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
