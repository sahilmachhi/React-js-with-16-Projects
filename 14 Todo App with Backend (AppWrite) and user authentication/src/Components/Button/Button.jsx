import PropTypes from "prop-types";
function Button({ btnText }) {
  return (
    <>
      <button type="button" className="bg-green-300 px-2 py-2">
        {btnText}
      </button>
    </>
  );
}
Button.propTypes = {
  btnText: PropTypes.string.isRequired,
};
export default Button;
