import React, { useState, useEffect } from 'react';
import './PhotoGallery.css';

function PhotoGallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // 从指定的URL获取图片列表
    fetch('https://images.dooocs.com/')
      .then(response => response.json())
      .then(data => {
        // 将获取到的图片列表设置到state中
        const fetchedPhotos = data.images.map((url, index) => ({
          id: index + 1,
          url: url,
          title: `照片${index + 1}`
        }));
        setPhotos(fetchedPhotos);
      })
      .catch(error => console.error('Error fetching photos:', error));
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
