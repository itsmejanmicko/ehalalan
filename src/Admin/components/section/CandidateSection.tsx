import React from 'react';
import SectionNav from '../common/SectionNav';


export default function CandidateSection() {
  const [selectedPosition, setSelectedPosition] = React.useState('President');
  const position = [
    'President',
    'Vice President',
    'Secretary',
    'Treasurer',
    'Auditor',
    'Public Relations Officer',
    'Peace Officer',
    'Sergeant-at-Arms',
    'Sports Coordinator',
    'Muse',
  ];
  


  return (
    <main className="h-screen bg-[#1A1830] text-white">
      <nav className="flex space-x-2 px-8 p-4">
        {position.map((pos, index) => (
          <React.Fragment key={index}>
            <SectionNav
              label={pos}
              selectedGrade={selectedPosition}
              onSelectGrade={() => setSelectedPosition(pos)}
            />
            {index < position.length - 1 && (
              <span className="font-bold text-white text-2xl mx-6">/</span>
            )}
          </React.Fragment>
        ))}
      </nav>
      <section>
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-600 bg-[#292641] rounded-lg text-sm">
              <thead>
                <tr className="bg-[#1F1D36] text-left text-gray-300">
                  <th className="px-4 py-2 border-b border-gray-600">No</th>
                  <th className="px-4 py-2 border-b border-gray-600">Email</th>
                  <th className="px-4 py-2 border-b border-gray-600">Name</th>
                  <th className="px-4 py-2 border-b border-gray-600 text-center">
                    <button className="bg-[#4C3575] text-white px-4 py-1 rounded hover:bg-[#6B4CAF] transition">
                      Add
                    </button>
                  </th>
                </tr>
              </thead>
              {/* <tbody>
                {position.filter((data)=>data.grade===selectedGrade).map((row, index)=>(
                   <tr
                   key={row.no}
                   className="hover:bg-[#393658] transition-colors"
                 >
                   <td className="px-4 py-2 border-b border-gray-600">{index+1}</td>
                   <td className="px-4 py-2 border-b border-gray-600">{row.email}</td>
                   <td className="px-4 py-2 border-b border-gray-600">{row.name}</td>
                   <td className="px-4 py-2 border-b border-gray-600 text-center space-x-2">
                     <button className="bg-[#4C3575] text-white px-3 py-1 rounded hover:bg-[#6B4CAF] transition">
                       Edit
                     </button>
                     <button className="bg-red-800 text-white px-3 py-1 rounded hover:bg-[#6B4CAF] transition">
                       Delete
                     </button>
                   </td>
                 </tr>
                ))}
              </tbody> */}
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
