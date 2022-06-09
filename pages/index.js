import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Work from '../components/Work';
import { useTheme } from 'next-themes';
import { FaGithubSquare, FaLinkedin, FaGithub, FaExternalLinkAlt, FaTwitter, FaInstagram, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mobile, setMobile] = React.useState(false);
  const [mobileOpenNav, setMobileOpenNav] = React.useState(false);


  const worksList = [
    {
      title: "Mars Store",
      description: "Tienda online para la venta de diversos artículos, utilizando la plataforma de printful y su API. (En construcción)",
      tech: ["Next", "Tailwind", "Firebase", "Rest API"],
      links: ["https://github.com/marcoa16b/ecommerce-mars-store"]
    },
    {
      title: "Blog personal",
      description: "Blog personal construido en NextJS con mejoras y optimizaciones en SEO, accesibilidad y demás para mejorar el rendimiento y posicionamiento en buscadores. (En construcción)",
      tech: ["Next", "Markdown"],
      links: ["git push -u origin main", "https://marselit.vercel.app"]
    },
    {
      title: "App Jivis",
      description: "Aplicacion Web Progresiva construida en React con el objetivo de contabilizar los dias libres que tienen los empleados de Distribuidora Jivis, Costa Rica.",
      tech: ["React", "MUI", "HTML", "CSS"],
      links: ["https://github.com/marcoa16b/pwa-JivisApp-CountDays", "https://app-jivis.vercel.app"]
    }
  ]

  const habilities = [
    "Python",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "React js",
    "Next js",
    "sass"
  ]

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

  function toggleMode(){
    if (resolvedTheme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
    console.log(resolvedTheme)
  }

  function start() {
    var windowWidth = window.innerWidth;
    // console.log(windowWidth)
    if (windowWidth < 930) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  React.useEffect(() => {
    var windowWidth = window.innerWidth;
    if (windowWidth < 930) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener('resize', start);
    // setTheme("light")
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Portafolio | Marco Agüero</title>
        <meta name="description" content="Portafolio personal Frontend Developer Jr" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.Header}>
        <Navbar toggle={toggleMode} isMobile={mobile} theme={resolvedTheme} />
        
        <div className={styles.HeaderContent}>
          <h1>Hola, soy <span>Marco Agüero</span></h1>
          <h2>Desarrollador Frontend Jr</h2>
          <p>Soy una persona a quien le encanta mantenerse actualizado sobre tecnología, me apasiona lo que hago y me esfuerzo siempre en dar lo mejor de mi, soy responsable, respetuoso, comprometido y siempre en busca de mejora continua.</p>
          <div className={styles.HeaderButtons}>
            <div className={styles.ButtonCV}>
              <Link href='https://drive.google.com/file/d/1DIpwry3zGW8cU6ZsztsGMkZAUXNglRhB/view?usp=sharing'>
                <a target='_blank'>CV</a>
              </Link>
              {/* <p>CV</p> */}
            </div>
            <div className={styles.ButtonsDivider}></div>
            <div className={styles.ButtonsIcon}>
              <Link href='https://github.com/marcoa16b'>
                <a target='_blank'>
                  <FaGithubSquare />
                </a>
              </Link>
            </div>
            <div className={styles.ButtonsIcon}>
              <Link href='https://www.linkedin.com/in/marcoa16b/'>
                <a target='_blank'>
                  <FaLinkedin />
                </a>
              </Link>
            </div>
          </div>
        </div>


      </header>
      <main className={styles.main}>
        <div className={styles.Works} id='works'>
          <h1>Últimos trabajos</h1>

          <div className={styles.WorksContainer}>
            {
              worksList.map((work, i) => (
                <Work key={i} work={work} />
              ))
            }
          </div>
        </div>
        <div className={styles.SkillsContainer} id='skills'>
          <h1>Habilidades</h1>
          <div className={styles.ListSkills}>
            {
              habilities.map((skill, i) => (
                <p key={i}>{skill}</p>
              ))
            }
          </div>
        </div>

        <div className={styles.ContactSection} id='contact'>
          <h1>Contacto</h1>
          <div className={styles.LinksContainer}>
            <div className={styles.Link}>
              <Link href='https://twitter.com/mars_elit'>
                <a target='_blank'><FaTwitter /></a>
              </Link>
            </div>
            <div className={styles.Link}>
              <Link href='https://www.linkedin.com/in/marcoa16b/'>
                <a target='_blank'><FaLinkedin /></a>
              </Link>
            </div>
            <div className={styles.Link}>
              <Link href='https://www.instagram.com/marselit_16/'>
                <a target='_blank'><FaInstagram /></a>
              </Link>
            </div>
            <div className={styles.Link}>
              <Link href='https://github.com/marcoa16b'>
                <a target='_blank'><FaGithubSquare /></a>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Sitio web creado por Marco Agüero con Next js</p>
      </footer>
    </div>
  )
}
