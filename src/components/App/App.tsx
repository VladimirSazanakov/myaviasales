import React from 'react';
import { Layout } from 'antd';

import logo from '../../img/Logo.svg';
import './App.css';
import Filter from '../Filter';
import Tabs from '../Tabs';
import Ticked from '../Ticket';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Filter />
      <Tabs />
      <Ticked />
      content
      footer
    </div>
  );
}

export default App;
