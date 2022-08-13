import React from 'react';
import './App.css';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import AppHeader from './components/common/header';
import AppHome from './pages/home';
import AppFooter from './components/common/footer';

const App:React.FC = () => {
  return (
    <div className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
    </div>
  );
}

export default App;
