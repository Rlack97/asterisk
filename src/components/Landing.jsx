import Nav from "./Nav";
import Section from "./Section";
import Footer from "./Footer";
import data from "./data.json";
import styles from "./Landing.module.css";

function Main() {
  return (
    <div className={styles.main}>
      <h1>Welcome to My Page</h1>
      <p>This is the main section.</p>
    </div>
  );
}

export default function Landing() {
  return (
    <div id="home" className={styles.landing}>
      <Nav />
      <Main />
      {data.map((section, index) => (
        <Section
          key={index}
          index={index}
          title={section.title}
          cards={section.cards}
        />
      ))}
      <Footer />
    </div>
  );
}
