import "./Card.css";

const Card = ({ robot }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        className="robot-img"
        src={`https://robohash.org/${robot.id}?100x100}`}
        alt={robot.name}
      />
      <h3>{robot.name}</h3>
    </div>
  );
};

export default Card;
