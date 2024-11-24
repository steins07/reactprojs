import './App.css'
import Card from './components/Card'

const cards = [{ id:1, name: "This", detail: "This is a card of flower" }, { id:2, name: "That", detail: "That is a flower card" }]
function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card name="Flower" details="This is a picture of flower that was taken from internet" />
      {cards.map((card) => {
        return <>
          <Card key={card.id} name={card.name} details={card.detail} />
        </>
      })}
    </>
  )
}

export default App
