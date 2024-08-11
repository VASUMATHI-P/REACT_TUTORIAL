import { useEffect, useState } from "react"

const DigitalClock = () => {
  const[time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [])

  const padZero = (number) => {
    return (number < 10 ? '0' : '') + number;
  }

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  return (
    <>
      <p>{formatTime()}</p>
    </>
  )
}

export default DigitalClock