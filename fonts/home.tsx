import React from 'react';

interface HomeProps {
  color: string;
  size: number;
  className?: string;
}

const Home: React.FC<HomeProps> = ({ color, size, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`cursor-pointer hover:opacity-70 transition ${className}`}
    >
      <path
        d="M0.880859 16.1017V8.6186C0.880859 8.04709 1.12536 7.50288 1.55264 7.12333L7.75777 1.61146C8.51539 0.938493 9.65659 0.938494 10.4142 1.61146L16.2091 6.75891C16.6364 7.13846 16.8809 7.68267 16.8809 8.25418V14.1017C16.8809 15.2063 15.9854 16.1017 14.8809 16.1017H7.61283C6.87764 16.1017 6.18626 15.6881 6.10612 14.9573C5.94947 13.5288 6.40246 11.6081 8.26548 11.6081C11.5596 11.6081 12.6456 15.013 11.7044 19.4316" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export default Home;
