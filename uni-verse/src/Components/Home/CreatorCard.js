import React, { Component } from 'react';
import { CardImg, Card, CardBody, CardTitle, CardText } from 'reactstrap';

import './CreatorCard.css';

export default class CreatorCard extends Component{
  render() {
    return (

      <div className='card-wrapper'>
        <Card >
          <CardImg className='pic-dim' src={this.props.creators.pic} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.creators.name}</CardTitle>
            <CardText font-size='50%'>B.E. Software Engineering at SJSU</CardText>
            <a href={this.props.creators.Linkedin}><i class="fa fa-linkedin" className="link-d">in</i></a>
          </CardBody>
        </Card>
      </div>
    );
  }
}
