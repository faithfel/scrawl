import { useLayoutEffect, useState } from 'react'
import './App.css'




function App() {

  useLayoutEffect(() => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = 'red'
    ctx.fillRect(10, 10, 100, 100)

  });
  
  return (
    <canvas id="canvas" width={window.innerWidth} height={window.innerHeight} >Canvas</canvas>
  );
}

export default App
