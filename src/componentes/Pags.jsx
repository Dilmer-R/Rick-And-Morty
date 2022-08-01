import React from 'react';

export default function Pags({prev, next, onPrevious, onNext}) {

  const handlePrevious = () => {
    onPrevious();
  }
  const handleNext = () => {
    onNext();
  }
  return (
    <>
    <nav className='my-5'>
        <ul className='pagination justify-content-center'>
            {
                prev ?
                <li className='page-item'>
                    <button className='page-link' style={{backgroundColor: "#F2DD08"}} onClick={handlePrevious}>Previous</button>
                </li>
                :
                null
            }
            {
                next ?
                <li className='page-item'>
                <button className='page-link' style={{backgroundColor: "#F2DD08"}} onClick={handleNext}>Next</button>
                </li>
                :
                null
            }
        </ul>
    </nav>
    </>
  );
}
