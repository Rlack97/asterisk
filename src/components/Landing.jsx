import Nav from "./Nav";
import Section from "./Section";
import Footer from "./Footer";
import data from "./data.json";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div id="home">
      <Nav />
      {data.map((section, index) => (
        <Section index={index} title={section.title} cards={section.cards} />
      ))}

      <Footer />
    </div>
  );
}
