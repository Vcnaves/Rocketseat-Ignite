import { Comment } from './Comment';
import styles from './Post.module.css';
import { Avatar } from './Avatar'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/Vcnaves.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Vitor Naves</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time title="12 de Setembro às 7:54" dateTime="2022-09-11 07:54:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare</p>
                <p>👉<a href=''> {' '}Vitor.design/doctorcare</a></p>
                <p> 
                    <a href=''>#novoprojeto</a>{' '}
                    <a href=''>#nlw</a>{' '}
                    <a href=''>#rocketseat</a>{' '}
                </p>
            </div>


            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="Submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );  
}