import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div direction='horizontal' className="d-flex justify-content-evenly">
              <SocialIcon url="https://www.linkedin.com/in/ben-barlow-38363a175/" target="_blank" fgColor="#FFFFFF" className="mx-2"/>
              <SocialIcon url="https://www.facebook.com/ben.barlow.967" target="_blank" fgColor="#FFFFFF" className="mx-2"/>
              <SocialIcon url="https://www.youtube.com/channel/UCJLChlBmvC_3GQl-cIWIamw" target="_blank" fgColor="#FFFFFF" className="mx-2"/>
              <SocialIcon url="https://instagram.com/etrmediaproductions/" target="_blank" fgColor="#FFFFFF" className="mx-2"/>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="text-muted fw-light mt-3 mb-0 text-center">
              © 2021 All Rights Owned by Empower the Rebel LLC. <br/>
              Created by Aaron Cookson using GatsbyJS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
