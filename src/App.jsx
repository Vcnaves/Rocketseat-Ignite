import { Header } from './components/header';
import { Post } from './components/Post'
import { Sidebar } from './components/sidebar';
import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/Vcnaves.png',
      name: 'Vitor Naves',
      role: 'Front-End dev'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
      { type: 'link', content: 'Vitor.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },

  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/Vcnaves.png',
      name: 'Vitor Naves',
      role: 'Front-End dev'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
      { type: 'link', content: 'Vitor.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
];


export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post 
                author="Vitor Naves"
                content="Sou esfarelado mental"
            />
            <Post 
                author="Gabriel Passos"
                content="Sou Gay"
            /> 
          </main>
      </div>
    </div>

  );
}


