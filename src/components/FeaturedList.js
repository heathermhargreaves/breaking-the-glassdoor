import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { List,Item, Image, Label, Icon, Card, Grid, Button, Modal, Segment, Statistic } from 'semantic-ui-react'
import CircularProgressbar from 'react-circular-progressbar'
import DataStore from '../stores/Store'
import Actions from '../actions/Actions'


export default class FeaturedList extends Component {
  constructor() {
    super();
    this.state={
      data: DataStore.getData()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount () {
    DataStore.startListening(this._onChange);
    Actions.getData();
  }

  componentWillUnmount () {
    DataStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({ animals: ClientsDataStore.getAnimals() });
  }


  render() {
    let { data } = this.state;
    // let  Companies = companies.map( company => {
    //     let { name, id, logo, review, score, description } = company;
        let Companies = (
            <Card onClick={() => this.select(1)} className='card'>
              <Card.Content>
                <Image floated='left' size='mini' src='./logo1.png' />
                <div className="featured-progressbar">
                  <CircularProgressbar percentage={90} />
                </div>
                <Card.Header>
                  Company Name
                </Card.Header>
                <Card.Meta>
                  Description: From next-generation networks to industry-leading mobility, cloud, and video, Cisco provides integrated architecture and software solutions, connecting people, processes, data, and things.
                </Card.Meta>
                <Card.Description>
                  Reviews : "Great place to work!"
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label color='orange' horizontal>Support</Label>
                <Label color='teal' horizontal>PTO</Label>
                <Label color='red' horizontal>Safe</Label>
              </Card.Content>
              <Statistic size='mini' label='Ratings' value='208' />
            </Card>
      )
    // })

  return (
    <Grid textAlign='center'>
      <Card.Group>
        {Companies}
        {Companies}
        {Companies}
        {Companies}
        {Companies}
      </Card.Group>
    </Grid>)
  }
}
