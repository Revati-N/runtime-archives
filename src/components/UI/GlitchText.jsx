import { useState, useEffect } from 'react';

const GlitchText = ({ children, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={isGlitching ? 'animate-glitch' : ''}>
        {children}
      </span>
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 text-cyber-cyan-300 opacity-70"
            style={{ transform: 'translate(-2px, 0)' }}
          >
            {children}
          </span>
          <span 
            className="absolute top-0 left-0 text-cyber-pink-300 opacity-70"
            style={{ transform: 'translate(2px, 0)' }}
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;