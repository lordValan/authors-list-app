import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { placeholders } from '../../constants';

export default class ScreenHead extends Component {
    constructor(props) {
        super(props);
    }

    onInputTextChangeHandler(event) {
        this.props.onInputTextChange(event.target.value);
    }

    render() {
        return (
            <section className={`screen-head`}>
                <input type="text" 
                        placeholder={placeholders.inputSearchName}
                        onChange={this.onInputTextChangeHandler.bind(this)} />
            </section>
        );
    }
}

ScreenHead.propTypes = {    
    onInputTextChange: PropTypes.func.isRequired
};