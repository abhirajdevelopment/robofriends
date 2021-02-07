const Scroll = (props) => {
  return (
    <div
      className="pa3"
      style={{
        overflowY: "auto",
        height: "700px",
        border: "1px solid black"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
