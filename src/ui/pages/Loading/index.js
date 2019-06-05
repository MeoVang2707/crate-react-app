import React from 'react';
import { Spin, Row, Icon } from 'antd';
import './style.less';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

function loading() {
  return (
    <Row type="flex" justify="center" align="middle" className="loadingPage">
      <Spin indicator={antIcon} />
      <Row type="flex" justify="center" align="middle">
        Loading
      </Row>
    </Row>
  );
}

export default loading;
