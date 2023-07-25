import { Header } from "./components/Header"
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/TryCatchLearn.png',
      name: 'Neil Cummings',
      role: 'CTO TryCatchLearn'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto! 🚀' },
      { type: 'link', content: 'https://github.com/TryCatchLearn/Carsties' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/bhrugen.png',
      name: 'Bhrugen Patel',
      role: 'Educator dotnetmastery.com'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto! 🚀' },
      { type: 'link', content: 'https://github.com/TryCatchLearn/Carsties' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
