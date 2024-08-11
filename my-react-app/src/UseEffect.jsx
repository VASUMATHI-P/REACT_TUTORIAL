import { useEffect, useState } from "react"

const UseEffect = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(()=> {
    window.addEventListener("resize", handleResize);
    console.log("Event listener ADDED");
    
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listener REMOVED");
    }
  }, []);

  useEffect(() =>{
    document.title = `Width: ${width}, Height: ${height}`
  }, [height, width]);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Width : {width}</p>
      <p>Height : {height}</p>
    </>
  )
}

export default UseEffect