import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/home';
import Table from './components/table';
import NotFound from './components/notFound';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'/simple-cms/'} element={<Home/>}/>
        <Route path={'/tabs/:id/'} element={<Table/>}/>
        <Route path={'*'} element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
