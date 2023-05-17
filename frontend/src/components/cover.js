import React from 'react';

export default function Cover({ cover_i, title, book, handleShowModal }) {
  const handleClick = () => {
    handleShowModal(book);
  };

  return (
    <div className='cover text-center' onClick={handleClick}>
      <img
        src={cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg` : './assets/def.jpg'}
        className="slikaknige"
        alt=""
      />
      <p>{title}</p>
    </div>
  );
}