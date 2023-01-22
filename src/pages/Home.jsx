import React from 'react';
import styled from 'styled-components';
import video from '../assets/video.mp4'
import Home_logIn from '../components/Home_logIn';

const Home = () => {
    return (

        <ContainerHome>
            <video src={video} autoPlay={true} muted={true} loop={true} >
            </video>
            <Home_logIn/>
        </ContainerHome>

    );
};

export default Home;


const ContainerHome = styled.div`
width: 100vw;
height: 100vh;
display: flex;

video {
    position: fixed;
    min-height: 100%;
    min-width: 100%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: -1;
}
`

