import Card from "./Card";

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error("An error occurred");
  // }

  return (
    <div>
      {robots.map((robot) => {
        return <Card key={robot.id} robot={robot} />;
      })}
    </div>
  );
};

export default CardList;
