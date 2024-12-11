import React, { useState } from 'react';
import { X } from 'lucide-react';
import { formValidation } from '../../../services/form';

export default function AddUser({ selectedGrade, closeModal }: {selectedGrade:string, closeModal: () => void }) {
  const [email, setEmail] = useState('');
  const [lrn, setLrn] = useState('');
  const [fullName, setFullName] = useState('');
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
     try {
        await formValidation.register(email, lrn, fullName, selectedGrade);
     } catch (error) {
        console.log(error);
     }
  };
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('File selected:', e.target.files?.[0]);
  };

  return (
    <div className="bg-primary rounded-lg shadow-xl w-full max-w-md">
      <div className="flex justify-between items-center p-6 border-b">
        <h2 className="text-xl font-semibold">Add Student</h2>
        <label 
              htmlFor="excel-upload"
              className="px-3 py-2 bg-[#1A1830] hover:bg-[#1A1830]/80 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              Add as Excel
              <input
                id="excel-upload"
                type="file"
                accept=".xlsx, .xls"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
        <button
          onClick={closeModal}
          className="p-2 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <X className="h-4 w-4" />
        </button>
        
      </div>
      <form onSubmit={handleSubmit} className="p-6 space-y-4 text-white">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium ">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="student@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border bg-gray-600 border-primary/90 rounded-md shadow-sm"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lrn" className="block text-sm font-medium">
            LRN
          </label>
          <input
            id="lrn"
            type="text"
            placeholder="123456789012"
            value={lrn}
            onChange={(e) => setLrn(e.target.value)}
            required
            className="w-full px-3 py-2 border bg-gray-600 border-primary/90 rounded-md shadow-sm"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Juan Dela Cruz"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full px-3 py-2 border bg-gray-600 border-primary/90 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#1A1830] text-white rounded hover:bg-[#1A1830]/70"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
