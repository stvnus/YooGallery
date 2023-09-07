import React, { useState } from 'react';
import Modal from '../Modal'; // Impor komponen Modal

function Image({ src, alt }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-1/4 p-2">
      <img
        src={src}
        alt={alt}
        className="h-96 w-full object-cover rounded-lg shadow-md cursor-pointer"
        onClick={openModal} // Buka modal saat gambar diklik
      />
      {isModalOpen && (
        <Modal src={src} alt={alt} onClose={closeModal} />
      )}
    </div>
  );
}

export default Image;
