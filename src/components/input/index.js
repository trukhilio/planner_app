import React, { PropTypes } from 'react';

const Input=(props)=>(
    <input
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        className={props.className}
    />
 );
Input.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.string,
    className: PropTypes.string
};
export default Input;