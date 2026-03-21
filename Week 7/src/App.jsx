import { useState } from 'react'
import Counter from './components/Counter'
import Timer from './components/Timer'
import PasswordChecker from './components/PasswordChecker'
import StudentTable from './components/StudentTable'
import MultiPageApp from './components/MultiPageApp'

const experiments = [
  { id: 1, title: 'Smart Counter', desc: 'useState + Theme Toggle', component: Counter },
  { id: 2, title: 'Stopwatch', desc: 'useEffect + setInterval', component: Timer },
  { id: 3, title: 'Password Checker', desc: 'Form Validation', component: PasswordChecker },
  { id: 4, title: 'Student Table', desc: 'Search + Pagination', component: StudentTable },
  { id: 5, title: 'Multi-Page App', desc: 'React Router', component: MultiPageApp },
]

function App() {
  const [activeExp, setActiveExp] = useState(null)

  // Render the selected experiment directly
  if (activeExp !== null) {
    const ActiveComponent = experiments[activeExp].component
    return (
      <div>
        <button
          onClick={() => setActiveExp(null)}
          style={{
            position: 'fixed',
            top: '16px',
            left: '16px',
            zIndex: 9999,
            padding: '8px 18px',
            fontSize: '13px',
            fontWeight: 600,
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            background: '#1a1a2e',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        >
          Back to Menu
        </button>
        <ActiveComponent />
      </div>
    )
  }

  // Experiment selector (landing page)
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
      <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#1a1a2e', marginBottom: '8px' }}>
        Week 7 — React Lab
      </h1>
      <p style={{ color: '#6c757d', fontSize: '14px', marginBottom: '40px' }}>
        Select an experiment to run
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        maxWidth: '720px',
        width: '100%',
      }}>
        {experiments.map((exp, idx) => (
          <button
            key={exp.id}
            onClick={() => setActiveExp(idx)}
            style={{
              background: 'white',
              border: '1px solid #e9ecef',
              borderRadius: '12px',
              padding: '28px 20px',
              cursor: 'pointer',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)'
            }}
          >
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: '#2563eb',
              marginBottom: '8px',
            }}>
              Experiment {exp.id}
            </div>
            <div style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#1a1a2e',
              marginBottom: '4px',
            }}>
              {exp.title}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#6c757d',
              fontWeight: 500,
            }}>
              {exp.desc}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
