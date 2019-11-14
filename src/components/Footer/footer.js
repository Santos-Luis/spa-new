import React from "react";
import { Link } from "gatsby";
import styles from "./footer.module.scss";
import FacebookIcon from "@assets/images/svgs/social/facebook.svg";
import TwitterIcon from "@assets/images/svgs/social/twitter.svg";
import InstagramIcon from "@assets/images/svgs/social/instagram.svg";
import LinkedinIcon from "@assets/images/svgs/social/linkedin.svg";
import YoutubeIcon from "@assets/images/svgs/social/youtube.svg";

const topCities = [
  { slug: 'lisbon', cityName: 'Lisbon' },
  { slug: 'porto', cityName: 'Porto' },
  { slug: 'madrid', cityName: 'Madrid' },
  { slug: 'barcelona', cityName: 'Barcelona' },
  { slug: 'valencia', cityName: 'Valencia' },
  { slug: 'milan', cityName: 'Milan' },
  { slug: 'rome', cityName: 'Rome' },
  { slug: 'london', cityName: 'London' },
  { slug: 'munich', cityName: 'Munich' },
  { slug: 'berlin', cityName: 'Berlin' }
];
const socialIcons = [
  { herf: 'https://www.facebook.com/uniplaces', label: 'Facebook', component: FacebookIcon },
  { herf: 'https://twitter.com/uniplaces', label: 'Twitter', component: TwitterIcon },
  { herf: 'https://instagram.com/uniplaces/', label: 'Instagram', component: InstagramIcon },
  { herf: 'https://www.linkedin.com/company/uniplaces', label: 'Linkedin', component: LinkedinIcon },
  { herf: 'https://www.youtube.com/user/uniplacesvideos', label: 'Youtube', component: YoutubeIcon }
];

const Footer = () => (
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
        {
          topCities.map(({ slug, cityName }) => (
              <Link to={ `/accommodation/${slug}` } title={cityName}>{cityName}</Link>
            )
          )
        }
      </div>
      <div className={styles.footer__social}>
        <div className={styles.footer__social__terms}>
          <Link to="/terms">Terms</Link>
          <Link to="/terms#privacy-policy">Privacy</Link>
          <Link to="/sitemap">Site Map</Link>
          <span>© Uniplaces, { new Date().getFullYear() }</span>
        </div>
        <div className={styles.footer__social__icons}>
          {
            socialIcons.map(({ href, label, component }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                {React.createElement(
                  component,
                  { style: {fill: "#fff", fillOpacity: "1"} },
                  null
                )}
              </a>
            ))
          }
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
