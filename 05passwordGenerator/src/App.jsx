import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState("");
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeChar, setIncludeChar] = useState(false);
  const [password, setPassword] = useState("");


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (includeNumber)
      str += "0123456789"
    if (includeChar)
      str += "!@#$%^&*()_+-=[]{}|;:',.<>?/`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char);

    }
    setPassword(pass);
  }
    , [
      length
      , includeNumber
      , includeChar
      , setPassword
    ])

  // useRef hook example
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.focus()
    passwordRef.current?.setSelectionRange(0, 25)
    window.navigator.clipboard.writeText(password)

  }, [password])

  //useEffect hook example
  useEffect(() => { passwordGenerator() },
    [
      length
      , includeChar
      , includeNumber
      , passwordGenerator
    ])


  return (
    <>

      <div className="w-full max-w-max mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
        <h1
          className="text-center 
        text-4xl text-slate-200 pb-2"
        >
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            placeholder="Password"
            value={password}
            className="outline-8 w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex  flex-row text-sm gap-x-6 ">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={25}
              value={length}
              onChange={(e) => {
                setLength(e.target.value)
              }}
              className="cursor-pointer" />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center  gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeNumber}
              onChange={() => {
                setIncludeNumber(prev => !prev)
              }}
            />
            <label htmlFor="length">Include Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={includeChar}
              onChange={() => {
                setIncludeChar(prev => !prev)
              }}
            />
            <label htmlFor="length">Include Special Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
