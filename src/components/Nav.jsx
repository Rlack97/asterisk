import styles from "./Nav.module.css";

export default function Nav() {
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
        <a href="#home" onClick={(e) => handleScroll(e, "home")}>
          김찬빈
        </a>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#section 0" onClick={(e) => handleScroll(e, "section 0")}>
            Skills
          </a>
        </li>
        <li>
          <a href="#section 1" onClick={(e) => handleScroll(e, "section 1")}>
            Experience
          </a>
        </li>
        <li>
          <a href="#section 2" onClick={(e) => handleScroll(e, "section 2")}>
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
