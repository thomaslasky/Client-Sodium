import React from 'react';

import {getElems} from '../api/Tarif.api';
import {
    Row
} from 'reactstrap';

import Table from '../components/ComponentsTable/componentstable';
import Element from "../components/ComponentsTarif/componentstarif";

export default class TarifPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            elems: []
        };
    }
    
    componentDidMount() {
        getElems()
            .then((elems) => this.setState({elems: elems}));
    }
    
    render() {
        return <div>
            <Table elems={this.state.elems} renderElem={Element} />
        </div>;
    }
}