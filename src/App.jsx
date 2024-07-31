import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Cards />
    </>
  );
}

export default App;