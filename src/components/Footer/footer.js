import React from "react";
import { Link } from "gatsby";
import styles from "./footer.module.scss";
import FacebookIcon from "../../assets/images/svgs/social/facebook.svg";
import TwitterIcon from "../../assets/images/svgs/social/twitter.svg";
import InstagramIcon from "../../assets/images/svgs/social/instagram.svg";
import LinkedinIcon from "../../assets/images/svgs/social/linkedin.svg";
import YoutubeIcon from "../../assets/images/svgs/social/youtube.svg";

const Footer = () => {
  return(
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__main}>
          <div className={styles.footer__main__column} key="uniplaces">
            <h3> Uniplaces </h3>
            <Link to="/about-us">About Us</Link>
            <a href="http://blog.uniplaces.com">Blog</a>
            <a href="http://careers.uniplaces.com">Careers</a>
            <Link to="/partners">Partners</Link>
            <a href="http://affiliates.uniplaces.com/">Become an Affiliate</a>
          </div>
          <div className={styles.footer__main__column} key="join-us">
            <h3> Join us! </h3>
            <a href="http://portal.uniplaces.com/">Landlord Portal</a>
            <a href="https://rent.staging-uniplaces.com">List a place</a>
            <a href="https://ap.staging-uniplaces.com/">Landlord Dashboard</a>
          </div>
          <div className={styles.footer__main__column} key="help-centre">
            <h3> Help Centre </h3>
            <a href="https://find.uniplaces.com/how-it-works/" data-event="how-it-works-click">How it works</a>
            <a href="https://help.uniplaces.com/help/s">Help Centre</a>
            <a href="https://help.uniplaces.com/help/s/contactsupport">Contact Us</a>
          </div>
        </div>
        <div className={styles.footer__cities}>
          <span>Top Cities</span>
          <Link to="/accommodation/lisbon" title="Lisbon">Lisbon</Link>
          <Link to="/accommodation/porto" title="Porto">Porto</Link>
          <Link to="/accommodation/madrid" title="Madrid">Madrid</Link>
          <Link to="/accommodation/barcelona" title="Barcelona">Barcelona</Link>
          <Link to="/accommodation/valencia" title="Valencia">Valencia</Link>
          <Link to="/accommodation/milan" title="Milan">Milan</Link>
          <Link to="/accommodation/rome" title="Rome">Rome</Link>
          <Link to="/accommodation/london" title="London">London</Link>
          <Link to="/accommodation/munich" title="Munich">Munich</Link>
          <Link to="/accommodation/berlin" title="Berlin">Berlin</Link>
        </div>
        <div className={styles.footer__social}>
          <div className={styles.footer__social__terms}>
            <Link to="/terms">Terms</Link>
            <Link to="/terms#privacy-policy">Privacy</Link>
            <Link to="/sitemap">Site Map</Link>
            <span>© Uniplaces, 2019</span>
          </div>
          <div className={styles.footer__social__icons}>
            <a
              href="https://www.facebook.com/uniplaces"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon style={{fill: "#fff", fillOpacity: "1"}} />
            </a>
            <a
              href="https://twitter.com/uniplaces"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <TwitterIcon style={{fill: "#fff", fillOpacity: "1"}} />
            </a>
            <a
              href="https://instagram.com/uniplaces/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon style={{fill: "#fff", fillOpacity: "1"}} />
            </a>
            <a
              href="https://www.linkedin.com/company/uniplaces"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <LinkedinIcon style={{fill: "#fff", fillOpacity: "1"}} />
            </a>
            <a
              href="https://www.youtube.com/user/uniplacesvideos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <YoutubeIcon style={{fill: "#fff", fillOpacity: "1"}} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
