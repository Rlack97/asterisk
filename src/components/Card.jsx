export default function Card(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <div>{props.description}</div>
      {props.photo && <div>사진임.</div>}
    </div>
  );
}
