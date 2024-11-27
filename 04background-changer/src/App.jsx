import { useState } from 'react'
import Button from './component/Button';



function App() {

  const [UIcolor, setUIColor] = useState("rebeccapurple")

  const getColor = (color) => {
    setUIColor(color);
  }
  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{
          backgroundColor: UIcolor
        }}>
        <h1 className=' rounded-lg bg-slate-100  shadow-inner flex flex-wrap justify-center font-sans text-2xl'
        style={{
          color: UIcolor
        }}>
            Simple color changer app
        </h1>
        <div
          className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div
            className='flex flex-wrap shadow-lg gap-3 bg-white justify-center px-3 py-2 rounded-2xl'
          >
            <Button getColor={getColor} />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
