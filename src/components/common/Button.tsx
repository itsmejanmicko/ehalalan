import CircularProgress from "@mui/material/CircularProgress";
interface ButtonProps {
  type: "submit" | "reset" | "button";
  label: string;
  disabled?: boolean;
  loading?: boolean; 
}

export const Button = ({ type, label, disabled, loading }: ButtonProps) => {
  return (
    <div className="relative w-full ">
      <button
        type={type}
        disabled={disabled}
        className={`w-full p-3 mt-1 bg-primary text-white font-semibold rounded-md hover:bg-primary/80 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? <span className="opacity-0">{label}</span> : label}
      </button>
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center">
          <CircularProgress size={24} color="secondary" />
        </div>
      )}
    </div>
  );
};