import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Billboard from './components/Billboard';
import Titles from './components/Titles';
import Footer from './components/Footer';
import './normalize.css'

function App() {
  return (
    <div className="App">
      <Billboard />
      <Navigation />
      <Titles />
      <Footer />
    </div>
  );
}

export default App;
