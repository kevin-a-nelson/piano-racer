import React, { useState, useEffect } from 'react'

export default function Note() {
  const [xoffset, setXoffset] = useState(0);
  const [isDead, setIsDead] = useState(false);


  useEffect(() => {
    // xoffset is always 0 within setInterval() for some reason
    // xoffsetTracker is used to track the real value of xoffset
    let xoffsetTracker = 0;
    const interval = setInterval(() => {
      xoffsetTracker += 1;
      if (xoffsetTracker > 800) {
        setIsDead((isDead) => true)
        clearInterval(interval)
      } else {
        setXoffset((xoffset) => xoffset + 1)
      }

    }, 10);

      return () => clearInterval(interval);
  }, []);

  if(isDead) {
      return null
  }

    return (
        <div className='note' style={{right: xoffset}}>
            𝅝
        </div>
    )
}