import React, { useEffect, useState } from 'react'
import { FaAngleUp } from "react-icons/fa";
const BackToTop = () => {
  const [topVisible, setTopVisible] = useState(false)
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    if (parseInt(scrollTop) > 400) {
      setTopVisible(true)
    } else {
      setTopVisible(false)
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  return (
    <a href="/#" className={`back-to-top d-flex align-items-center justify-content-center ${topVisible ? "active" : ""}`}> <FaAngleUp className='iconService' /></a>
  )
}

export default BackToTop
