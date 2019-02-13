import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    clickPrevButtonHandler() {
        if(this.props.currentPage - 1 < 1) return;

        this.props.changePageHandler(this.props.currentPage - 1);
    }

    clickNextButtonHandler() {
        if((this.props.currentPage * this.props.perPage) > this.props.maxNumPages) return;

        this.props.changePageHandler(this.props.currentPage + 1);
    }

    render() {
        let { currentPage, perPage, printedAmount, maxNumPages } = this.props,
            firstElemPos = (currentPage - 1) * perPage + 1,
            lastElemPos = firstElemPos - 1 + printedAmount,
            shouldPrevDraw = currentPage > 1,
            shouldNextDraw = lastElemPos < maxNumPages;

        return (
            <section className={`pagination`}>
                { shouldPrevDraw ? 
                        <button className={`button button-prev`} 
                                onClick={this.clickPrevButtonHandler.bind(this)} >
                            prev
                        </button> 
                        : 
                        null 
                }
                <span className={`page-numbers`}>{`${firstElemPos} - ${lastElemPos}`}</span>
                { shouldNextDraw ?
                        <button className={`button button-next`} 
                                onClick={this.clickNextButtonHandler.bind(this)}>
                            next
                        </button> 
                        :
                        null 
                }
            </section>
        );
    }
}

Pagination.propTypes = {
    perPage: PropTypes.number.isRequired,
    printedAmount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    maxNumPages: PropTypes.number.isRequired,
    changePageHandler: PropTypes.func.isRequired,
};