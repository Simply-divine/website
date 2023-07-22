import Card from './components/card/Card';
import CardSlider from './components/card-slider/CardSlider';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Hi Beautiful!</header>
      <CardSlider>
        <Card />
        <Card />
        <Card />
      </CardSlider>
    </div>
  );
}

export default App;
