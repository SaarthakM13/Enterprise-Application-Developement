import { useState } from 'react'

// IT-2 Class Student Data
const studentData = [
  { id: 1, name: 'Annanya Reddy Kuchikulla', roll: '1601-24-737-071', dept: 'IT' },
  { id: 2, name: 'Azmeera Sreelekha', roll: '1601-24-737-072', dept: 'IT' },
  { id: 3, name: 'Bapanapally Akshara', roll: '1601-24-737-073', dept: 'IT' },
  { id: 4, name: 'Bhukya Bhavitha', roll: '1601-24-737-074', dept: 'IT' },
  { id: 5, name: 'Challa Pramoda', roll: '1601-24-737-075', dept: 'IT' },
  { id: 6, name: 'Dharavath Nageswari', roll: '1601-24-737-076', dept: 'IT' },
  { id: 7, name: 'Dudapaka Ravali', roll: '1601-24-737-077', dept: 'IT' },
  { id: 8, name: 'Jangala Mohini', roll: '1601-24-737-078', dept: 'IT' },
  { id: 9, name: 'Jannu Shiny', roll: '1601-24-737-079', dept: 'IT' },
  { id: 10, name: 'Karnala Deeksha Reddy', roll: '1601-24-737-080', dept: 'IT' },
  { id: 11, name: 'Katta Akshitha', roll: '1601-24-737-081', dept: 'IT' },
  { id: 12, name: 'Kotireddy Tejitha', roll: '1601-24-737-082', dept: 'IT' },
  { id: 13, name: 'Kuppala Lakshmi Sirisha', roll: '1601-24-737-083', dept: 'IT' },
  { id: 14, name: 'Kusuma Snithika', roll: '1601-24-737-084', dept: 'IT' },
  { id: 15, name: 'Manne Bhanu Rithvika', roll: '1601-24-737-085', dept: 'IT' },
  { id: 16, name: 'Masna Hansika', roll: '1601-24-737-086', dept: 'IT' },
  { id: 17, name: 'P. Sadhika', roll: '1601-24-737-087', dept: 'IT' },
  { id: 18, name: 'R. Brindha Sri', roll: '1601-24-737-088', dept: 'IT' },
  { id: 19, name: 'Rajula Ganga Samhitha', roll: '1601-24-737-089', dept: 'IT' },
  { id: 20, name: 'Rompally Bhavani Reddy', roll: '1601-24-737-090', dept: 'IT' },
  { id: 21, name: 'Tadi Siri Reddy', roll: '1601-24-737-091', dept: 'IT' },
  { id: 22, name: 'Tuniki Srujana', roll: '1601-24-737-092', dept: 'IT' },
  { id: 23, name: 'Vainavi Venkat', roll: '1601-24-737-093', dept: 'IT' },
  { id: 24, name: 'Vanneladas Vaishnavi', roll: '1601-24-737-094', dept: 'IT' },
  { id: 25, name: 'Vimmadisetty Naga Sai Thanmai', roll: '1601-24-737-095', dept: 'IT' },
  { id: 26, name: 'A Rithwik Bhushan', roll: '1601-24-737-096', dept: 'IT' },
  { id: 27, name: 'Abhinav Regilla', roll: '1601-24-737-097', dept: 'IT' },
  { id: 28, name: 'Addagudi Sathvik', roll: '1601-24-737-098', dept: 'IT' },
  { id: 29, name: 'Alla Koushik Reddy', roll: '1601-24-737-099', dept: 'IT' },
  { id: 30, name: 'Baddam Vathan Reddy', roll: '1601-24-737-100', dept: 'IT' },
  { id: 31, name: 'Bhimireddy Jaswanth Reddy', roll: '1601-24-737-101', dept: 'IT' },
  { id: 32, name: 'C Chetann Reddy', roll: '1601-24-737-102', dept: 'IT' },
  { id: 33, name: 'Ganisetti Jaswanth Sai Kumar', roll: '1601-24-737-105', dept: 'IT' },
  { id: 34, name: 'Jakkoju Vikranth', roll: '1601-24-737-106', dept: 'IT' },
  { id: 35, name: 'Jakkula Ayush Preetham', roll: '1601-24-737-107', dept: 'IT' },
  { id: 36, name: 'Jatavath Raja', roll: '1601-24-737-108', dept: 'IT' },
  { id: 37, name: 'Jinaka Manoj Kumar', roll: '1601-24-737-109', dept: 'IT' },
  { id: 38, name: 'K R Sreeman', roll: '1601-24-737-110', dept: 'IT' },
  { id: 39, name: 'K Vamshi Chandra Reddy', roll: '1601-24-737-111', dept: 'IT' },
  { id: 40, name: 'Karampuri Vishnu Teja', roll: '1601-24-737-112', dept: 'IT' },
  { id: 41, name: 'Katuri Aravind Kumar', roll: '1601-24-737-113', dept: 'IT' },
  { id: 42, name: 'Konne Balraju', roll: '1601-24-737-114', dept: 'IT' },
  { id: 43, name: 'Lingala Revanth Reddy', roll: '1601-24-737-115', dept: 'IT' },
  { id: 44, name: 'Manish Shaw', roll: '1601-24-737-116', dept: 'IT' },
  { id: 45, name: 'Mavuru Sai Kushal', roll: '1601-24-737-117', dept: 'IT' },
  { id: 46, name: 'Mekala Anudeep', roll: '1601-24-737-118', dept: 'IT' },
  { id: 47, name: 'Mohammed Abdul Raqeeb', roll: '1601-24-737-119', dept: 'IT' },
  { id: 48, name: 'Nagila Goutham', roll: '1601-24-737-120', dept: 'IT' },
  { id: 49, name: 'Nalla Adhitya', roll: '1601-24-737-121', dept: 'IT' },
  { id: 50, name: 'Nalla Saikiran', roll: '1601-24-737-122', dept: 'IT' },
  { id: 51, name: 'Nenavath Naveen', roll: '1601-24-737-123', dept: 'IT' },
  { id: 52, name: 'Nirupuri Sri Krishna', roll: '1601-24-737-124', dept: 'IT' },
  { id: 53, name: 'Padigela Srujan', roll: '1601-24-737-125', dept: 'IT' },
  { id: 54, name: 'Pattaparla Rajeshwar Goud', roll: '1601-24-737-126', dept: 'IT' },
  { id: 55, name: 'Pendyala Jayanth', roll: '1601-24-737-127', dept: 'IT' },
  { id: 56, name: 'Reddigari Shashivardhan Reddy', roll: '1601-24-737-128', dept: 'IT' },
  { id: 57, name: 'Saarthak Manocha', roll: '1601-24-737-129', dept: 'IT' },
  { id: 58, name: 'Sanku Madhu', roll: '1601-24-737-130', dept: 'IT' },
  { id: 59, name: 'Sura Shriram', roll: '1601-24-737-131', dept: 'IT' },
  { id: 60, name: 'Thati Vignesh', roll: '1601-24-737-132', dept: 'IT' },
  { id: 61, name: 'Tirumala Thanvith', roll: '1601-24-737-133', dept: 'IT' },
  { id: 62, name: 'Velpula Abhilash', roll: '1601-24-737-134', dept: 'IT' },
  { id: 63, name: 'Yeswa Preetam Reddy', roll: '1601-24-737-135', dept: 'IT' },
]

const ROWS_PER_PAGE = 5

function StudentTable() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Filter students by name
  const filteredStudents = studentData.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Pagination logic
  const totalPages = Math.ceil(filteredStudents.length / ROWS_PER_PAGE)
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE
  const paginatedStudents = filteredStudents.slice(startIndex, startIndex + ROWS_PER_PAGE)

  // Reset to page 1 when search changes
  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8f9fa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: '40px 20px',
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        border: '1px solid #e9ecef',
        width: '100%',
        maxWidth: '720px',
      }}>
        <h2 style={{ marginBottom: '8px', fontSize: '22px', fontWeight: 700, color: '#1a1a2e' }}>
          IT-2 Student Directory
        </h2>
        <p style={{ color: '#6c757d', fontSize: '14px', marginBottom: '24px' }}>
          {filteredStudents.length} of {studentData.length} students
        </p>

        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by name..."
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '14px',
            border: '2px solid #dee2e6',
            borderRadius: '8px',
            outline: 'none',
            marginBottom: '24px',
            boxSizing: 'border-box',
          }}
        />

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '14px',
          }}>
            <thead>
              <tr>
                {['#', 'Name', 'Roll Number', 'Dept'].map(header => (
                  <th key={header} style={{
                    padding: '12px 14px',
                    textAlign: 'left',
                    fontWeight: 700,
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    color: 'white',
                    background: '#2c3e50',
                    borderBottom: '2px solid #1a252f',
                  }}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedStudents.length > 0 ? paginatedStudents.map((student, idx) => (
                <tr key={student.id} style={{
                  background: idx % 2 === 0 ? '#ffffff' : '#f8f9fa',
                }}>
                  <td style={cellStyle}>{startIndex + idx + 1}</td>
                  <td style={{ ...cellStyle, fontWeight: 600 }}>{student.name}</td>
                  <td style={cellStyle}>{student.roll}</td>
                  <td style={cellStyle}>
                    <span style={{
                      padding: '3px 10px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: 600,
                      background: '#e8f5e9',
                      color: '#2e7d32',
                    }}>
                      {student.dept}
                    </span>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} style={{ ...cellStyle, textAlign: 'center', color: '#6c757d', padding: '32px' }}>
                    No students found matching "{searchQuery}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px',
            padding: '12px 0',
          }}>
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              style={pageBtnStyle(currentPage === 1)}
            >
              Previous
            </button>

            <span style={{ fontSize: '14px', color: '#6c757d', fontWeight: 600 }}>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              style={pageBtnStyle(currentPage === totalPages)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

const cellStyle = {
  padding: '10px 14px',
  borderBottom: '1px solid #e9ecef',
}

const pageBtnStyle = (disabled) => ({
  padding: '8px 20px',
  fontSize: '14px',
  fontWeight: 600,
  border: '2px solid #dee2e6',
  borderRadius: '8px',
  cursor: disabled ? 'not-allowed' : 'pointer',
  background: disabled ? '#f8f9fa' : 'white',
  color: disabled ? '#adb5bd' : '#1a1a2e',
  transition: 'all 0.2s ease',
})

export default StudentTable
