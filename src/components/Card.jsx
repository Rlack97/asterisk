import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div>
      <div className={styles.cardName}>{props.name}</div>
      <div className={styles.cardDescription}>{props.description}</div>
      {props.photo && <div>{props.photo}</div>}
    </div>
  );
}
