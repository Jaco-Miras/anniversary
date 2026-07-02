import React, { useState } from "react";

import image1 from "../../public/photos_together/1.jpg";
import image2 from "../../public/photos_together/2.jpg";
import image3 from "../../public/photos_together/3.jpg";
import image4 from "../../public/photos_together/4.jpg";
import image5 from "../../public/photos_together/5.jpg";
import image6 from "../../public/photos_together/6.jpg";
import image7 from "../../public/photos_together/7.jpg";
import image8 from "../../public/photos_together/8.jpg";
import image9 from "../../public/photos_together/9.jpg";
import image10 from "../../public/photos_together/10.jpg";
import image11 from "../../public/photos_together/11.jpg";
import image12 from "../../public/photos_together/12.jpg";
import image13 from "../../public/photos_together/13.jpg";
import image14 from "../../public/photos_together/14.jpg";
import image15 from "../../public/photos_together/15.jpg";
import image16 from "../../public/photos_together/16.jpg";
import image17 from "../../public/photos_together/17.jpg";
import image18 from "../../public/photos_together/18.jpg";
import image19 from "../../public/photos_together/19.jpg";
import image20 from "../../public/photos_together/20.jpg";
import image21 from "../../public/photos_together/21.jpg";
import image22 from "../../public/photos_together/22.jpg";
import image23 from "../../public/photos_together/23.jpg";
import image24 from "../../public/photos_together/24.jpg";
import image25 from "../../public/photos_together/25.jpg";
import image26 from "../../public/photos_together/26.jpg";
import image27 from "../../public/photos_together/27.jpg";
import image28 from "../../public/photos_together/28.jpg";
import image29 from "../../public/photos_together/29.jpg";
import image30 from "../../public/photos_together/30.jpg";
import image31 from "../../public/photos_together/31.jpg";
import image32 from "../../public/photos_together/32.jpg";
import image33 from "../../public/photos_together/33.jpg";
import image34 from "../../public/photos_together/34.jpg";
import image35 from "../../public/photos_together/35.jpg";
import image36 from "../../public/photos_together/36.jpg";
import image37 from "../../public/photos_together/37.jpg";
import image38 from "../../public/photos_together/38.jpg";
import image39 from "../../public/photos_together/39.jpg";
import image40 from "../../public/photos_together/40.jpg";
import image41 from "../../public/photos_together/41.jpg";
import image42 from "../../public/photos_together/42.jpg";
import image43 from "../../public/photos_together/43.jpg";
import image44 from "../../public/photos_together/44.jpg";
import image45 from "../../public/photos_together/45.jpg";
import image46 from "../../public/photos_together/46.jpg";
import image47 from "../../public/photos_together/47.jpg";
import image48 from "../../public/photos_together/48.jpg";
import image49 from "../../public/photos_together/49.jpg";
import image50 from "../../public/photos_together/50.jpg";
import image51 from "../../public/photos_together/51.jpg";
import image52 from "../../public/photos_together/52.jpg";
import image53 from "../../public/photos_together/53.jpg";
import image54 from "../../public/photos_together/54.jpg";
import image55 from "../../public/photos_together/55.jpg";
import image56 from "../../public/photos_together/56.jpg";
import image57 from "../../public/photos_together/57.jpg";
import image58 from "../../public/photos_together/58.jpg";
import image59 from "../../public/photos_together/59.jpg";
import image60 from "../../public/photos_together/60.jpg";
import image61 from "../../public/photos_together/61.jpg";
import image62 from "../../public/photos_together/62.jpg";
import image63 from "../../public/photos_together/63.jpg";
import image64 from "../../public/photos_together/64.jpg";
import image65 from "../../public/photos_together/65.jpg";
import image66 from "../../public/photos_together/66.jpg";
import image67 from "../../public/photos_together/67.jpg";
import image68 from "../../public/photos_together/68.jpg";
import image69 from "../../public/photos_together/69.jpg";

const allImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image42,
  image43,
  image44,
  image45,
  image46,
  image47,
  image48,
  image49,
  image50,
  image51,
  image52,
  image53,
  image54,
  image55,
  image56,
  image57,
  image58,
  image59,
  image60,
  image61,
  image62,
  image63,
  image64,
  image65,
  image66,
  image67,
  image68,
  image69,
];

const MemoriesTogether = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const images = showAll ? allImages : allImages.slice(8, 16);

  return (
    <section className="section memories-together">
      <h2>💑 Our Memories Together</h2>
      <p className="section-subtitle">Every moment with you is a treasure</p>

      <div className="gallery">
        {images.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            className="image-card"
            onClick={() => setSelectedImage(src)}
            aria-label={`View memory ${index + 1}`}
          >
            <img src={src} alt={`Memory ${index + 1}`} />
          </button>
        ))}
      </div>

      {allImages.length > 16 && (
        <div className="see-all-container">
          <button
            type="button"
            className="see-all-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "See Less" : "See All"}
          </button>
        </div>
      )}

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <img src={selectedImage} alt="Full size memory" />
          </div>
        </div>
      )}
    </section>
  );
};

export default MemoriesTogether;
