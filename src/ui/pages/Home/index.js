import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import './style.less';

class App extends React.Component {
  render() {
    const { username } = this.props;
    console.log('this.props', this.props.history);
    return (
      <div className="App">
        <p className="fs32">Đây là trang Home</p>
        <p>
          <FormattedMessage id="hello" /> {username}
        </p>
        <Link to="/about">
          <Button type="primary">About</Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  username: state.user.username,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
