import React, { useEffect, useRef, useState } from 'react';
interface BookNowProps {
  className?: string;
  children?: React.ReactNode;
  mobileUrl?: string;
}
export function BookNow({
  className,
  children = 'Book Now',
  mobileUrl
}: BookNowProps) {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint in Tailwind
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleBookingClick = () => {
    // Use mobileUrl on mobile if provided, otherwise use default
    const url = (isMobile && mobileUrl) ? mobileUrl : 'https://talent.booksy.com/';
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return <button className={className} onClick={handleBookingClick} type="button">
      {children}
    </button>;
}