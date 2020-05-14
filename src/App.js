import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form.js';
import Song from './components/Song.js';
import ArtistInfo from './components/ArtistInfo.js';
import axios from 'axios';

function App() {

  //State
  const [searchLyrics, saveSearchLyrics] = useState({});
  const [lyrics, saveLyrics] = useState('');
  const [artistInfo, saveArtistInfo] = useState({});

  useEffect(() => {
    //Comprobar que el objeto no está vacío
    if(Object.keys(searchLyrics).length === 0) return;
    
    const queryAPILyric = async () => {
      const {artist, song} = searchLyrics;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const urlTwo = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      //Con esta promesa las dos llamadas a las api's se inician al mismo tiempo
      const [lyrics, artistInfo] = await Promise.all([
        axios.get(url),
        axios.get(urlTwo)
      ]);

      saveLyrics(lyrics.data.lyrics);
      saveArtistInfo(artistInfo.data.artists[0]);
    }
    queryAPILyric();
  }, [searchLyrics, artistInfo]);



  return (
    <Fragment>
      <Form
        saveSearchLyrics={saveSearchLyrics}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <ArtistInfo
              artistInfo={artistInfo}
            />
          </div>
          <div className="col-md-6">
            <Song
              lyrics={lyrics}
            />
            </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
