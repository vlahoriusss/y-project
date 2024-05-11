// Home.tsx

import React from 'react';
import { IconType } from 'react-icons/lib';

interface SearchProps {
  onClick: () => void;
  color: string;
  size: number;
  className?: string;
}

const Search: React.FC<SearchProps> = ({ onClick, color, size }) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer hover:opacity-70 transition"
    >
      <path
d="M14.5073 16.0617L11.4215 12.8097M11.4215 12.8097L9.52734 10.8135C8.75525 9.99984 8.82629 8.70432 9.68273 7.97993C10.3177 7.44286 11.2233 7.36715 11.9386 7.79133L12.1389 7.91012C13.3684 8.63917 13.631 10.307 12.685 11.3786L11.4215 12.8097ZM11.4215 12.8097L10.8593 13.4465C9.08001 15.4619 5.95251 15.5094 4.11279 13.5489L2.91922 12.277C0.698803 9.91091 0.6988 6.22674 2.91922 3.86061L3.31498 3.43888C5.70929 0.887446 9.65396 0.582394 12.4121 2.73538L13.3934 3.50145" stroke="white" stroke-width="1.5" stroke-linecap="round"/>    
      
    </svg>
  );
};


export default Search;


