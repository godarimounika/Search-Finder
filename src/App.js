import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className='app'>
    {/* Particle Effects */}
    <div className='particle'></div>
    <div className='particle'></div>
    <div className='particle'></div>
    <div className='particle'></div>
    <div className='particle'></div>

    <div className='search-bar-container'>
      <SearchBar />
      <div className='searchbar-result'>
       
      </div>
    </div>
  </div>
  );
}

export default App;
