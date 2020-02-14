import React from 'react';
import Mobile from './layouts/mobile/Mobile'
import Desktop from './layouts/desktop/Desktop'
import useWindowSize from './hooks/useWindowWidth'

function App() {
  const windowSize = useWindowSize()
  return (
    <>
      {
        windowSize > 800 ? <Desktop /> : <Mobile />
      }
    </>
  )
}

export default App;
