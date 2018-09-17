import React from "react";

const Errors = props => {
  const allErrors = errors =>
    Object.values(errors).reduce((acc, next) => {
      if (Array.isArray(next)) {
        next = allErrors(next);
      }
      return acc.concat(next);
    }, []);
  const renderErrors = allErrors(props).map((error, idx) => {
    return <p key={idx}>{error.responseJSON[0]}</p>;
  });
  return <div>{renderErrors}</div>;
};

export default Errors;
