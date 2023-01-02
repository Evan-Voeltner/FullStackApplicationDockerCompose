import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import MusicForm from './Components/MusicForm/MusicForm';
import NavBar from './Components/NavBar/NavBar';
import { Container } from 'react-bootstrap'
function App() {
  const [songs, setSongs] = useState([])
  useEffect(() => {
  getAllSongs();
},[])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }
  
  async function AddNewMusic(newSong){

    let response = await axios.post('http://127.0.0.1:8000/api/music/',newSong);
    if (response.status === 201) {
      getAllSongs()
    }
    
  }


  return (
<>
      <NavBar />
     <MusicTable songs={songs}/>
    <Container>     
     <MusicForm addNewMusic={AddNewMusic}/>    
    </Container></>
  );
}

export default App;
