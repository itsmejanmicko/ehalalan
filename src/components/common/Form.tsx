import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormField: React.FC<FormFieldProps> = ({ label, type, placeholder, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="mb-4">
      <label className="block text-primary/90 mb-2">{label}</label>
      <div className="relative">
        <input
          type={showPassword && type === 'password' ? 'text' : type}
          placeholder={placeholder}
          className="border border-[#23304c] p-2 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#23304c]"
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute right-2 top-2 text-[#23304c]"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
    </div>
  );
};
