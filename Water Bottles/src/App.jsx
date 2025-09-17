import { Suspense } from 'react'
import './App.css'
import Bottles from './component/Bottles/Bottles'

const bottlesPromise = fetch('./bottles.json')
  .then(res => res.json());

function App() {
 
  


  return (
    <>
      <div>
        <h1>Buy Awesome Water Bottle</h1>
      </div>
      
      <Suspense fallback={<h3>Bottles are loading....</h3>}>
      <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>

     </>  
  )
}

export default App
