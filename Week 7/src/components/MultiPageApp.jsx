import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'

/* ========== CBIT COLORS ========== */
const colors = {
  maroon: '#8B1538',
  maroonDark: '#6B1028',
  gold: '#D4AF37',
  dark: '#1a1a2e',
}

/* ========== NAVBAR ========== */
function Navbar() {
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav style={{
      background: `linear-gradient(135deg, ${colors.maroon} 0%, ${colors.maroonDark} 100%)`,
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '60px',
      boxShadow: '0 4px 20px rgba(139, 21, 56, 0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ color: 'white', fontWeight: 800, fontSize: '20px' }}>CBIT</span>
        <span style={{ color: colors.gold, fontSize: '11px', fontWeight: 400, lineHeight: 1.2 }}>
          Chaitanya Bharathi<br />Institute of Technology
        </span>
      </div>
      <div style={{ display: 'flex', gap: '4px' }}>
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              color: location.pathname === link.path ? colors.gold : 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
              padding: '8px 16px',
              borderRadius: '6px',
              background: location.pathname === link.path ? 'rgba(212,175,55,0.12)' : 'transparent',
              transition: 'all 0.2s ease',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

/* ========== FOOTER ========== */
function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: '#94a3b8',
      padding: '32px 32px 16px',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
        <div>
          <div style={{ color: colors.gold, fontWeight: 700, fontSize: '14px', marginBottom: '10px' }}>CBIT</div>
          <p style={{ fontSize: '13px', margin: '4px 0' }}>Chaitanya Bharathi Institute of Technology</p>
          <p style={{ fontSize: '13px', margin: '4px 0' }}>Empowering Minds, Engineering Futures</p>
        </div>
        <div>
          <div style={{ color: colors.gold, fontWeight: 700, fontSize: '14px', marginBottom: '10px' }}>Contact</div>
          <p style={{ fontSize: '13px', margin: '4px 0' }}>Gandipet, Hyderabad - 500075</p>
          <p style={{ fontSize: '13px', margin: '4px 0' }}>+91 40 2419 3276</p>
          <p style={{ fontSize: '13px', margin: '4px 0' }}>principal@cbit.ac.in</p>
        </div>
        <div>
          <div style={{ color: colors.gold, fontWeight: 700, fontSize: '14px', marginBottom: '10px' }}>Quick Links</div>
          {['Admissions', 'Placements', 'Research'].map(link => (
            <p key={link} style={{ fontSize: '13px', margin: '4px 0', cursor: 'pointer' }}>{link}</p>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '20px', paddingTop: '14px', textAlign: 'center', fontSize: '12px' }}>
        &copy; 2026 CBIT - Chaitanya Bharathi Institute of Technology | Built with React
      </div>
    </footer>
  )
}

/* ========== HOME PAGE ========== */
function Home() {
  const stats = [
    { num: '45+', label: 'Years of Excellence' },
    { num: '5000+', label: 'Students' },
    { num: '300+', label: 'Faculty Members' },
    { num: '95%', label: 'Placement Rate' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        background: `linear-gradient(rgba(139,21,56,0.6), rgba(107,16,40,0.7)), url('/CBIT front.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '100px 32px',
      }}>
        <h1 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '14px', textShadow: '2px 2px 6px rgba(0,0,0,0.4)' }}>
          Welcome to CBIT
        </h1>
        <p style={{ fontSize: '17px', maxWidth: '550px', margin: '0 auto', opacity: 0.95 }}>
          Excellence in Technical Education Since 1979 — Empowering Minds, Engineering Futures
        </p>
      </div>

      {/* Stats Bar */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.maroon} 0%, ${colors.maroonDark} 100%)`,
        color: 'white',
        padding: '40px 32px',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '24px' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 800, color: colors.gold }}>{s.num}</div>
              <div style={{ fontSize: '13px', opacity: 0.9 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Programs */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 32px' }}>
        <h3 style={{ textAlign: 'center', fontWeight: 700, color: colors.maroon, marginBottom: '8px' }}>Key Programs</h3>
        <p style={{ textAlign: 'center', color: '#6c757d', fontSize: '14px', marginBottom: '36px' }}>Our flagship engineering departments</p>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { icon: '💻', title: 'Computer Science & Engineering', desc: 'AI, Machine Learning, Web Development, Software Engineering, and cutting-edge technologies.', intake: 360 },
            { icon: '📡', title: 'Electronics & Communication', desc: 'VLSI Design, Embedded Systems, Communication Networks, and Signal Processing.', intake: 180 },
            { icon: '⚙️', title: 'Mechanical Engineering', desc: 'Thermal Engineering, Manufacturing, Robotics, and Automobile Engineering.', intake: 30 },
          ].map((prog, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '14px',
              padding: '30px 24px',
              flex: '1',
              minWidth: '240px',
              maxWidth: '280px',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              border: '1px solid #e9ecef',
              borderTop: `4px solid ${colors.maroon}`,
            }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{prog.icon}</div>
              <h5 style={{ fontWeight: 700, color: colors.maroon, marginBottom: '8px', fontSize: '16px' }}>{prog.title}</h5>
              <p style={{ color: '#6c757d', fontSize: '13px', lineHeight: 1.6 }}>{prog.desc}</p>
              <span style={{
                display: 'inline-block',
                padding: '4px 14px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 600,
                background: '#f8f9fa',
                color: '#495057',
                border: '1px solid #dee2e6',
              }}>Intake: {prog.intake}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ========== ABOUT PAGE ========== */
function About() {
  const departments = [
    'Computer Science & Engineering',
    'Information Technology',
    'Electronics & Communication',
    'Electrical & Electronics',
    'Mechanical Engineering',
    'Civil Engineering',
    'AI & Data Science',
    'Biotechnology',
  ]

  const facilities = [
    '20+ Modern Computer Labs',
    'Central Library (1,00,000+ Books)',
    'Sports Ground, Indoor Stadium & Gym',
    'Boys & Girls Hostel',
    'Cafeteria, Food Court & Canteen',
    'Campus-wide Wi-Fi',
    'Medical Center on Campus',
  ]

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '50px 32px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 700, color: colors.dark, marginBottom: '14px' }}>About CBIT</h2>
      <p style={{ color: '#495057', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
        Chaitanya Bharathi Institute of Technology (CBIT) was established in 1979 and is located at Gandipet,
        Hyderabad. It is an autonomous institution affiliated to Osmania University and approved by AICTE.
        The institution is accredited with NAAC A+ grade and multiple NBA accreditations.
      </p>
      <p style={{ color: '#495057', fontSize: '15px', lineHeight: 1.8, marginBottom: '32px' }}>
        CBIT offers 13 UG and PG departments with B.E., B.Tech, M.Tech and MBA programs, serving 5000+ students
        with 300+ faculty members across a modern 40+ acre campus.
      </p>

      {/* Departments */}
      <div style={{
        background: '#fdf2f4',
        border: `1px solid ${colors.maroon}30`,
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px',
      }}>
        <h4 style={{ fontSize: '15px', fontWeight: 700, color: colors.maroon, marginBottom: '14px' }}>Departments</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {departments.map((dept, i) => (
            <span key={i} style={{
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 500,
              background: 'white',
              color: colors.maroon,
              border: `1px solid ${colors.maroon}20`,
            }}>{dept}</span>
          ))}
        </div>
      </div>

      {/* Facilities */}
      <div style={{
        background: '#f0f7ff',
        border: '1px solid #bfdbfe',
        borderRadius: '12px',
        padding: '24px',
      }}>
        <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#1e40af', marginBottom: '14px' }}>Campus Facilities</h4>
        {facilities.map((fac, i) => (
          <div key={i} style={{
            padding: '8px 0',
            fontSize: '14px',
            color: '#334155',
            fontWeight: 500,
            borderBottom: i < facilities.length - 1 ? '1px solid #e2e8f0' : 'none',
          }}>
            {fac}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ========== COURSES PAGE ========== */
function Courses() {
  const programs = [
    { dept: 'Computer Science & Engineering', code: 'CSE', intake: 360, desc: 'AI, ML, Web Development, Software Engineering' },
    { dept: 'Information Technology', code: 'IT', intake: 180, desc: 'Cloud Computing, Networks, Cybersecurity' },
    { dept: 'Electronics & Communication', code: 'ECE', intake: 180, desc: 'VLSI, Embedded Systems, Signal Processing' },
    { dept: 'Electrical & Electronics', code: 'EEE', intake: 60, desc: 'Power Systems, Control Systems, IoT' },
    { dept: 'Mechanical Engineering', code: 'ME', intake: 30, desc: 'Thermal, Manufacturing, Robotics' },
    { dept: 'Civil Engineering', code: 'CE', intake: 60, desc: 'Structural, Environmental, Transportation' },
    { dept: 'AI & Data Science', code: 'AIDS', intake: 120, desc: 'Deep Learning, Big Data, Computer Vision' },
    { dept: 'Biotechnology', code: 'BT', intake: 60, desc: 'Genetic Engineering, Bioinformatics' },
  ]

  const deptColors = {
    CSE: { bg: '#e3f2fd', text: '#1565c0' },
    IT: { bg: '#e8f5e9', text: '#2e7d32' },
    ECE: { bg: '#fff3e0', text: '#e65100' },
    EEE: { bg: '#f3e5f5', text: '#7b1fa2' },
    ME: { bg: '#fce4ec', text: '#c62828' },
    CE: { bg: '#e0f7fa', text: '#00695c' },
    AIDS: { bg: '#ede7f6', text: '#4527a0' },
    BT: { bg: '#f1f8e9', text: '#558b2f' },
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '50px 32px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 700, color: colors.dark, marginBottom: '8px' }}>Course Offerings</h2>
      <p style={{ color: '#6c757d', fontSize: '14px', marginBottom: '32px' }}>
        {programs.length} departments across Engineering, Technology & Management
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {programs.map((prog, i) => {
          const c = deptColors[prog.code] || { bg: '#f5f5f5', text: '#333' }
          return (
            <div key={i} style={{
              background: 'white',
              borderRadius: '10px',
              padding: '18px 22px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              border: '1px solid #e9ecef',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <span style={{
                    padding: '3px 10px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 700,
                    background: c.bg,
                    color: c.text,
                  }}>{prog.code}</span>
                  <span style={{ fontWeight: 700, fontSize: '15px', color: colors.dark }}>{prog.dept}</span>
                </div>
                <p style={{ color: '#6c757d', fontSize: '13px', margin: 0 }}>{prog.desc}</p>
              </div>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#495057',
                background: '#f8f9fa',
                padding: '4px 14px',
                borderRadius: '20px',
                border: '1px solid #dee2e6',
                whiteSpace: 'nowrap',
              }}>
                Intake: {prog.intake}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ========== CONTACT PAGE ========== */
function Contact() {
  const contactItems = [
    { label: 'Address', value: 'Gandipet, Hyderabad - 500075, Telangana' },
    { label: 'Phone', value: '+91 40 2419 3276' },
    { label: 'Email', value: 'principal@cbit.ac.in' },
    { label: 'Website', value: 'www.cbit.ac.in' },
  ]

  const placementInfo = {
    rate: '95%',
    highest: '44 LPA',
    average: '8.5 LPA',
    recruiters: ['TCS', 'Infosys', 'Wipro', 'Amazon', 'Microsoft', 'Google', 'Deloitte'],
  }

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '50px 32px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 700, color: colors.dark, marginBottom: '24px' }}>Contact Us</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
        {contactItems.map((item, i) => (
          <div key={i} style={{
            background: 'white',
            borderRadius: '10px',
            padding: '16px 20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            border: '1px solid #e9ecef',
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#6c757d', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
              {item.label}
            </div>
            <div style={{ fontSize: '15px', fontWeight: 500, color: colors.dark }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Placement Highlights */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.maroon}, ${colors.maroonDark})`,
        borderRadius: '14px',
        padding: '28px',
        color: 'white',
      }}>
        <h4 style={{ fontWeight: 700, marginBottom: '16px', fontSize: '16px' }}>Placement Highlights</h4>
        <div style={{ display: 'flex', gap: '24px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: colors.gold }}>{placementInfo.rate}</div>
            <div style={{ fontSize: '12px', opacity: 0.8 }}>Placement Rate</div>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: colors.gold }}>{placementInfo.highest}</div>
            <div style={{ fontSize: '12px', opacity: 0.8 }}>Highest Package</div>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: colors.gold }}>{placementInfo.average}</div>
            <div style={{ fontSize: '12px', opacity: 0.8 }}>Average Package</div>
          </div>
        </div>
        <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '10px' }}>Top Recruiters</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {placementInfo.recruiters.map((r, i) => (
            <span key={i} style={{
              padding: '4px 12px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 600,
              background: 'rgba(255,255,255,0.15)',
              color: 'white',
            }}>{r}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ========== MAIN MULTI-PAGE APP ========== */
function MultiPageApp() {
  return (
    <BrowserRouter>
      <div style={{
        minHeight: '100vh',
        background: '#f8f9fa',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default MultiPageApp
