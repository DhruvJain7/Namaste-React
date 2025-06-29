import React from 'react';
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // console.log(this.props.name + 'Constructor');
  }
  componentDidMount() {
    // console.log(this.props.name + 'ComponentdidMount');
  }
  render() {
    // console.log(this.props.name + 'Render');
    const { name, location } = this.props;

    return (
      <div className="user">
        <h1>{name}</h1>
        <h2>{location}</h2>
      </div>
    );
  }
}
export default UserClass;
