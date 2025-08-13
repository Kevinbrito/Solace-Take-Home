import React, { useState } from 'react';

interface ButtonProps {
    onClick: () => void;
    copy: string;
}



export default function ReusableButton({ onClick, copy}: ButtonProps) {

    return (
     <button style={{ backgroundColor: "#D7a13b" }} onClick={onClick} className='rounded-lg border item-center p-2'>{copy}</button>
    )
  }