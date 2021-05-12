import React from 'react';

import { Container, Label } from './styles'

export default function Card(){
    return (
        <Container>
            <header>
                <Label color="#7159c1" />
            </header>
            <p>Fazer a imigração completa do Servidor</p>
            <img src="https://i.pinimg.com/564x/82/04/f5/8204f56fd44e3071fad7fff47f246766.jpg" alt="Avatar" />
        </Container>
    );
}