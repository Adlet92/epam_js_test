import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
