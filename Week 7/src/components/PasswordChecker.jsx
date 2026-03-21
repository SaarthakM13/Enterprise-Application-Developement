import { useState } from 'react'

function PasswordChecker() {
  const [password, setPassword] = useState('')

  // Validation rules
  const rules = [
    { label: 'Minimum 8 characters', test: (pw) => pw.length >= 8 },
    { label: 'Uppercase letter (A-Z)', test: (pw) => /[A-Z]/.test(pw) },
    { label: 'Contains a number (0-9)', test: (pw) => /[0-9]/.test(pw) },
    { label: 'Special character (!@#$...)', test: (pw) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pw) },
  ]

  const passedCount = rules.filter(r => r.test(password)).length

  // Determine strength
  const getStrength = () => {
    if (password.length === 0) return { label: '', color: '#6c757d', width: '0%' }
    if (passedCount <= 1) return { label: 'Weak', color: '#ef4444', width: '25%' }
    if (passedCount <= 2) return { label: 'Fair', color: '#f59e0b', width: '50%' }
    if (passedCount <= 3) return { label: 'Medium', color: '#3b82f6', width: '75%' }
    return { label: 'Strong', color: '#22c55e', width: '100%' }
  }

  const strength = getStrength()

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8f9fa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '48px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        border: '1px solid #e9ecef',
        minWidth: '420px',
        maxWidth: '480px',
      }}>
        <h2 style={{ marginBottom: '8px', fontSize: '22px', fontWeight: 700, color: '#1a1a2e', textAlign: 'center' }}>
          Password Strength Checker
        </h2>
        <p style={{ color: '#6c757d', fontSize: '14px', marginBottom: '32px', textAlign: 'center' }}>
          Type a password to check its strength
        </p>

        {/* Password Input */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#495057', marginBottom: '6px' }}>
            Enter Password
          </label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type your password..."
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '15px',
              border: `2px solid ${password.length > 0 ? strength.color : '#dee2e6'}`,
              borderRadius: '8px',
              outline: 'none',
              transition: 'border-color 0.3s ease',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Strength Bar */}
        {password.length > 0 && (
          <>
            <div style={{
              height: '8px',
              background: '#e9ecef',
              borderRadius: '4px',
              marginBottom: '8px',
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                width: strength.width,
                background: strength.color,
                borderRadius: '4px',
                transition: 'all 0.4s ease',
              }} />
            </div>
            <p style={{
              fontSize: '14px',
              fontWeight: 700,
              color: strength.color,
              textAlign: 'right',
              marginBottom: '24px',
              transition: 'color 0.3s ease',
            }}>
              {strength.label}
            </p>
          </>
        )}

        {/* Validation Rules */}
        <div style={{ marginTop: password.length > 0 ? '0' : '24px' }}>
          <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>
            Requirements
          </h4>
          {rules.map((rule, index) => {
            const passed = password.length > 0 && rule.test(password)
            return (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 0',
                fontSize: '14px',
                color: passed ? '#22c55e' : '#6c757d',
                transition: 'color 0.3s ease',
              }}>
                <span style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: passed ? '#22c55e' : '#e9ecef',
                  color: passed ? 'white' : '#adb5bd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                }}>
                  {passed ? '\u2713' : ''}
                </span>
                <span style={{ fontWeight: passed ? 600 : 400 }}>
                  {rule.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PasswordChecker
