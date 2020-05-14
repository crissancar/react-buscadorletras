import React from 'react';

const ArtistInfo = ({artistInfo}) => {

    if(Object.keys(artistInfo).length === 0) return null;

    const {strArtistThumb, strGenre, strBiographyES, strFacebook, strTwitter, strLastFMChart} = artistInfo;

    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información del artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo artista"/>
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text">Biografía</h2>
                <p className="card-text">{strBiographyES}</p>
                <p className="card-text">
                    <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>

            </div>
        </div>
     );
}
 
export default ArtistInfo;