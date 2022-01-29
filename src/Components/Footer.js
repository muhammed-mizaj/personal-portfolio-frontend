import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="items-center p-4 footer bg-neutral text-neutral-content">
        <div class="items-center grid-flow-col gap-4 md:place-self-center md:justify-between">
          <span>
            <a href="https://www.facebook.com/muhammed.mizaj.3">
              <i class="fab fa-facebook-f"></i>
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/muh_ammed_10/">
              <i class="fab fa-instagram"></i>
            </a>
          </span>
          <span>
            <a   href="https://twitter.com/mizaj_muhammed">
              <i
                class="fab fa-twitter"
              
              ></i>
            </a>
          </span>
          <span><a href="https://wa.me/qr/5X5P2OMGIVKAC1"><i
              class="fab fa-whatsapp"
              
            ></i></a></span>
          <span>
              <a   href="https://www.youtube.com/channel/UC4f6w95BfQziD3f_DuZzvyQ/featured">
              <i
              class="fab fa-youtube"
           
            ></i>
                   </a>
          
          </span>
          <span>
            <a href="https://github.com/mdthegamer">
            <i
            class="fab fa-github github"
            
          ></i>
         
                </a>            
          </span>

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
