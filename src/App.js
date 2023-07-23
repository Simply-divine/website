import Card from './components/card/Card';
import CardSlider from './components/card-slider/CardSlider';
import ImageCard from './components/image-showcase/ImageCard';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Hi Beautiful!</header>
      <CardSlider>
        <Card />
        <Card />
        <Card />
      </CardSlider>

      <section>
        <h1>Inverting Image Cards</h1>
        <ImageCard index={0} />
        <ImageCard index={1} />
        <ImageCard index={2} />
      </section>
    </div>
  );
}

export default App;
