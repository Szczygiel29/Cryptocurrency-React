import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd';
import Navbar from './components/Navbar.jsx';
import CryptoDetails from './components/CryptoDetails.jsx'
import Cryptocurrencies from './components/Cryptocurrencies.jsx'
import News from './components/News.jsx'
import Homepage from './components/Homepage.jsx'
import Exchanges from './components/Exchanges.jsx'

function App() {

  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path="/" Component={Homepage} />
              <Route exact path="/exchanges" Component={Exchanges} />
              <Route exact path="/cryptocurrencies" Component={Cryptocurrencies} />
              <Route exact path="/crypto/:coinId" Component={CryptoDetails} />
              <Route exact path="/news" Component={News} />
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023
            <Link to="/">
              CryptoTracker Inc.
            </Link> <br />
            All Rights Reserved.
          </Typography.Title>
        </div>
      </div>
    </div>
  );
}

export default App;
