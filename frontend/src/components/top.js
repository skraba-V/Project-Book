import React, { useEffect, useState } from "react";

const Top = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="text-black"
      id="myBtn"
      title="Go to top"
      style={{ display: isVisible ? "block" : "none" }}
    >
      <img className="pfaile" src="./assets/arrows.svg" alt="mdks" width={"50px"} />
      <p>Nach Oben</p>
    </button>
  );
};

export default Top;
