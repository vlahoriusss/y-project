



// Home.tsx

import React from 'react';
import { IconType } from 'react-icons/lib';

interface ProfileProps {
  onClick: () => void;
  color: string;
  size: number;
  className?: string;
}

const Profile: React.FC<ProfileProps> = ({ onClick, color, size }) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer hover:opacity-70 transition"
    >
<path d="M1 13.1V12.126C1 9.77827 2.61707 7.73983 4.90323 7.2057L6.52609 6.82653C7.86172 6.51448 8.80645 5.32357 8.80645 3.95198V3.26551C8.80645 2.0143 7.79215 1 6.54094 1C5.28974 1 4.27543 2.0143 4.27543 3.26551V3.95512C4.27543 5.32559 5.21768 6.51623 6.55148 6.83116L8.13772 7.2057C10.4011 7.74011 12 9.76054 12 12.0861V13.1" stroke="white" stroke-linecap="round"/>

    </svg>
  );
};


export default Profile;



<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_397_71)">
<path d="M1 13.1V12.126C1 9.77827 2.61707 7.73983 4.90323 7.2057L6.52609 6.82653C7.86172 6.51448 8.80645 5.32357 8.80645 3.95198V3.26551C8.80645 2.0143 7.79215 1 6.54094 1C5.28974 1 4.27543 2.0143 4.27543 3.26551V3.95512C4.27543 5.32559 5.21768 6.51623 6.55148 6.83116L8.13772 7.2057C10.4011 7.74011 12 9.76054 12 12.0861V13.1" stroke="white" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_397_71">
<rect width="13" height="14" fill="white"/>
</clipPath>
</defs>
</svg>
