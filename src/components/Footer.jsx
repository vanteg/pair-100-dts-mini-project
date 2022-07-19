import React from "react";
import "./css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <div className="column---0-1">
          <p className="text">Audio and Subtitles</p>
          <p className="text">Media Center</p>
          <p className="text">Security</p>
          <p className="text">Contact us</p>
          <button className="service-code-button">
            <p className="text-1-4">Service Code</p>
          </button>
          <p className="copyright">© 2022 Movies, All Right Reserved</p>
        </div>
        <div className="column---0-2">
          <p className="text">Audio Description</p>
          <p className="text">Investor Relations</p>
          <p className="text">Legal Provisions</p>
        </div>
        <div className="column---0-3">
          <p className="text">Help center</p>
          <p className="text">Jobs</p>
          <p className="text">Cookie Preferences</p>
        </div>
        <div className="column---0-4">
          <p className="text">Gift Cards</p>
          <p className="text">Terms of Use</p>
          <p className="text">Corporate Information</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
