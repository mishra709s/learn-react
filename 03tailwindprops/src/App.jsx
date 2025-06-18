import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl p-4 mb-4">
        Tailwind test
      </h1>
      <div className="flex gap-4">
        <Card
          name="Pomegranate"
          btnText="Click Me"
          imgUrl="https://images.pexels.com/photos/20349779/pexels-photo-20349779.jpeg"
        />
        <Card
          name="Guitar"
          btnText="Visit Me"
          imgUrl="https://images.pexels.com/photos/32618837/pexels-photo-32618837.jpeg"
        />
      </div>
    </>
  )
}

export default App
