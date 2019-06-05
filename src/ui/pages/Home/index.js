import React from 'react';
import { Button } from 'antd';
import './style.less';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p className="fs32">Đây là trang Home</p>
        <Button type="primary">Hii</Button>
      </div>
    );
  }
}

export default App;
