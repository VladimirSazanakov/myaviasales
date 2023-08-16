import React from "react";

import { Card, Checkbox, Space, Typography } from "antd";
import './Filter.css';

const { Title } = Typography;

export default function Filter(props: any) {
  return (
    <div className="Filter">
      <Space direction="vertical" size={20}>
        <h4 className="Filter__title">Количество пересадок</h4>
        <Checkbox className="Filter__items">Все</Checkbox>
        <Checkbox className="Filter__items">Без пересадок</Checkbox>
        <Checkbox className="Filter__items">1 пересадка</Checkbox>
        <Checkbox className="Filter__items">2 пересадки</Checkbox>
        <Checkbox className="Filter__items">3 пересадки</Checkbox>
      </Space>
    </div>
  )
}