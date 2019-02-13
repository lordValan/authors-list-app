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

    drawPagination() {
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
                            <img src={`../../static/images/arrow.svg`} alt={`arrow-prev`} />
                        </button> 
                        : 
                        null 
                }
                <span className={`page-numbers`}>{`${firstElemPos} - ${lastElemPos}`}</span>
                { shouldNextDraw ?
                        <button className={`button button-next`} 
                                onClick={this.clickNextButtonHandler.bind(this)}>
                            <img src={`../../static/images/arrow.svg`} alt={`arrow-next`} />
                        </button> 
                        :
                        null 
                }
            </section>
        );
    }

    render() {
        return this.props.printedAmount > 0 ? this.drawPagination() : null;
    }
}

Pagination.propTypes = {
    perPage: PropTypes.number.isRequired,
    printedAmount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    maxNumPages: PropTypes.number.isRequired,
    changePageHandler: PropTypes.func.isRequired,
};