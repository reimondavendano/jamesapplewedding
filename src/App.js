import logo from './logo.svg';
import './App.css';
import WeddingHomePage from './components/WeddingHomePage';
import WeddingHeader from './components/WeddingHeader';
import WeddingTimeline from './components/WeddingTimeline';
import WeddingEvent from './components/WeddingEvent';
import WeddingInfo from './components/WeddingInfo';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import RSVP from './components/RSVP';
import Nuptials from './components/Nuptials';

function App() {
  return (
    <div className="App">
      <WeddingHeader/>
      <WeddingHomePage/>
      <WeddingTimeline/>
      <Nuptials/>
      <WeddingEvent/>
      <WeddingInfo/>
      <FAQ/>
      <RSVP/>
      <Footer/>
    </div>
  );
}

export default App;
