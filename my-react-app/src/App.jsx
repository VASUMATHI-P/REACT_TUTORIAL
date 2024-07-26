import Student from "./Student"

function App() {
  return (
    <>
      <Student name = "Vasu" age = {21} isStudent = {true} />
      <Student name = "Loki" age = {1500} isStudent = {false} />
      <Student name = "Steve" age = {100} isStudent = {false} />
      <Student/>
    </>
  )

}

export default App
