import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";
import { FaAsterisk } from "react-icons/fa";

export default function Nav() {
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith("/blog");

  const handleScroll = (event, targetId) => {
    event.preventDefault(); // 기본 링크 이동 방지
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link to="/">
          <FaAsterisk className={styles.logoIcon} />
          Asterisk
        </Link>
      </div>
      <ul className={styles.navLinks}>
        {!isBlogPage ? (
          <>
            <li>
              <a href="#section0" onClick={(e) => handleScroll(e, "section 0")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#section1" onClick={(e) => handleScroll(e, "section 1")}>
                Experience
              </a>
            </li>
            <li>
              <a href="#section2" onClick={(e) => handleScroll(e, "section 2")}>
                Projects
              </a>
            </li>
            <li>
              <Link to="/blog" className={styles.blogLink}>
                Blog
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/" className={styles.blogLink}>
              Portfolio
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
