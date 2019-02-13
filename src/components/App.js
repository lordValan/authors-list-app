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
            currentPage: 1,
            listOfAuthors: listOfAuthors.slice(),
            selectedSortItem: ''
        };

        this.bestAuthors = GetThreeBestAuthors(this.state.listOfAuthors);
    }

    changePageHandler(page) {
        this.setState({
            currentPage: page
        });
    }

    onInputTextChange(value) {
        const val = value.toLowerCase();

        let newAuthors = listOfAuthors.filter((author) => {
            return author.name.toLowerCase().includes(val);
        });

        newAuthors = SortAuthors(newAuthors, this.state.selectedSortItem);
        
        this.setState({
            listOfAuthors: newAuthors,
            currentPage: 1
        });
    }

    onSortSelectChange(value) {
        const sortedAuthors = SortAuthors(this.state.listOfAuthors, value); 

        this.setState({
            listOfAuthors: sortedAuthors,
            currentPage: 1,
            selectedSortItem: value
        });
    }

    render() {
        let firstIndex = (this.state.currentPage - 1) * perPage,
            lastIndex = this.state.currentPage * perPage,
            authorsToPrint = this.state.listOfAuthors.slice(firstIndex, lastIndex);
            
        return (
            <Fragment>
                <Screen authors={authorsToPrint} 
                        firstIndex={firstIndex}
                        bestAuthors={this.bestAuthors}
                        onInputTextChange={this.onInputTextChange.bind(this)}
                        onSortSelectChange={this.onSortSelectChange.bind(this)}
                        selectedSortItem={this.state.selectedSortItem} />
                <Pagination perPage={perPage} 
                            printedAmount={authorsToPrint.length} 
                            currentPage={this.state.currentPage}
                            maxNumPages={this.state.listOfAuthors.length}
                            changePageHandler={this.changePageHandler.bind(this)} />
            </Fragment>
        );
    }
}
