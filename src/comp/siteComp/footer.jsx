
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <p className="footer-brand-name">Menuuu<br />
            spaCulinary Artistry</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><>Home</></li>
            <li><>About Us</></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Contact Us</h3>
          <div className="social-icons">
            harseepsinghsardar@Gmail.com <br />
            phone_no= 9253443662 <br />
          </div>
        </div>
      </div >
      <div className="footer-bottom">
        <p>&copy; 2025 Menuuu
          spaCulinary Artistry. All rights reserved.</p>
      </div>
    </footer >
  );
};

export default Footer;
