import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?'

    let characters = lowerCase + upperCase
    if (numberAllowed) {
      characters += numbers
    }
    if (characterAllowed) {
      characters += specialCharacters
    }

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length + 1)
      generatedPassword += characters[randomIndex]
    }

    setPassword(generatedPassword)
  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = () => {
    if (passwordRef.current) {
      passwordRef.current.select()
      passwordRef.current.setSelectionRange(0, 99999)
      window.navigator.clipboard.writeText(password)
    }
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            ref={passwordRef}
            type="text"
            name="password-reader"
            value={password}
            className="outline-none w-full px-3 py-1"
            placeholder="Password"
            readOnly
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-nowrap justify-between text-sm gap-x-2">
          <div className="flex flex-nowrap text-sm gap-x-1">
            <input
              type="range"
              name="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex text-sm gap-x-1">
            <input
              type="checkbox"
              name="number-allowed"
              id="number-allowed"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
            />
            <label htmlFor="number-allowed">Numbers</label>
          </div>
          <div className="flex text-sm gap-x-1">
            <input
              type="checkbox"
              name="character-allowed"
              id="character-allowed"
              checked={characterAllowed}
              onChange={(e) => setCharacterAllowed(e.target.checked)}
            />
            <label htmlFor="character-allowed">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
