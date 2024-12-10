
const SectionNav = ({
  label,
  selectedGrade,
  onSelectGrade,
}: {
  label: string;
  selectedGrade: string;
  onSelectGrade: () => void;
}) => {
  const isActive = selectedGrade === label;

  return (
    <button
      onClick={onSelectGrade}
      className={`${
        isActive ? 'bg-gradient-to-tr from-purple-600 to-pink-600 text-white' : 'text-white'
      } font-bold flex items-center space-x-2 hover:opacity-90`}
    >
      <span>{label}</span>
    </button>
  );
};

export default SectionNav;
