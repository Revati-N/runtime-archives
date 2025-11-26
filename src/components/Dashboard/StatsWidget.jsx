import CyberCard from '../UI/CyberCard';

const StatsWidget = ({ icon: Icon, label, value, color = 'cyan' }) => {
  const colorVariants = {
    cyan: 'text-cyber-cyan-300',
    purple: 'text-cyber-purple-300',
    pink: 'text-cyber-pink-300'
  };

  return (
    <CyberCard glowColor={color} className="flex items-center space-x-4">
      <div className={`p-3 rounded-lg bg-${color === 'cyan' ? 'cyber-cyan' : color === 'purple' ? 'cyber-purple' : 'cyber-pink'}-300/10`}>
        <Icon className={colorVariants[color]} size={32} />
      </div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className={`text-3xl font-bold ${colorVariants[color]}`}>{value}</p>
      </div>
    </CyberCard>
  );
};

export default StatsWidget;