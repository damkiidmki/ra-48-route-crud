import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CardProvider from './components/CardProvider';
import Home from './components/Home';
import CreateCard from './components/CreateCard';
import EditCard from './components/EditCard';
import ViewCard from './components/ViewCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <CardProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Home/>} ></Route>
              <Route path='/card/new' element={< CreateCard/>} ></Route>
              <Route path='/card/edit/:id' element={<EditCard />} ></Route>
              <Route path='/card/:id' element={<ViewCard />} ></Route>
            </Routes>
          </Router>
        </CardProvider>
    </div>
  );
}

export default App;