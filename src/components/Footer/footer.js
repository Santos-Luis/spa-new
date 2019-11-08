import React from "react";
import styles from "./footer.module.scss";
import FacebookIcon from "../../assets/images/social/facebook.svg";
import TwitterIcon from "../../assets/images/social/twitter.svg";
import InstagramIcon from "../../assets/images/social/instagram.svg";
import LinkedinIcon from "../../assets/images/social/linkedin.svg";
import YoutubeIcon from "../../assets/images/social/youtube.svg";

const Footer = () => {
  return(
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__main}>
          <div className={styles.footer__main__column} key="uniplaces">
            <h3> Uniplaces </h3>
            <a href="/about-us">About Us</a>
            <a href="http://blog.uniplaces.com">Blog</a>
            <a href="http://careers.uniplaces.com">Careers</a>
            <a href="/partners">Partners</a>
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
            <a id="howItWorks" href="https://find.uniplaces.com/how-it-works/" data-event="how-it-works-click">How it works</a>
            <a href="https://help.uniplaces.com/help/s">Help Centre</a>
            <a id="contactUs" href="https://help.uniplaces.com/help/s/contactsupport">Contact Us</a>
          </div>
        </div>
        <div className={styles.footer__cities}>
          <span>Top Cities</span>
          <a href="/accommodation/lisbon" title="Lisbon">Lisbon</a>
          <a href="/accommodation/porto" title="Porto">Porto</a>
          <a href="/accommodation/madrid" title="Madrid">Madrid</a>
          <a href="/accommodation/barcelona" title="Barcelona">Barcelona</a>
          <a href="/accommodation/valencia" title="Valencia">Valencia</a>
          <a href="/accommodation/milan" title="Milan">Milan</a>
          <a href="/accommodation/rome" title="Rome">Rome</a>
          <a href="/accommodation/london" title="London">London</a>
          <a href="/accommodation/munich" title="Munich">Munich</a>
          <a href="/accommodation/berlin" title="Berlin">Berlin</a>
        </div>
        <div className={styles.footer__social}>
          <div className={styles.footer__social__terms}>
            <a href="/terms">Terms</a>
            <a href="/terms#privacy-policy">Privacy</a>
            <a href="/sitemap">Site Map</a>
            <span>© Uniplaces, 2019</span>
          </div>
          <div className={styles.footer__social__icons}>
            <a href="https://www.facebook.com/uniplaces" target="_blank" rel="noopener noreferrer">
              <FacebookIcon style={{fill: "#fff", fillOpacity: "1"}} />
            </a>
            <a href="https://twitter.com/uniplaces" target="_blank" rel="noopener noreferrer">
              <TwitterIcon style={{fill: "#fff", fillOpacity: "1"}} />
            </a>
            <a href="https://instagram.com/uniplaces/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon style={{fill: "#fff", fillOpacity: "1"}} />
            </a>
            <a href="https://www.linkedin.com/company/uniplaces" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon style={{fill: "#fff", fillOpacity: "1"}} />
            </a>
            <a href="https://www.youtube.com/user/uniplacesvideos" target="_blank" rel="noopener noreferrer">
              <YoutubeIcon style={{fill: "#fff", fillOpacity: "1"}} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
