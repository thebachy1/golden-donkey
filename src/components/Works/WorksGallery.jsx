import React, { useState, useEffect } from "react";
import "./WorksGallery.scss";

const WorksGallery = ({ images }) => {
  const [displayedImages, setDisplayedImages] = useState([]);

  useEffect(() => {
    // Load initial images (you can load more when scrolling or through an API call)
    setDisplayedImages(images.slice(0, 6)); // For example, display 6 images initially
  }, [images]);

  const loadMoreImages = () => {
    // Add more images to the displayedImages list
    const moreImages = images.slice(
      displayedImages.length,
      displayedImages.length + 6
    );
    setDisplayedImages([...displayedImages, ...moreImages]);
  };

  return (
    <div className="gallery-container">
      {displayedImages.map((image, index) => (
        <div
          key={index}
          className={`gallery-item ${index % 3 === 0 ? "wide" : "narrow"}`}
        >
          <img src={image} alt={`Gallery Image ${index}`} />
        </div>
      ))}
      <div>
        <p>Work / Proyects / Bite Back</p>
      </div>
    </div>
  );
};

export default WorksGallery;
