import React, { useState } from 'react';
import { Box, Typography, Button, Container, Hidden, TextField, Switch, FormGroup, FormControlLabel, Link, Checkbox, IconButton } from '@mui/material';
import Image from 'next/image';
import styles from "@/styles/Home.module.css";
import { CaretRight, Trash } from '@phosphor-icons/react'

import { IBM_Plex_Mono } from "next/font/google";



const ibmplexmono = IBM_Plex_Mono({ subsets: ["latin"], weight: '300' });

export default function Login() {
  const [tarefas, setTarefas] = useState([
  
  ]);
  

  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([{ id: Date.now(), texto: novaTarefa, concluida: false }, ...tarefas]);
      setNovaTarefa('');
    }
  };

  const toggleConcluida = id => {
    const tarefaIndex = tarefas.findIndex(tarefa => tarefa.id === id);
    if (tarefaIndex !== -1) {
      const tarefaAtualizada = { ...tarefas[tarefaIndex], concluida: !tarefas[tarefaIndex].concluida };
      const novasTarefas = [...tarefas.slice(0, tarefaIndex), tarefaAtualizada, ...tarefas.slice(tarefaIndex + 1)];
      const tarefasConcluidas = novasTarefas.filter(tarefa => tarefa.concluida);
      const tarefasNaoConcluidas = novasTarefas.filter(tarefa => !tarefa.concluida);
      setTarefas([...tarefasNaoConcluidas, ...tarefasConcluidas]);
    }
  };
  const excluirTarefa = id => {
    const novaListaTarefas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(novaListaTarefas);
  };

  const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida);
  const tarefasNaoConcluidas = tarefas.filter(tarefa => !tarefa.concluida);

  // Concatenar tarefas não concluídas antes das tarefas concluídas
  const tarefasOrdenadas = [...tarefasNaoConcluidas, ...tarefasConcluidas];


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
        <a href='/'>
        <Image src={'/taskify-bv.png'} width={100} height={24} alt="Logo" style={{ width: '100px' }}  href='/'/>
        </a>
        <Button color="inherit" href='/'>Sair</Button>
      </Container>

      {/* Conteúdo da seção Hero */}
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '90vh',
        maxWidth: '20vh',
 
        gap: 3
        
        }}>
          <Typography 
            sx={{
              
              mt: '3rem'
            }} fontFamily="monospace" variant="h5" gutterBottom>
          Comece a adicionar tarefas
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            textAlign: 'left',
            height: '40vh'
          }}>
            <TextField
            id="outlined-basic"
            type='text'
            variant="standard"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                adicionarTarefa();
              }
            }}
          />
           <Button onClick={adicionarTarefa}>Adicionar Tarefa</Button>
            <Box sx={{height: '40vh'}}>
            {tarefasOrdenadas.map((tarefa) => (
          <Box key={tarefa.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                onClick={() => toggleConcluida(tarefa.id)}
                color={tarefa.concluida ? 'default' : 'primary'}
              >
                {tarefa.concluida ? '✔️' : 'Marcar como concluída'}
              </Checkbox>
              <Typography
                style={{
                  textDecoration: tarefa.concluida ? 'line-through' : 'none',
                  flexGrow: 1,
                }}
              >
                {tarefa.texto}
              </Typography>
            </Box>
            <IconButton aria-label="delete" onClick={() => excluirTarefa(tarefa.id)}>
              <Trash />
            </IconButton>
          </Box>
        ))}
          </Box>

          </Box>

      </Container>
    </Box>
    </main>
    );
  }
  