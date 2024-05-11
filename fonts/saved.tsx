
// Home.tsx

import React from 'react';
import { IconType } from 'react-icons/lib';

interface SavedProps {
  onClick: () => void;
  color: string;
  size: number;
  className?: string;
}

const Saved: React.FC<SavedProps> = ({ onClick, color, size }) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer hover:opacity-70 transition"
    >
<path d="M7.92118 8.01591C2.92652 8.01591 7.79981 14.5152 12.0207 17.0487C13.4437 17.9028 14.8191 16.6955 14.8152 15.0359L14.7904 4.46367C14.7865 2.80956 13.4445 1.4707 11.7904 1.4707H3.93945C2.2826 1.4707 0.939453 2.81385 0.939453 4.4707V15.043C0.939453 16.6998 2.30267 17.8613 3.70654 16.9813C7.8216 14.402 12.8721 8.01591 7.92118 8.01591Z" stroke="white" stroke-width="1.5"/>
      
    </svg>
  );
};


export default Saved;




