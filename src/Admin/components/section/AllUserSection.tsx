import React from 'react';
import SectionNav from '../common/SectionNav';
import { gradeYear } from '../../../constants/section';

export default function AllUserSection() {
  const [selectedGrade, setSelectedGrade] = React.useState('Grade 7');
  const tableData = [
    { no: 1, grade: 'Grade 7', email: 'student1@example.com', name: 'John Doe' },
    { no: 2, grade: 'Grade 8', email: 'student2@example.com', name: 'Jane Smith' },
    { no: 3, grade: 'Grade 9', email: 'student3@example.com', name: 'Alice Johnson' },
    { no: 4, grade: 'Grade 10', email: 'student4@example.com', name: 'Robert Brown' },
    { no: 5, grade: 'Grade 11', email: 'student5@example.com', name: 'Emily Davis' },
    { no: 6, grade: 'Grade 12', email: 'student6@example.com', name: 'Michael Wilson' },
    // Duplicates
    { no: 7, grade: 'Grade 7', email: 'student1@example.com', name: 'John Doe' },
    { no: 8, grade: 'Grade 8', email: 'student2@example.com', name: 'Jane Smith' },
    { no: 9, grade: 'Grade 9', email: 'student3@example.com', name: 'Alice Johnson' },
    { no: 10, grade: 'Grade 10', email: 'student4@example.com', name: 'Robert Brown' },
    { no: 11, grade: 'Grade 11', email: 'student5@example.com', name: 'Emily Davis' },
    { no: 12, grade: 'Grade 12', email: 'student6@example.com', name: 'Michael Wilson' },
  ];
  

  return (
    <main className="h-screen bg-[#1A1830] text-white">
      <nav className="flex space-x-2 px-8 p-4">
        {gradeYear.map((grade, index) => (
          <React.Fragment key={index}>
            <SectionNav
              label={grade.grade}
              selectedGrade={selectedGrade}
              onSelectGrade={() => setSelectedGrade(grade.grade)}
            />
            {index < gradeYear.length - 1 && (
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
              <tbody>
                {tableData.filter((data)=>data.grade===selectedGrade).map((row, index)=>(
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
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
