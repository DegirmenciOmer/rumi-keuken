import React from "react";
import styles from "../styles/Footer.module.css";

import { AiFillFacebook, AiFillMail, AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="https://nl-nl.facebook.com">
        <AiFillFacebook />
      </Link>
      <Link href="https://nl-nl.facebook.com">
        <AiFillMail />
      </Link>
      <Link href="https://nl-nl.facebook.com">
        <AiFillInstagram />
      </Link>
    </footer>
  );
};

export default Footer;
