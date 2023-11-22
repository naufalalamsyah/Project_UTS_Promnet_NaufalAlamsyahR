import React from 'react';

import wa from '../image/wa.png';
import ig from '../image/ig.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h2>Navigate</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </div>
      
      <div className="footer-section">
        <h2>Quotes</h2>
        <ul>
          <p className='isi'>“Success is no accident. It is hard work, perseverance, learning, studying, 
          sacrifice and most of all, love of what you are doing or learning to do.” – Pelé</p>
        </ul>
      </div>
      
      <div className="footer-section">
        <h2>Social</h2>
        <ul className="social-icons">
          <li>
            <a href="https://api.whatsapp.com/send?phone=6289653225730">
              <img src={wa} alt="WhatsApp" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/nwfhal_/">
              <img src={ig} alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <p>Copyright &copy; 2023 Naufal Alamsyah Ramanda</p>
      </div>
    </footer>
  );
}

export default Footer;