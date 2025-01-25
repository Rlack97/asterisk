import Card from "./Card";
import styles from "./Section.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 플러그인 등록

export default function Section(props) {
  useEffect(() => {
    // 제목 초기 상태 설정
    gsap.set(`.${styles.sectionTitle}`, { opacity: 0, y: 50 });

    // 카드 초기 상태 설정
    gsap.set(`.${styles.card}`, { opacity: 0, y: 50 });

    // 제목 애니메이션 설정
    const sectionTitles = document.querySelectorAll(`.${styles.sectionTitle}`);
    sectionTitles.forEach((sectionTitle) => {
      gsap.to(sectionTitle, {
        scrollTrigger: {
          trigger: sectionTitle,
          start: "top 80%",
          scrub: false,
        },
        opacity: 1,
        y: 0,
        duration: 1,
      });
    });

    // 카드 애니메이션 설정
    const cards = document.querySelectorAll(`.${styles.card}`);
    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          scrub: false,
        },
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.1, // 카드 간 애니메이션 간격 추가
      });
    });

    // 클린업 함수
    return () => {
      sectionTitles.forEach((sectionTitle) => {
        ScrollTrigger.getById(sectionTitle)?.kill();
      });
      cards.forEach((card) => {
        ScrollTrigger.getById(card)?.kill();
      });
    };
  }, []);

  return (
    <div id={`section ${props.index}`} className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{props.title}</h2>
        <div className={styles.cardsContainer}>
          {props.cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <Card name={card.name} description={card.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
