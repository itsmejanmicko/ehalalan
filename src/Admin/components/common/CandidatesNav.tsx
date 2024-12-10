
const CandidatesNav = ({
    label,
    selectedPosition,
    onSelectPosition,
  }: {
    label: string;
    selectedPosition: string;
    onSelectPosition: () => void;
  }) => {
    const isActive = selectedPosition === label;
  
    return (
      <button
        onClick={onSelectPosition}
        className={`${
          isActive ? 'bg-gradient-to-tr from-purple-600 to-pink-600 text-white' : 'text-white'
        } font-bold flex items-center space-x-2 hover:opacity-90`}
      >
        <span>{label}</span>
      </button>
    );
  };
  
  export default CandidatesNav;
