import React from 'react';

function Modal({ src, alt, onClose }) {
  return (
    <div className="fixed top-10 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative">
        <button
          className="absolute top-2 right-2 text-white text-2xl cursor-pointer"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img
          src={src}
          alt={alt}
          className="max-w-screen-lg max-h-screen mx-auto"
        />
      </div>
    </div>
  );
}

export default Modal;
