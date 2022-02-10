type Player = "X" | "O" | "Both" | null;
interface props {
  value: Player;
  onClick: () => void;
  winner: Player;
}

const Square = (props) => {
  if (!props.value) {
    return (
      <button
        className="square"
        onClick={props.onClick}
        disabled={Boolean(props.winner)}
      />
    );
  }
  return (
    <button
      className={`square square_${props.value.toLocaleLowerCase()}`}
      disabled
    >
      {props.value}
    </button>
  );
};

export default Square;
