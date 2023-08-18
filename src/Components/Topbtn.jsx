import React from 'react'
import  { useState, useEffect } from 'react';
export default function Topbtn() {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
    
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);
  return (
   
      <div className={`bg-purple-500 fixed right-5 px-6 py-5 rounded-full bottom-5 opacity-[0.6] } ${!isVisible ? 'hidden' : ''}`} onClick={scrollToTop} >
      <i className="fas fa-arrow-up"></i>
    </div>
    
  )
}
