import Footer from "./Components/Footer"
import SideBar from "./Components/SideBar"
import Main from "./Components/Main"
import { useEffect, useState } from "react"


function App() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const [showSidbar, setShowSidebar] = useState(false)//side bar disappear when it's false
//render the components

function handleToggle(){
  setShowSidebar(!showSidbar)
}

useEffect(() => {
  async function fetchApiData(){
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`
  
// Cache today's date as a string
const today = (new Date()).toDateString()
const localKey = `NASA-${today}`

 // Check if data for today is already in local storage
if(localStorage.getItem(localKey)){
  const apiData = JSON.parse(localStorage.getItem(localKey))
  setData(apiData)
  console.log('Fetch from catch today')
  
  return
}
// Clear local storage if data is not available
localStorage.clear()


try {
  const response = await fetch(url)
  const apiData = await response.json()
  localStorage.setItem(localKey, JSON.stringify(apiData))
  setData(apiData)
  console.log('Fetch from APi today')
  } catch (error) {
    console.log(error.message)
    }
}
  fetchApiData()
}, [])


  return (
    <>
      {data ? (<Main data={data}/>): (
        <div className="loadingState">
          <i class="fa-solid fa-spinner"></i>
        </div>
      )}
      {showSidbar &&(
        <SideBar data={data} handleToggle={handleToggle} />
        )}
      
      {data && (
        <Footer data={data} handleToggle={handleToggle} />
        )}
    </>
  )
}

export default App
