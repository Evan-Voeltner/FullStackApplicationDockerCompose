import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const MusicForm = (props) => {

    const [artist, SetArtist] = useState ("");
    const [title, SetTitle] = useState ("");
    const [album, SetAlbum] = useState ("");
    const [releaseDate, SetReleaseDate] = useState ("");
    const [genre, SetGenre] = useState ("");

    function handleSubmit(formEvent){
        formEvent.preventDefault()
        let newEntry = {
            artist: artist,
            title: title,
            album: album,
            release_date: releaseDate,
            genre: genre,
        }
        props.addNewMusic(newEntry)
        SetArtist('')
        SetTitle('')
        SetAlbum('')
        SetReleaseDate('')
        SetGenre('')
    }




    return ( 
        <Form onSubmit={handleSubmit}>
          <Form.Label>Add a Song!</Form.Label>
          <Form.Group>
            <Form.Control type="text" value={artist} onChange={(event)=>SetArtist(event.target.value)} placeholder="Artist"/>  
          </Form.Group>

          <Form.Group>
            <Form.Control type="text" value={title} onChange={(event)=>SetTitle(event.target.value)} placeholder="Title"/>
          </Form.Group>
            
          <Form.Group>
            <Form.Control type="text" value={album} onChange={(event)=>SetAlbum(event.target.value)} placeholder="Album"/>
          </Form.Group>
            
          <Form.Group>
            <Form.Control type="date" value={releaseDate} onChange={(event)=>SetReleaseDate(event.target.value)} placeholder="Release Date"/>
          </Form.Group>
            
          <Form.Group>
            <Form.Control type="text" value={genre} onChange={(event)=>SetGenre(event.target.value)} placeholder="Genre"/>
          </Form.Group>

           <Button variant="info" type='submit' className='btn btn primary' style={{'margin-top': '1em', "color": "white"}}>Add Song</Button>

      </Form>






     );



}
 
export default MusicForm;