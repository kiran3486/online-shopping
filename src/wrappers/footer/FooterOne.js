import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";

const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu,
}) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <footer className={`footer-area `}>
      <div className="footer-bottom">
        <div className="term-condition-div">
          Terms & Conditions | Privacy Policy
        </div>
        <div className="copyright-div">© 2023 All Rights Reserved</div>
        <div className="d-flex justify-content-between icons-div">
          <i
            className="fa fa-facebook-f"
            style={{
              background: "blue",
              padding: "5px 8px",
              borderRadius: "50%",
            }}
          ></i>

          <i
            className="fa fa-youtube-play"
            style={{
              background: "red",
              padding: "5px 10px",
              borderRadius: "3px",
              display: "flex",
              alignItems: "center",
            }}
          ></i>

          <i
            className="fa fa-instagram instagram"
            style={{
              padding: "5px 8px",
              borderRadius: "50%",
            }}
          ></i>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
};

export default FooterOne;
