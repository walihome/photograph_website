import React, { useState, useEffect } from 'react';
import './PhotoGallery.css';
import mockPhotos from './mockPhotos'; // 导入mock数据

function PhotoGallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // 使用mock数据
    setPhotos(mockPhotos);
  }, []);

  return (
    <div className="photo-gallery">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-item">
          <img src={photo.url} alt={photo.title} />
          <div className="photo-details">
            <ul className="details-list">
              <li className="item category">
                <h5 className="title">CATEGORY</h5>
                <ul className="stars">
                  <li><i className="star filled"></i></li>
                  <li><i className="star filled"></i></li>
                  <li><i className="star filled"></i></li>
                  <li><i className="star filled"></i></li>
                  <li><i className="star filled"></i></li>
                  <li><i className="star filled"></i></li>
                  <li><i className="star filled"></i></li>
                </ul>
              </li>
              <li className="item exif">
                <h5 className="title">EXIF</h5>
                <ul className="exif-details">
                  <li><i className="focus"></i><span>200mm</span></li>
                  <li><i className="aperture"></i><span>ƒ/5</span></li>
                  <li><i className="shutter"></i><span>1/640s</span></li>
                  <li><i className="iso"></i><span>100</span></li>
                </ul>
              </li>
              <li className="item location">
                <h5 className="title">LOCATION</h5>
                <span>San Diego, CA</span>
              </li>
              <li className="item camera">
                <h5 className="title">CAMERA</h5>
                <span>Canon EOS 5D Mark II</span>
              </li>
              <li className="item lens">
                <h5 className="title">LENS</h5>
                <span>EF 70-200mm f/2.8L II</span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PhotoGallery;
