import Navbar from './components/Navbar'
import Card from './components/Card'
import test_image from './images/mtjlogo.png'
import Separator from "./components/Separator"
import data from "./data"


function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item = {item}
            />
        )
    })
          return (
            <div className="App">
              <Navbar />
                {cards[0]}
              <Separator/>
                {cards[1]}
                <Separator/>
                {cards[2]}
            </div>
          );
}

export default App;
