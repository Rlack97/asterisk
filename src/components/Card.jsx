import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div>
      <h3 className={styles.title}>{props.name}</h3>
      <div>{props.description}</div>
      {props.photo && <div>{props.photo}</div>}
    </div>
  );
}
