import React from "react";
import {
    Card,
    CardText,
    CardBody,
} from "reactstrap";
import styleCard from "./CardTextOnly.module.css";

function CardTextOnly(props) {
    return (
        <div className="">
            <Card className={`${styleCard.cardTextOnly}`}>
                <CardBody>
                    <CardText>{props.text}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default CardTextOnly;
