import PropTypes from "prop-types";
function Button({ btnText, btnFunc }) {
  return (
    <>
      <button
        type="button"
        className="bg-green-300 px-2 py-2"
        onClick={btnFunc}
      >
        {btnText}
      </button>
    </>
  );
}
Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnFunc: PropTypes.func.isRequired,
};
export default Button;
