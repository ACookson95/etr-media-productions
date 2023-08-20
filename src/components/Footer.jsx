import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="bg-zinc-700">
      <div className="container mx-auto p-3">
        <div className="flex justify-between">
          <div />
          <div className="py-8">
            <SocialIcon
              url="https://www.linkedin.com/in/ben-barlow-38363a175/"
              target="_blank"
              fgColor="#FFFFFF"
              className="mx-2"
            />
            <SocialIcon
              url="https://www.youtube.com/channel/UCJLChlBmvC_3GQl-cIWIamw"
              target="_blank"
              fgColor="#FFFFFF"
              className="mx-2"
            />
            <SocialIcon
              url="https://instagram.com/etrmediaproductions/"
              target="_blank"
              fgColor="#FFFFFF"
              className="mx-2"
            />
          </div>
        </div>
        <div>
          <div>
            <p className="text-muted text-xs text-center text-zinc-400">
              © 2021 All Rights Owned by Empower the Rebel LLC. <br />
              Website created by{" "}
              <a
                className="text-zinc-300 hover:text-zinc-100 border-b"
                href="https://www.linkedin.com/in/aaron-cookson"
                target="_blank"
                rel="noreferrer"
              >
                Aaron Cookson
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
