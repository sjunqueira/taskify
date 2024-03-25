// frontend/src/components/HeroSection.js

import React from 'react';
import { Box, Typography, Button, Container, Hidden } from '@mui/material';
import Image from 'next/image';
import { CaretRight } from '@phosphor-icons/react'
//import backgroundImage from '../assets/background.jpg'; // Importa a imagem de fundo
//import logo from '../assets/logo.png'; // Importa o logo

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(to right, rgba(75, 108, 183, 0.9), rgba(24, 40, 72, 0.9)))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        //color: '#000',
        //py: 10,
        textAlign: 'center',
      }}
    >
      {/* Barra de navegação */}
      <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Image src={'/taskify-bv.png'} width={100} height={24} alt="Logo" style={{ width: '100px' }} />
        <Button color="inherit" href='/login'>Login</Button>
      </Container>

      {/* Conteúdo da seção Hero */}
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '90vh',
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'left'
        
        }}>
        <Typography fontFamily="monospace" variant="h2" gutterBottom>
          Bem-vindo ao Taskify
        </Typography>
        <Typography  fontFamily="monospace" variant="body1" sx={{ mb: 4 }}>
          Gerencie suas tarefas de forma eficiente com o Taskify. Organize suas
          atividades, defina prazos e acompanhe seu progresso em um só lugar.
        </Typography>
        <Button sx={{
          gap: 1,
          pr: '0.5rem'
        }} variant="contained" href='/signup'>
          Começar
          <CaretRight size={20}/>
        </Button>
      </Container>

      {/* Depoimentos de clientes (simulado) */}
    </Box>
  );
};

export default HeroSection;
