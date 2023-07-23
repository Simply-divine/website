import Card from './components/card/Card';
import CardSlider from './components/card-slider/CardSlider';
import ImageCard from './components/image-showcase/ImageCard';
import Carousel from './components/carousel/Carousel';

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

      <section>
        <h1> Carousel Card</h1>
        <Carousel />
      </section>
      <div>Hey</div>
    </div>
  );
}

export default App;
