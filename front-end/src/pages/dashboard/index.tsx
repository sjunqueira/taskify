import React, { useState } from 'react';
import { Box, Typography, Button, Container, Hidden, TextField, Switch, FormGroup, FormControlLabel, Link, Checkbox } from '@mui/material';
import Image from 'next/image';
import styles from "@/styles/Home.module.css";
import { CaretRight } from '@phosphor-icons/react'

import { IBM_Plex_Mono } from "next/font/google";



const ibmplexmono = IBM_Plex_Mono({ subsets: ["latin"], weight: '300' });

export default function Login() {
  const [tarefas, setTarefas] = useState([
    { texto: 'Ir à academia por 1 hora', concluida: false },
    { texto: 'Ler 50 páginas do livro "X"', concluida: false },
    { texto: 'Fazer compras de supermercado', concluida: false },
    { texto: 'Ligar para o dentista e marcar consulta', concluida: false },
    { texto: 'Enviar e-mails pendentes', concluida: false },
    { texto: 'Preparar relatório para reunião', concluida: false },
    { texto: 'Assistir ao webinar sobre produtividade', concluida: false },
    { texto: 'Limpar o armário da cozinha', concluida: false },
    { texto: 'Agendar encontro com amigos', concluida: false },
    { texto: 'Pagar contas de água e luz', concluida: false },
    { texto: 'Fazer backup dos arquivos importantes', concluida: false },
    { texto: 'Estudar por 1 hora', concluida: false },
    { texto: 'Assistir a um episódio da série "X"', concluida: false },
    { texto: 'Resolver quebra-cabeça', concluida: false },
    { texto: 'Aprender uma nova receita de culinária', concluida: false },
    { texto: 'Fazer uma caminhada de 30 minutos', concluida: false },
    { texto: 'Revisar anotações de estudo', concluida: false },
    { texto: 'Praticar meditação por 15 minutos', concluida: false },
    { texto: 'Fazer uma lista de compras', concluida: false },
    { texto: 'Escrever no diário por 20 minutos', concluida: false },
    { texto: 'Assistir a um tutorial online', concluida: false },
    { texto: 'Organizar documentos no computador', concluida: false },
    { texto: 'Planejar viagem de férias', concluida: false },
    { texto: 'Pesquisar sobre um assunto de interesse', concluida: false },
    { texto: 'Conversar com um familiar por telefone', concluida: false },
    { texto: 'Praticar exercícios de alongamento', concluida: false },
    { texto: 'Assistir a um documentário', concluida: false },
    { texto: 'Desenhar ou pintar por 30 minutos', concluida: false },
    { texto: 'Fazer uma lista de metas para o mês', concluida: false },
    { texto: 'Resolver problema de matemática', concluida: false },
    { texto: 'Aprender uma palavra nova em um idioma estrangeiro', concluida: false },
  ]);
  

    const toggleConcluida = index => {
      const newTarefas = [...tarefas];
      newTarefas[index].concluida = !newTarefas[index].concluida;
      setTarefas(newTarefas);
    };

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
            <TextField id="outlined-basic" type='text' variant="standard" />
            <Box sx={{height: '40vh'}}>
            {tarefas.map((tarefa, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                onClick={() => toggleConcluida(index)}
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
          ))}
          </Box>

          </Box>

      </Container>

      {/* Depoimentos de clientes (simulado) */}
    </Box>
    </main>
    );
  }
  