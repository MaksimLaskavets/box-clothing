/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from "react";
import "./custom-button.styles.scss"

function CustomButton({children,...otherProps}) {
return <button className="custom-button" {...otherProps} >
{children}
</button>
}

export default CustomButton