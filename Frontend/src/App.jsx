import './App.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

function App() {



  return (
    <div>
      <div id="content">
        <Header />
        <div id="view">
          <h1>WEATHER AT A GLANCE</h1>
          <button>Get Started</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
