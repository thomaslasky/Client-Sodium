import React from 'react';

export default class Footer extends React.Component {

    render(){
        return(
        <footer className="bg-dark text-light">
            <div className="row m-0 p-2">
                <ul className="list-unstyled col-sm-6 mb-0 text-center">
                    <li className="">Xubaka</li>
                    <li>Gallerie</li>
                    <li>Valeurs</li>
                </ul>
                <ul className="list-unstyled col-sm-6 mb-0 text-center">
                    <li>Trouver Sodium Cycle</li>
                    <li>Précommande</li>
                    <li>Nous contacter</li>
                </ul>
            </div>
        </footer>
        );
    }
}