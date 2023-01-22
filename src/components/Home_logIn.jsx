import React from 'react';
import styled from 'styled-components';

const Home_logIn = () => {
    return (
        <LogIn>
            <h1 className='title'>PetHouse</h1>
            <h2 className='sub-title'>El mejor lugar para tus mascotas</h2>
            <button className='button_home'>Tengo una mascota</button>
            <button className='button_home'>Soy veterinario</button>
            <button className='button_home about'>Sobre nosotros</button>
        </LogIn>
    );
};

export default Home_logIn;

const LogIn = styled.div`
width: 100%;
height: 100%;
padding: 20px;
text-align: center;

.title {
    font-size: 4rem;
    color: white;
    margin-top: 20px;
    margin-bottom: 40px;
}

.sub-title {
    color: white;
    font-size: 2rem;
    margin-bottom: 250px;
}

.button_home {
    display: block;
    margin: 30px auto;
    font-size: 1.4rem;
    font-weight: 600;
    width: 260px;
    height: 55px;
    padding: 5px;
    border-radius: 7px;
    border: none;
    background-color: #009623;
    color: white;
}
.about {
    margin-top: 100px;
    width: 220px;
    font-size: 1.2rem;
    background-color: #083ac5;
    color: white;
}
`