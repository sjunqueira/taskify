import Head from "next/head";
import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeroSection from "@/components/HeroSection";

const ibmplexmono = IBM_Plex_Mono({ subsets: ["latin"], weight: '300' });

export default function Home() {
  return (
    <>
      <Head>
        <title>Taskify - Tarefas sem distrações</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${ibmplexmono.className}`}>
        <HeroSection></HeroSection>
      </main>
    </>
  );
}
