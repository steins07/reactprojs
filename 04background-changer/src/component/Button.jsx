import PropTypes from "prop-types";

const colors = [
  "red",
  "blue",
  "yellow",
  "olive",
  "rebeccapurple",
  "green",
  "magenta",
  "skyblue"
];


function Button({ getColor }) {

  const handleClick = (color) => () => {
    getColor(color);  // Pass the selected color to the parent
  };

  return (
    <>
      {colors.map((color, index) => (
        <button
          className="m-2 outline-none px-3 py-2 rounded-full text-black shadow-lg"
          style={{
            backgroundColor: color
          }}
          key={index}
          onClick={handleClick(color)}
        >
          {color}
        </button>
      ))}
    </>
  );
}
Button.propTypes = {
  getColor: PropTypes.function,
};
export default Button;
