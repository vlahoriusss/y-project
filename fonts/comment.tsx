
// Home.tsx

import React from 'react';
import { IconType } from 'react-icons/lib';

interface CommentProps {
  size: number;
}

const Comment: React.FC<CommentProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer hover:opacity-70 transition"
    >
<path d="M5.55301 9.8178V14.5566V14.5566C5.55301 15.3273 6.43416 15.766 7.0491 15.3014L10.5749 12.6379C10.94 12.3621 11.3851 12.2129 11.8427 12.2129H15.0842C16.2458 12.2129 17.1875 11.2712 17.1875 10.1096V5.17555C17.1875 4.01394 16.2458 3.07227 15.0842 3.07227H3.74149C2.57772 3.07227 1.65354 4.05108 1.72031 5.21293L1.72343 5.26721C1.78324 6.30796 2.64465 7.1213 3.68713 7.1213V7.1213C4.77344 7.1213 5.67964 6.23451 5.55133 5.1558C5.10833 1.43164 3.28865 1.43164 1.1875 1.43164" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
      
    </svg>
  );
};


export default Comment;






