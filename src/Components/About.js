import { Component } from 'react';
import User from './User';
import UserClass from './UserClass';
import UserContext from '../../util/UserContext';

class About extends Component {
  constructor(props) {
    super(props);
    // console.log('parent constructor');
  }

  componentDidMount() {
    // console.log('parent componentdidMount');
  }
  render() {
    console.log('parent render');
    return (
      <div>
        <div>
          Logged In User :
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name="Dhruv" location="Mumbai" />
        <UserClass name="Mahi" location="Mumbai" />
        <UserClass name="tanoj" location="Mumbai" />
      </div>
    );
  }
}
export default About;
