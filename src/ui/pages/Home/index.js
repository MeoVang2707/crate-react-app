import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './style.less';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p className="fs32">Đây là trang Home</p>
        <Link to="/about">
          <Button type="primary">About</Button>
        </Link>
      </div>
    );
  }
}

export default App;
