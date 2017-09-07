import React, { PropTypes, Component } from 'react';

class Input extends Component {
    render(){
        return(
            <textarea
                autoFocus={true}
                type="text"
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
                defaultValue={this.props.defaultValue}
                className={this.props.className}
                onFocus={this.props.onFocus}
            />
        )
    }

}
Input.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.string,
    className: PropTypes.string
};
export default Input;