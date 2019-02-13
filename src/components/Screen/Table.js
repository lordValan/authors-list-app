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
            <div className={`authors-table`}>
                {authors.map((author, index) => {
                    let pubsClass = author.count_pub > 0 ? `pubs` : `pubs null`;
                    
                    return <div key={`author_${index}`} className={`author-row`}>
                        <div className={`author-cell cell-num`}>
                            <span className={`num`}>
                                {firstIndex + index + 1}
                            </span>
                        </div>
                        <div className={`author-cell cell-letter`}>
                            <span className={`f-letter`}>
                                {author.name.charAt(0).toUpperCase()}
                            </span>
                        </div>
                        <div className={`author-cell cell-name-pub`}>
                            <span className={`name`}>
                                {author.name}
                            </span>
                            <span className={`${pubsClass}`}>
                                {`${author.count_pub} публ.`}
                            </span>
                        </div>
                        <div className={`author-cell cell-ach`}>
                            {this.drawAchievement(author.pageviews)}
                        </div>
                        <div className={`author-cell cell-views`}>
                            <span className={`pageviews`}>
                                {author.pageviews}
                            </span>
                        </div>
                    </div>
                })}
            </div>
        );
    }
}

Screen.propTypes = {
    authors: PropTypes.array.isRequired,
    bestAuthors: PropTypes.array.isRequired,
    firstIndex: PropTypes.number.isRequired
};