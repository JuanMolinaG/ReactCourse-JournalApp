import React from 'react';

export const JournalEntry = () => {
  return (
    <div className='journal__entry'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg)',
        }}
      ></div>
      <div className='journal__entry-body'>
        <p className='journal__entry-title'>Un nuevo día</p>
        <p className='journal__entry-content'>
          Velit velit ipsum culpa consequat eiusmod ut commodo sint eiusmod
          aliquip qui adipisicing aute.
        </p>
      </div>
      <div className='journal__entry-date-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
