const CyberButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-cyber-cyan-300 text-cyber-dark hover:bg-cyber-cyan-200 glow-cyan',
    secondary: 'bg-cyber-purple-300 text-white hover:bg-cyber-purple-200 glow-purple',
    outline: 'bg-transparent border border-cyber-cyan-300 text-cyber-cyan-300 hover:bg-cyber-cyan-300 hover:text-cyber-dark',
    ghost: 'bg-transparent text-cyber-cyan-300 hover:bg-cyber-cyan-300/10'
  };

  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 rounded font-semibold
        transition-all duration-300
        transform hover:scale-105 active:scale-95
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default CyberButton;