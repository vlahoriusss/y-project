
// Home.tsx

import React from 'react';
import { IconType } from 'react-icons/lib';

interface MessagesProps {
  onClick: () => void;
  color: string;
  size: number;
  className?: string;
}

const Messages: React.FC<MessagesProps> = ({ onClick, color, size }) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer hover:opacity-70 transition"
    >
<path d="M13.8345 4.93129V8.6016C13.8345 9.70617 12.939 10.6016 11.8345 10.6016H8.67964M13.8345 4.93129V3.26562C13.8345 2.16106 12.939 1.26562 11.8345 1.26562H3.46289C2.35832 1.26562 1.46289 2.16106 1.46289 3.26563L1.4629 12.7781V12.7781C1.46289 13.284 2.0133 13.5978 2.44869 13.3402L6.60476 10.8805C6.91319 10.6979 7.265 10.6016 7.6234 10.6016H8.67964M13.8345 4.93129H16.2977C17.4023 4.93129 18.2977 5.82672 18.2977 6.93129V8.88333V15.5564C18.2977 16.0416 17.7633 16.3368 17.3526 16.0785V16.0785L14.3153 14.2181C14.0009 14.0255 13.6393 13.9236 13.2707 13.9236H10.6796C9.57507 13.9236 8.67964 13.0282 8.67964 11.9236V10.6016M13.8345 4.93129C13.8345 4.93129 13.2302 4.88602 12.4355 4.99081M13.8345 4.93129L12.4355 4.99081M13.1197 8.1594C9.5704 8.1594 9.47537 5.32495 12.4355 4.99081" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
      
    </svg>
  );
};


export default Messages;


