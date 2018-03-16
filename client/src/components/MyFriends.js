import React from 'react';
import { Card, Image, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MyFriends extends React.Component {
  state = { myspaces: [] }

  componentDidMount() {
    axios.get('/api/my_friends')
      .then( res => {
        this.setState({ myspaces: res.data })
        this.props.dispatch({ type: 'HEADERS', headers: res.headers })
      });
  }

  render() {
    let { myspaces } = this.state;
    return (
      <div>
        <Card.Group itemsPerRow={4}>
          { myspaces.map( s =>
              <Card key={s.id}>
                <Card.Content>
                  <Image src={s.avatar} />
                  <Divider />
                  <Card.Header>
                    {s.name}
                  </Card.Header>
                </Card.Content>
              </Card>
            )
          }
        </Card.Group>
        <Link to="/">Back</Link>
      </div>
    )
  }
}

export default connect()(MyFriends)
