import React from 'react'

const imgStyle: React.CSSProperties = {
  width: 500,
  marginTop: 50,
  textAlign: 'center',
}

const Home = () => {
  return (
    <img
      style={imgStyle}
      src={require('../assets/codelife.png')}
      alt="codelife"
    />
  )
}

export default Home
