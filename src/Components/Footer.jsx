import React from "react";

const Footer = () => {
  const backtoTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="footer">
      <p>Copyright @ 2021. All Rights Reserved</p>

      <button onClick={backtoTop}>Back To Top</button>
    </div>
  );
};

export default Footer;
