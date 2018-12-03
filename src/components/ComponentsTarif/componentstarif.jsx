import React from 'react';

export default function (props) {
    return <tr>
        <th>{props.element}</th>
        <th>{props.tarif}</th>
    </tr>;
}