import Main from './page/Main';
import Transaction from './page/Transaction';
import Navbar from './component/Navbar';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="background">
      <Navbar />
      <Routes>
        <Route
          path="https://km3140.github.io/KDT_Hackathon/"
          element={<Main />}
        />
        <Route path="/transaction/:id" element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default App;
