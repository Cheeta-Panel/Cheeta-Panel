import react from 'react';
import styled from "styled-components";
import {ToastContainer, toast, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Button.css'


export default function Console() {

    const notify = () => toast.error('API Error', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
    });

        return (
            <>
                <HomePage>
                    <Cube>
                        <Title>Console</Title>
                        <Desc>Manage and interact with your service and issue commands here.</Desc>
                        <ConsoleManager>

                        </ConsoleManager>
                        <button onClick={notify}>Start</button>
                        <ToastContainer theme="#0E0D1B" />
                    </Cube>
                </HomePage>
            </>
        )
}


const HomePage = styled.div`
  display: block;
  margin-top: 1000px;
`

const Cube = styled.div`
  background-color: #282847;
  padding: 10rem;
  --tw-bg-opacity: 1;
  border-radius: 0.5rem;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  text-align: center;
  bottom: 100px;
  width: 30%;
  right: 150px;
  position: absolute;
  height: 350px;

  @media screen and (max-width: 768px) {
    width: 85%;
  }
`


const ConsoleManager = styled.div`
  background-color: #0E0D1B;
  padding: 10rem;
  --tw-bg-opacity: 1;
  border-radius: 0.5rem;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  text-align: center;
  bottom: 100px;
  width: 66%;
  right: 25px;
  position: absolute;
  height: 80px;


  @media screen and (max-width: 768px) {
    width: 85%;
  }
`

const Title = styled.h2`
  color: rgba(255, 255, 255, 0.5);
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-top: -120px;
  text-align: start;
`

const Desc = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 4%;
  text-align: start;
`