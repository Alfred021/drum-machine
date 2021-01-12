import React, { useRef, useEffect } from 'react';
import '../App.css';

const DrumPad = ({drumKey, name, handleClick, src, power, id}) => {
  
    const audioRef = useRef();
    const handleKeydown = (e) => {
    if (e.keyCode === drumKey.charCodeAt())         {     
      handleClick(name)
      audioRef.current.play();
      }
    } 
 

  useEffect(() => {
    if (power) {
    document.addEventListener('keydown', handleKeydown)
    
    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }
  }, [power])
    
  return (
    <div className="col-sm-auto">
    <div id={id} className={"drum-pad btn btn-secondary btn-lg"} onClick={() => {
    if (power) {
    audioRef.current.play();
    handleClick(name)
  } else if (power === false) {
    handleClick(name)
  }
  }}>
    {drumKey}
<audio className={"clip"} id={drumKey} ref={audioRef} src={src}/>
     </div>
  </div>
  )
}

export default DrumPad
