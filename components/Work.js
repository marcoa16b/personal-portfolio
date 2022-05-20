import React from 'react';
import Link from 'next/link';
import { FaGithubSquare, FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import styles from '../styles/Works.module.css';

const Work = (props) => {

  const work = props.work;

  function getLinks(links){
    if (links.length === 2){
      return(
        <div>
          <Link href={links[0]}>
            <a target='_blank'><FaGithub /></a>
          </Link>
          <Link href={links[1]}>
            <a target='_blank'><FaExternalLinkAlt /></a>
          </Link>
        </div>
      )
    } else {
      if (links[0].includes("github")) {
        return(
          <div>
            <Link href={links[0]}>
              <a target='_blank'><FaGithub /></a>
            </Link>
          </div>
        )
      } else {
        return(
          <div>
            <Link href={links[0]}>
              <a target='_blank'><FaExternalLinkAlt /></a>
            </Link>
          </div>
        )
      }
    }
  }

  return (
    <div className={styles.Card}>
      <h1>{work.title}</h1>
      <p>{work.description}</p>
      <div className={styles.Tecn}>
        {
          work.tech.map((item, i) => (
            <p  key={i}>{item}</p>
          ))
        }
      </div>
      <div className={styles.Links}>
        {
          getLinks(work.links)
        }
      </div>
    </div>
  );
};

export default Work;