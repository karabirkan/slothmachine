export default function Slots({ val1, val2, val3 }) {
  const isWinner = val1 === val2 && val1 === val3;
  return (
    <div>
      {val1} {val2} {val3}
      <h1 style={{ color: isWinner ? "green" : "red" }}>
        {isWinner ? "You won!" : "You Lost"}
      </h1>
    </div>
  );
}
