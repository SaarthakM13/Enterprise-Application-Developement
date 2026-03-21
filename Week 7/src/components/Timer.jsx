import { useState, useEffect, useRef } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [laps, setLaps] = useState([])
  const intervalRef = useRef(null)

  // useEffect to handle the timer interval
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000)
    }

    // Cleanup function to clear interval
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning])

  // Format seconds into MM:SS
  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60)
    const secs = totalSeconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const handleStart = () => setIsRunning(true)
  const handlePause = () => setIsRunning(false)

  const handleReset = () => {
    setIsRunning(false)
    setSeconds(0)
    setLaps([])
  }

  const handleLap = () => {
    setLaps(prev => [...prev, seconds])
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
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '48px',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        border: '1px solid #e9ecef',
        minWidth: '400px',
      }}>
        <h2 style={{ marginBottom: '8px', fontSize: '22px', fontWeight: 700, color: '#1a1a2e' }}>
          Stopwatch
        </h2>
        <p style={{ color: '#6c757d', fontSize: '14px', marginBottom: '32px' }}>
          Timer with Lap Feature
        </p>

        {/* Timer Display */}
        <div style={{
          fontSize: '64px',
          fontWeight: 800,
          color: isRunning ? '#22c55e' : '#1a1a2e',
          margin: '16px 0 36px',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
          transition: 'color 0.3s ease',
        }}>
          {formatTime(seconds)}
        </div>

        {/* Control Buttons */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
          {!isRunning ? (
            <button onClick={handleStart} style={btnStyle('#22c55e')}>
              Start
            </button>
          ) : (
            <button onClick={handlePause} style={btnStyle('#f59e0b')}>
              Pause
            </button>
          )}

          <button
            onClick={handleLap}
            disabled={!isRunning || seconds === 0}
            style={{
              ...btnStyle('#2563eb'),
              opacity: (!isRunning || seconds === 0) ? 0.4 : 1,
              cursor: (!isRunning || seconds === 0) ? 'not-allowed' : 'pointer',
            }}
          >
            Lap
          </button>

          <button onClick={handleReset} style={btnStyle('#ef4444')}>
            Reset
          </button>
        </div>

        {/* Lap List */}
        {laps.length > 0 && (
          <div style={{ marginTop: '16px', textAlign: 'left' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px', borderBottom: '2px solid #e9ecef', paddingBottom: '8px' }}>
              Lap Times
            </h4>
            <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
              {laps.map((lap, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  background: index % 2 === 0 ? '#f8f9fa' : 'white',
                  borderRadius: '6px',
                  marginBottom: '4px',
                  fontSize: '14px',
                }}>
                  <span style={{ fontWeight: 600, color: '#6c757d' }}>Lap {index + 1}</span>
                  <span style={{ fontWeight: 700, color: '#2563eb' }}>{formatTime(lap)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const btnStyle = (bg) => ({
  padding: '10px 24px',
  fontSize: '14px',
  fontWeight: 600,
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  background: bg,
  color: 'white',
  transition: 'all 0.2s ease',
  minWidth: '80px',
})

export default Timer
