import React, { useEffect , useState} from 'react';
import api from './services/api'
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import DevForm from './Components/DevForm'
import DevItem from './Components/DevItem'



function App() {
  const [devs, setDevs] = useState([])


  
  useEffect(() => {
    async function loadDevs(){
      console.log('na load devs ??')
      const response = await api.get('/devs')
      setDevs(response.data)
    }
    loadDevs()
  }, [])

  
  async function handleAddDev(data) {
   
    const response = await api.post('/devs', data)
    setDevs([...devs, response.data])
  }
  return (
    
    <div id="app">
      <aside>
        <strong> Cadastrar </strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev=>(
            <DevItem key={dev._id} dev={dev}  />
          ) )}


        </ul>
        
      </main>
    </div>
  );
}

export default App;
