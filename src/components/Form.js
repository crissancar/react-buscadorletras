import React, {useState} from 'react';

const Form = ({saveSearchLyrics}) => {

    //State
    const [search, saveSearch] = useState({
        artist: '',
        song: ''
    });
    const [error, saveError] = useState(false);

    //Desestructuración de objeto
    const {artist, song} = search;

    //Actualizar state
    const updateState = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    };

    //Llamada a la api
    const queryAPI = e => {
        e.preventDefault();

        if(artist.trim() === '' || song.trim() === ''){
            saveError(true)
            return;
        }

        saveError(false);

        //enviar al componenete app
        saveSearchLyrics(search);
    }

    return ( 
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}

                    <form
                        onSubmit={queryAPI}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend>Buscar letras de canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Nombre del artista"
                                            onChange={updateState}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Nombre de la canción"
                                            onChange={updateState}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Form;