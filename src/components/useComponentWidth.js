import { useState, useRef, useEffect } from 'react';

// Custom hook to track component width and invoke a callback
const useComponentWidth = (onWidthChange) => {
  const [width, setWidth] = useState(0);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (componentRef.current) {
        const newWidth = componentRef.current.offsetWidth;
        setWidth(newWidth);
        if (onWidthChange) {
          onWidthChange(newWidth); // Invoke the callback
        }
      }
    };

    // Attach resize listener
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial width

    // Clean up listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onWidthChange]);

  return { width, ref: componentRef };
};

export default useComponentWidth;