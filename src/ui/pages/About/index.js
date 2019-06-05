import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './style.less';

class About extends React.Component {
  render() {
    return (
      <div className="App">
        <p className="fs32">Đây là trang About</p>
        <Link to="/">
          <Button type="primary">Home</Button>
        </Link>
      </div>
    );
  }
}

export default About;
