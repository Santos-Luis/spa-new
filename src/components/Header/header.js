import React from "react";
import { Link } from "gatsby";
import styles from "./header.module.scss";
import UniplacesLogo from "@assets/images/svgs/uniplaces-logo.svg";

const headerItems = [
  { key: 'how-it-works', href: 'https://find.uniplaces.com/how-it-works/', text: 'How it works' },
  { key: 'list-your-place', href: 'http://rent.staging-uniplaces.com', text: 'List your place' },
  { key: 'assisted-booking', href: 'https://find.uniplaces.com/find-accommodation-europe/', text: 'Assisted booking' },
  { key: 'help', href: 'https://help.uniplaces.com/help/s', text: 'Help' },
  { key: 'log-in', href: '#', text: 'Log in' },
  { key: 'sign-up', href: '#', text: 'Sign up' }
]

const Header = () => (
  <header className={styles.header}>
    <Link to="/" className={styles.header__elements} key="logo" aria-label="Homepage">
      <UniplacesLogo />
    </Link>
    <ul>
      {
        headerItems.map(({ key, href, text }) => (
          <li key={key}>
            <a href={href}>
              {text}
            </a>
          </li>
        ))
      }
    </ul>
  </header>
);

export default Header;
