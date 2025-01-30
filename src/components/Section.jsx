import Card from "./Card";
import styles from "./Section.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Section(props) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  //querySelectAll은 랜더링 이전에 참조하려고 하는 문제가 있으므로 useRef 사용

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    // 제목 애니메이션
    gsap.set(titleRef.current, { opacity: 0, y: 50 });
    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        scrub: false,
      },
      opacity: 1,
      y: 0,
      duration: 1,
    });

    // 카드 애니메이션 (배열 순회)
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, { opacity: 0, y: 50 });
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            scrub: false,
          },
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.1, // 순차적 등장
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id={`section ${props.index}`}
      className={styles.section}
    >
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.sectionTitle}>
          {props.title}
        </h2>
        <div className={styles.cardsContainer}>
          {props.cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={styles.card}
            >
              <Card
                name={card.name}
                description={card.description}
                photo={card?.photo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
