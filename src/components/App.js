import React, { Component, Fragment } from 'react';
import WebFont from 'webfontloader';
import Screen from './Screen';
import Pagination from './Pagination';
import listOfAuthors from '../static/data/data.json';
import { perPage } from '../constants';
import { SortAuthors, GetThreeBestAuthors } from '../utils';

export default class App extends Component {
    constructor(props) {
        super(props);

        WebFont.load({
            google: {
                families: [
                    'Roboto:300,400,500,700'
                ]
            }
        });

        this.state = {
            currentPage: 1
        };

        this.listOfAuthors = listOfAuthors.slice();
        this.bestAuthors = GetThreeBestAuthors(this.listOfAuthors);
    }

    changePageHandler(page) {
        this.setState({
            currentPage: page
        });
    }

    render() {
        let firstIndex = (this.state.currentPage - 1) * perPage,
            lastIndex = this.state.currentPage * perPage,
            authorsToPrint = this.listOfAuthors.slice(firstIndex, lastIndex);
            
        return (
            <Fragment>
                <Screen authors={authorsToPrint} 
                        firstIndex={firstIndex}
                        bestAuthors={this.bestAuthors} />
                <Pagination perPage={perPage} 
                            printedAmount={authorsToPrint.length} 
                            currentPage={this.state.currentPage}
                            maxNumPages={this.listOfAuthors.length}
                            changePageHandler={this.changePageHandler.bind(this)} />
            </Fragment>
        );
    }
}
