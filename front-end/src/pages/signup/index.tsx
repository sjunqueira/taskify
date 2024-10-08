import React from 'react';
import { Box, Typography, Button, Container, Hidden, TextField, Switch, FormGroup, FormControlLabel, Link } from '@mui/material';
import Image from 'next/image';
import styles from "@/styles/Home.module.css";
import { CaretRight } from '@phosphor-icons/react'

import { IBM_Plex_Mono } from "next/font/google";


const ibmplexmono = IBM_Plex_Mono({ subsets: ["latin"], weight: '300' });

export default function Login() {
    return (
      <main className={`${styles.main} ${ibmplexmono.className}`}>
      <Box
      sx={{
        //background: `linear-gradient(to right, rgba(75, 108, 183, 0.9), rgba(24, 40, 72, 0.9)))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        //color: '#000',
        //py: 10,
        textAlign: 'center',
      }}
    >
      {/* Barra de navegação */}
      <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100vh' }}>
        <Image src={'/taskify-bv.png'} width={100} height={24} alt="Logo" style={{ width: '100px' }} />
        <Button color="inherit" href='/login'>Login</Button>
      </Container>

      {/* Conteúdo da seção Hero */}
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '90vh',
        maxWidth: '20vh',
        justifyContent: 'center',
        gap: 2
        
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}>
            <TextField id="fullWidth" label="Nome" variant="outlined" />
            <TextField id="outlined-basic" label="Sobrenome" variant="outlined" />
            <TextField id="outlined-basic" label="Email" type='email' variant="outlined" />
            <TextField id="outlined-basic" label="Senha" type='password' variant="outlined" autoComplete="current-password"/>

            
            <FormGroup>
              <FormControlLabel required control={<Switch defaultChecked />} label="Declaro que li e concordo com termos de uso" />
              <FormControlLabel control={<Switch defaultChecked />} label="Aceito receber notificações do aplicativo" />
          </FormGroup>
          </Box>
        <Button disabled variant="contained" href='/signup'>
          Cadastrar
        </Button>
        <Link href='/login' underline="none">Já possui conta? Faça o login</Link>

      </Container>

      {/* Depoimentos de clientes (simulado) */}
    </Box>
    </main>
    );
  }
  