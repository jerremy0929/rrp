import React from 'react'

const style404: React.CSSProperties = {
  fontSize: 72,
  fontWeight: 'bold',
}

const PageNotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Page Not Found</h1>
      <div style={style404}>404</div>
      <img
        src={require('../assets/Black_Hole_Orange.png')}
        alt="black hole orange"
      />
    </div>
  )
}

export default PageNotFound
