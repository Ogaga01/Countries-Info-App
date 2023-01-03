
function App() {
  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json()

    console.log(data)
  }
  fetchData()

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
