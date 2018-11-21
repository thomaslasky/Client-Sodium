import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import styleCard from './CardPerso.module.css';
import pix1 from '../../assets/Images/Perso/1.jpg';

const CardPerso = (props) => {
  return (
    <div>
      <Card className={`d-sm-flex flex-sm-row ${styleCard.cardPerso}`}>
      {/* "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" */}
        <CardImg left className={`${styleCard.imgPerso}`} src={pix1} alt="Card image cap" /> 
        <CardBody>
          <CardTitle className="persoTitle">Card title</CardTitle>
          <CardText>Some quick CardPerso text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardPerso;