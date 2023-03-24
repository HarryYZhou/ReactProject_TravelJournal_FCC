import Navbar from './components/Navbar'
import Card from './components/Card'
import test_image from './images/mtjlogo.png'
import Separator from "./components/Separator";


function App() {
  return (
    <div className="App">
      <Navbar />
        <Card
        img = {test_image}
        />
      <Separator/>
    </div>
  );
}

export default App;
