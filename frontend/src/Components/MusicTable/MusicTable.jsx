import React, { useState } from "react";
import "./MusicTable.css";
import {Table, Form} from 'react-bootstrap'

const MusicTable = (props) => {
  const [search, setSearch] = useState("");

  let songList = props.songs.filter(song => {
    if (
      song.album.toLowerCase().includes(search.toLowerCase()) ||
      song.artist.toLowerCase().includes(search.toLowerCase()) ||
      song.title.toLowerCase().includes(search.toLowerCase()) ||
      song.genre.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    }
  });

  return (
    <>
    <Form>
        <Form.Control type="text"
        className="search_bar"
        placeholder="Search"
        onChange={(event) => setSearch(event.target.value)}/>
    </Form>


      <Table striped bordered hover variant="info">
        <thead>
          <tr>
            <th>Artist</th>
            <th>Title</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
        {songList.map((song, index) => {
          return (
            <tr key={song.id}>
              <td>{song.artist}</td>
              <td>{song.title}</td>
              <td>{song.album}</td>
              <td>{song.release_date}</td>
              <td>{song.genre}</td>
            </tr>
          );
        })}            
        </tbody>
      </Table>
    </>
  );
};

export default MusicTable;
