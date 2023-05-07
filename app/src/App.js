import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd';
import Navbar from './components/Navbar';
import CryptoDetails from './components/CryptoDetails'
import Cryptocurrencies from './components/Cryptocurrencies'
import News from './components/News'
import Homepage from './components/Homepage'
import Exchanges from './components/Exchanges'

function App() {

  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
      </div>
      <div className=''></div>
    </div>
  );
}

export default App;
