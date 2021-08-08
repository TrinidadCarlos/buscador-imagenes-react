import React from 'react';

const Imagen = ({img}) => {
    console.log(img);
    const {largeImageURL, likes, previewURL, tags,views, user, imageWidth, imageHeight} = img;
    return (  
        <div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text font-weight-bold">Me gusta:{likes}</p>
                    <p className="card-text font-weight-bold">Vista:{views}</p>
                    <p className="card-text font-weight-bold">Usuario:{user}</p>
                    <p className="card-text font-weight-bold"> Width: {imageWidth} y Height: {imageHeight}  </p>

                </div>
                <div className="card-footer">
                    <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block"> Ver Imagen con más calidad</a>
                </div>
            </div>
        </div>
    );
}
 
export default Imagen;