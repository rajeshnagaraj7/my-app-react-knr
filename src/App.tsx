import './App.css'
import Tanvi from './assets/Tanvi.jpg'
function App() {
  return (
    <>
     <div className="image-portfolio">
      <h2>My Image Portfolio</h2>
      <div className="image-gallery">
        <img src={Tanvi} alt="Image 1" />
      </div>
    </div>
    </>
  )
}

export default App
