import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { orderItems, placeholders } from '../../constants';
import ReactResponsiveSelect from 'react-responsive-select';

export default class ScreenHead extends Component {
    constructor(props) {
        super(props);
    }

    onInputTextChangeHandler(event) {
        this.props.onInputTextChange(event.target.value);
    }

    sortSelectValueChgangeHandler(newValue) {
        this.props.onSortSelectChange(newValue.value);
    }

    render() {
        const selectOptions = [];

        for (const key in orderItems) {
            if (orderItems.hasOwnProperty(key)) {
                selectOptions.push({
                    text: orderItems[key].text,
                    value: orderItems[key].value
                });                
            }
        }

        return (
            <section className={`screen-head`}>
                <input type="text" className={`search-name-input`}
                        placeholder={placeholders.inputSearchName}
                        onChange={this.onInputTextChangeHandler.bind(this)} 
                        style={{backgroundImage: 'url("../../static/images/search.svg")'}} />
                <ReactResponsiveSelect
                    name={`sort-select`}
                    options={selectOptions}
                    selectedValue={this.props.selectedSortItem}
                    onChange={this.sortSelectValueChgangeHandler.bind(this)} />
            </section>
        );
    }
}

ScreenHead.propTypes = {    
    onInputTextChange: PropTypes.func.isRequired,
    onSortSelectChange: PropTypes.func.isRequired,
    selectedSortItem: PropTypes.string.isRequired
};