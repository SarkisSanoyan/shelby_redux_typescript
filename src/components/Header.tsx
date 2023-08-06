import { useEffect, useState } from 'react';
import { IHeader } from "../models";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";


export function Header({ header }: { header: IHeader[] }) {

  // const [showBackground, setShowBackground] = useState(true);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY >= 800) {
  //       setShowBackground(false);
  //     } else {
  //       setShowBackground(true);
  //     }
  //   })
  // }, [])

  return (
    <div className="Header">

      <NavLink to="/">
        <img src="https://shelby.am/wp-content/uploads/2021/11/shelby-logo-1-1-1.png" alt="Shelby logo" />
      </NavLink>

      <nav className="header-box">
        {
          header.map(el =>
            <div className="header" key={el.id}>
              <NavLink className="navbar-link" to={el.url || ""}>{el.name}</NavLink>
            </div>)
        }
      </nav>

      <div className="socials">
        <div className="phone">
          <FontAwesomeIcon className="icon" icon={faPhone} />
          <p>Call Us: (011) 508484</p>
        </div>

        <div className="icons">
          <FontAwesomeIcon className="icon" icon={faFacebookF} />
          <FontAwesomeIcon className="icon" icon={faTwitter} />
          <FontAwesomeIcon className="icon" icon={faPinterestP} />
        </div>
      </div>

    </div>
  )
}

