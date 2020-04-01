import PropTypes from "prop-types";
import useValidation from "../../hooks/useValidation"

const Input = props => {
  const [message, validate] = useValidation()
  const { label, onBlur, name, placehodler = null, type, required = false, minLength=1} = props;

  const validateOnInput = (e) => {
    validate(e)
    if(typeof onInput === "function" && onInput !== undefined) {
      onBlur()
    }
  }

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={message.type}
        id={name}
        name={name}
        required={required}
        placeholder={placehodler}
        minLength={minLength}
        onBlur={validateOnInput}
        onInvalid={validate}
        {...props}
      />
      {message.type !== "error" 
        ? null
        : <div className={`message ${message.type}`}>{message.message}</div>
      }
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Input;