import React from 'react';

interface DislikeProps {
  size: number;
  disliked: boolean;
}

const Dislike: React.FC<DislikeProps> = ({ size, disliked }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer hover:opacity-70 transition"
    >
      <path
d="M11.3356 7.89408L10.1467 14.3038C10.0255 14.9575 9.45524 15.4316 8.79046 15.4316V15.4316C8.1746 15.4316 7.63335 15.0234 7.46416 14.4312L6.97646 12.7242C6.90939 12.4895 6.7999 12.269 6.65341 12.0737L4.85 9.66914C4.47229 9.16553 3.87951 8.86914 3.25 8.86914H3.1875C2.08293 8.86914 1.1875 7.97371 1.1875 6.86914V4.13014C1.1875 3.29645 1.70465 2.55021 2.48525 2.25748L4.34792 1.55898C4.57248 1.47477 4.81034 1.43164 5.05017 1.43164H10.8889C11.6465 1.43164 12.339 1.85964 12.6778 2.53721L14.6467 6.47508C14.9781 7.13793 14.9066 7.93114 14.462 8.52402V8.52402C14.0925 9.01669 13.5126 9.30664 12.8967 9.30664H9.63694C8.07568 9.30664 7.31526 7.39999 8.448 6.32555V6.32555C9.66219 5.17386 11.6408 6.24863 11.3356 7.89408Z"        fill={disliked ? 'white' : 'none'}
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Dislike;

