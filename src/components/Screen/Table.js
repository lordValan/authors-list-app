import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Table extends Component {
    constructor(props) {
        super(props);
    }

    drawAchievement(result) {
        const { bestAuthors } = this.props;

        for (let i = 0; i < bestAuthors.length; i++) {
            if(result === bestAuthors[i].res) {
                return <img src={`../../static/images/${bestAuthors[i].img}`} alt={`achievement`} />
            }
        }

        return null;
    }

    render() {
        const { firstIndex, authors } = this.props;

        return (
            <table className={`authors-table`}>
                <tbody>
                    {authors.map((author, index) => {
                        let pubsClass = author.count_pub > 0 ? `pubs` : `pubs null`;
                        return <tr key={`author_${index}`} className={`author-row`}>
                            <td className={`author-cell cell-num`}>
                                <span className={`num`}>
                                    {firstIndex + index + 1}
                                </span>
                            </td>
                            <td className={`author-cell cell-letter`}>
                                <span className={`f-letter`}>
                                    {author.name.charAt(0)}
                                </span>
                            </td>
                            <td className={`author-cell cell-name-pub`}>
                                <span className={`name`}>
                                    {author.name}
                                </span>
                                <br />
                                <span className={`${pubsClass}`}>
                                    {`${author.count_pub} публ.`}
                                </span>
                            </td>
                            <td className={`author-cell cell-ach`}>
                                {this.drawAchievement(author.pageviews)}
                            </td>
                            <td className={`author-cell cell-views`}>
                                <span className={`pageviews`}>
                                    {author.pageviews}
                                </span>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        );
    }
}

Screen.propTypes = {
    authors: PropTypes.array.isRequired,
    bestAuthors: PropTypes.array.isRequired,
    firstIndex: PropTypes.number.isRequired
};