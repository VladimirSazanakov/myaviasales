import React from "react";

import classes from './LoadIndicator.module.scss';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;

export default function LoadIndicator() {
  return (
    <div className={classes.LoadIndicator}>
      <Spin size='large' indicator={antIcon} />
    </div>
  )
}



