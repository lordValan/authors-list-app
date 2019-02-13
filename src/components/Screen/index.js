import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Screen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { firstIndex, authors } = this.props;
        return (
            <section className={`screen`}>
                <table>
                    <tbody>
                        {authors.map((author, index) => {
                            return <tr key={`author_${index}`}>
                                <td>{firstIndex + index + 1}</td>
                                <td>{author.name}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </section>
        );
    }
}

Screen.propTypes = {
    authors: PropTypes.array.isRequired
};