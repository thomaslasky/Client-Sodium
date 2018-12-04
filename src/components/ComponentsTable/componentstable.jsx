import React from 'react';
import {
    Table
} from "reactstrap";

export default function ({elems, renderElem: Element}) {
    
    return <Table className="col-sm-12 col-md-10 m-auto" bordered striped responsive>
        <thead>
            <tr>
                <th className="text-center">#</th>
                <th className="text-center">Elements</th>
                <th className="text-center">Tarif</th>
            </tr>
        </thead>
        <tbody>
            {/*<Element url=""
                     element="Guidon"
                     tarif="50€"
            />*/}
            {elems.map((elem, i) => <Element key={i}
                                             url={elem.url}
                                             element={elem.name}
                                             tarif={elem.tarif}
            />)
            }
        </tbody>
    </Table>;
}