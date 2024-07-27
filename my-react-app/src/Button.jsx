const Button = () => {

  // let count = 0;
  // const handleClick = () => {
  //   if(count < 3){
  //     count++;
  //     console.log(`You clicked the button ${count} time/times`);
  //   } else {
  //     console.log(`Stop clicking the button!`);
  //   }
  // }

  const handleClick = (e) => {
    e.target.textContent = 'Stop it bro'
  }

  return (
    <>
      <button onDoubleClick={(e) => handleClick(e)}>Click me!</button>
    </>
  )
}

export default Button