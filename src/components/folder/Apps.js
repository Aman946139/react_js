import React, { useEffect, useState } from 'react';

function Apps() {
    const [fontSize, setFontSize] = useState(16);

    const increase = () => {
        // setFontSize(prevFontSize => prevFontSize +2);
        setFontSize(Math.min(fontSize +2, 25))


    };
    const dic = () => {
        // setFontSize(prevFontSize => prevFontSize -10);
        setFontSize(Math.max(fontSize -2, 10))
    }

    return (
        <>
            <button onClick={increase}>Increase Font Size</button>
            <button onClick={dic}>dic Font Size</button>
            <p style={{fontSize:`${fontSize}px`}} >
            This text will increase in font size when the button is clicked.
        </p>

        </>
      
   
  )
}

export default Apps;