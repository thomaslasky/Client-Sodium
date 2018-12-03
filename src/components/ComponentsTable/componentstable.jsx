import React from 'react';
import {
    Table
} from "reactstrap";

export default function ({elems, renderElem: Element}) {
    
    return <Table bordered striped responsive>
        <thead>
            <tr>
                <th className="text-center">Elements</th>
                <th className="text-center">Tarif</th>
            </tr>
        </thead>
        <tbody>
            {elems.map((elem, i) => <Element key={i}
                                             element={elem.name}
                                             tarif={elem.tarif}
            />)
            }
        </tbody>
    </Table>;
}