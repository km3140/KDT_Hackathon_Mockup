import Main from './page/Main';
import Transaction from './page/TransactionInfo';
import Navbar from './component/Navbar';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/transactionInfo/:id" element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default App;
