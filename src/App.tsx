import React from 'react';
import './App.css';
import { Content, Header } from 'antd/lib/layout/layout';
import AppHeader from './components/common/header';
import AppHome from './pages/home';

const App:React.FC = () => {
  return (
    <div className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        <AppHome />
      </Content>
    </div>
  );
}

export default App;
