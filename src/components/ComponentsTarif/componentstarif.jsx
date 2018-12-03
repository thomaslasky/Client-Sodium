import React from 'react';

export default function (props) {
    return <tr>
        <th>{props.url}</th>
        <th>{props.element}</th>
        <th>{props.tarif}</th>
    </tr>;
}