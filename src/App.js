import './App.css';

import Console from './pages/Console.jsx'
import Wave from 'react-wavify';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
        <>

      <Console/>

        <WaveContainer>
            <Wave
                fill="#282847"
                paused={false}
                style={{height: 250}}
                options={{
                    height: 50,
                    amplitude: 45,
                    speed: 0.15,
                    points: 4
                }}
            />
        </WaveContainer>
            </>
    </div>
  );
}

export default App;

const WaveContainer = styled.div`
  transform: scaleX(-1);
  bottom: 0;
  width: 100%;
  left: 0;
  position: absolute;
  height: 0;
`;
