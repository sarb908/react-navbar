const Button = (props) => {
  let btn = {
    color: "white",
    background: "teal",
    borderRadius: "10px",
    padding: "10px 15px",
  };
  return <button style={btn}>{props.content}</button>;
};
export default Button;
