import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import axios from 'axios';
import '../cards.css';
import Cards, { Card } from 'react-swipe-card';
import { connect } from 'react-redux';
import { setHeaders } from '../actions/headers';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = { myspaces: [] }

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/myspaces')
    .then( res => {
      dispatch(setHeaders(res.headers))
      this.setState({ myspaces: res.data })
    })
  }

  swipeLeft = (id) => {
  const { myspaces } = this.state;
  this.setState({ myspaces: myspaces.filter( c => c.id !== id ) })
  }

  swipeRight = (id) => {
    const { myspaces } = this.state;
    const { dispatch } = this.props;
    axios.put(`/api/myspaces/${id}`)
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({
          myspaces: myspaces.filter( c => c.id !== id )
        })
      });
  }

  render() {
    let { myspaces } = this.state;
    return (
      <div>
        <Link to="/my_friends">My Friends</Link>
        <Header as="h3" textAlign="center">My-Space</Header>
        <Cards className="cards-root">
          { myspaces.map( s =>
              <Card
                key={s.id}
                onSwipeLeft={() => this.swipeLeft(s.id) }
                onSwipeRight={() => this.swipeRight(s.id) }
                >
                <h2>{s.name}</h2>
                <Image src={s.avatar} />
                <h5>{s.post}</h5>
                <h5>{s.age}</h5>
                <h5>{s.occupation}</h5>
                <h5>{s.location}</h5>
              </Card>
            )
          }
        </Cards>
      </div>
    );
  }
}

export default connect()(Home);
