import React, { Component } from 'react';

class CustomInput extends Component {
    render() {
        return (
            <div>
                <input type='text' placeholder={this.props.val} />
            </div>
        );
    }
}

CustomInput.defaultProps = {
    val: 'default value'
}

export default CustomInput;