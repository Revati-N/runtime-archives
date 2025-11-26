const CyberCard = ({ 
  children, 
  className = '', 
  glowColor = 'cyan',
  scanline = true 
}) => {
  const glowVariants = {
    cyan: 'hover:shadow-[0_0_20px_rgba(0,243,237,0.3)]',
    purple: 'hover:shadow-[0_0_20px_rgba(155,48,255,0.3)]',
    pink: 'hover:shadow-[0_0_20px_rgba(255,20,147,0.3)]'
  };

  return (
    <div 
      className={`
        bg-cyber-dark border border-cyber-blue-700
        rounded-lg p-6 
        transition-all duration-300
        ${glowVariants[glowColor]}
        ${scanline ? 'scanline' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default CyberCard;