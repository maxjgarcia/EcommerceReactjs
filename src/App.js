import { NavBar } from "./components/NavBar"
import { Footer } from "./components/Footer"



function App() {
  return (
  <>
  <NavBar />
  <ItemListContainer /> 
  <Footer/> 
  </>
  )
}

const ItemListContainer = () => {
	const showAlert = (e) => {
		alert("Bienvenido a mi Tienda!")
	}
	return <button onClick={showAlert}>Greeting</button>;
}



export default App;




