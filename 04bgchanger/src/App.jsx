import { useState } from 'react'

const colorList = [
  {
    name: 'Blue',
    colHex: '#1447e6',
  },
  {
    name: 'Red',
    colHex: '#ff0000',
  },
  {
    name: 'Green',
    colHex: '#00ff00',
  },
  {
    name: 'Yellow',
    colHex: '#fff085',
  },
  {
    name: 'Pink',
    colHex: '#fccee8',
  },
  {
    name: 'Orange',
    colHex: '#ff6900',
  },
]

function App() {
  const [color, setColor] = useState(colorList[0].colHex)

  return (
    <>
      <div
        className="w-full min-h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {colorList.map((ele) => (
              <button
                key={ele.colHex}
                className={`outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer`}
                style={{ backgroundColor: ele.colHex }}
                onClick={() => setColor(ele.colHex)}
              >
                {ele.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
