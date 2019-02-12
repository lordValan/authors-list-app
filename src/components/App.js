import React, { Component, Fragment } from 'react';
import WebFont from 'webfontloader';

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
    }

    render() {
        return (
            <Fragment>
                <h1>Hello</h1>
            </Fragment>
        );
    }
}
