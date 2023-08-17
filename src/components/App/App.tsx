import React from 'react';
import { Layout } from 'antd';

import logo from '../../img/Logo.svg';
import './App.css';
import Filter from '../Filter';
import Tabs from '../Tabs';
import Ticked from '../Ticket';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
</style>

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <header className='app-header'>
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <main className='app-main'>
        <section className='app-filter-section'>
          <Filter />

        </section>
        <section className='app-result-section'>
          <Tabs />
          <Ticked />
          <Ticked />
          <Ticked />
          <Ticked />
          <Ticked />

        </section>
      </main>
    </div>
  );
}

export default App;
