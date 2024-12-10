import React from 'react';

export default function Footer() {
  return (
    <footer className=" bottom-0 left-0 w-full text-white">
      <div className="max-w-screen-lg mx-auto border-t-2 border-gray-600 p-4 flex justify-center items-center flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-64">
        {/* Left Section */}
        <div className="text-center sm:text-left">
          © 2022 Ehalalan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
