import './css/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './Data/Data';


function App() {
  const CardElements = data.map((Data)=>{return <Card key={Data.id} {...Data}/>});
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className='card_section'>
        {CardElements}
      </section>
    </div>
  );
}

export default App;
