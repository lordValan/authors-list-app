import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

export default class Screen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={`screen`}>
                <Table firstIndex={this.props.firstIndex}
                        authors={this.props.authors}
                        bestAuthors={this.props.bestAuthors} />
            </section>
        );
    }
}

Screen.propTypes = {
    authors: PropTypes.array.isRequired,
    bestAuthors: PropTypes.array.isRequired,
    firstIndex: PropTypes.number.isRequired
};