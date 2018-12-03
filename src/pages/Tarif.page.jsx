import React from 'react';
import axios from 'axios';
import Table from '../components/ComponentsTable/componentstable';
import Element from "../components/ComponentsTarif/componentstarif";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function flatReq(req, ms = 500) {
    return Promise.all([sleep(ms), req])
                  .then(([_, res]) => res.data.resultats);
}

function getCommands() {
    return flatReq(axios.get(""));
}

export default class TarifPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            elems: []
        };
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return <div>
            <Table elems={this.state.elems} renderElem={Element} />
        </div>;
    }
}