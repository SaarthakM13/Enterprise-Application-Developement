import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(false)

  const theme = {
    background: isDark ? '#1a1a2e' : '#ffffff',
    color: isDark ? '#e0e0e0' : '#1a1a2e',
    card: isDark ? '#16213e' : '#f8f9fa',
    border: isDark ? '#2a2a4a' : '#dee2e6',
    accent: isDark ? '#4fc3f7' : '#2563eb',
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: theme.background,
      color: theme.color,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.4s ease',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div style={{
        background: theme.card,
        border: `1px solid ${theme.border}`,
        borderRadius: '16px',
        padding: '48px 56px',
        textAlign: 'center',
        boxShadow: isDark
          ? '0 8px 32px rgba(0,0,0,0.4)'
          : '0 8px 32px rgba(0,0,0,0.08)',
        transition: 'all 0.4s ease',
        minWidth: '360px',
      }}>
        <h2 style={{ marginBottom: '8px', fontSize: '22px', fontWeight: 700 }}>
          Smart Counter
        </h2>
        <p style={{ color: isDark ? '#94a3b8' : '#6c757d', fontSize: '14px', marginBottom: '32px' }}>
          Theme: {isDark ? 'Dark Mode' : 'Light Mode'}
        </p>

        {/* Counter Display */}
        <div style={{
          fontSize: '72px',
          fontWeight: 800,
          color: theme.accent,
          margin: '16px 0 36px',
          lineHeight: 1,
        }}>
          {count}
        </div>

        {/* Counter Buttons */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '24px' }}>
          <button
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
            style={{
              padding: '10px 24px',
              fontSize: '16px',
              fontWeight: 600,
              border: 'none',
              borderRadius: '8px',
              cursor: count === 0 ? 'not-allowed' : 'pointer',
              background: count === 0 ? (isDark ? '#2a2a4a' : '#e9ecef') : '#ef4444',
              color: count === 0 ? (isDark ? '#555' : '#adb5bd') : 'white',
              transition: 'all 0.2s ease',
            }}
          >
            - Decrement
          </button>

          <button
            onClick={() => setCount(0)}
            style={{
              padding: '10px 24px',
              fontSize: '16px',
              fontWeight: 600,
              border: `2px solid ${theme.border}`,
              borderRadius: '8px',
              cursor: 'pointer',
              background: 'transparent',
              color: theme.color,
              transition: 'all 0.2s ease',
            }}
          >
            Reset
          </button>

          <button
            onClick={() => setCount(count + 1)}
            style={{
              padding: '10px 24px',
              fontSize: '16px',
              fontWeight: 600,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              background: '#22c55e',
              color: 'white',
              transition: 'all 0.2s ease',
            }}
          >
            + Increment
          </button>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          style={{
            padding: '10px 32px',
            fontSize: '14px',
            fontWeight: 600,
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            background: theme.accent,
            color: 'white',
            transition: 'all 0.2s ease',
          }}
        >
          {isDark ? 'Switch to Light' : 'Switch to Dark'}
        </button>
      </div>
    </div>
  )
}

export default Counter
