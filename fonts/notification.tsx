// Home.tsx

import React from 'react';
import { IconType } from 'react-icons/lib';

interface NotificationProps {
  onClick: () => void;
  color: string;
  size: number;
  className?: string;
}

const Notification: React.FC<NotificationProps> = ({ onClick, color, size }) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer hover:opacity-70 transition"
    >
<path d="M11.0237 15.4335C11.0237 15.4335 12.0003 17.8382 11.0237 19.0595C9.71929 20.6909 8.04243 20.6912 6.738 19.0599C5.76142 17.8386 6.738 15.4338 6.738 15.4338M11.0237 15.4335L6.738 15.4338M11.0237 15.4335H15.1285C15.8201 15.4335 16.3809 14.8728 16.3809 14.1811V14.1811V9.02193V8.78321C16.3809 4.64107 13.023 1.2832 8.88086 1.2832V1.2832C4.73872 1.2832 1.38086 4.64107 1.38086 8.78321V9.02193V14.1811V14.1811C1.38086 14.8728 1.94157 15.4335 2.63327 15.4336L6.738 15.4338M11.0237 15.4335C11.0237 15.2975 11.0237 11.7864 7.80943 11.7864" stroke="white" stroke-width="1.5" stroke-linecap="round"/>

    </svg>
  );
};


export default Notification;

