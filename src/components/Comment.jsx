import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
    return (
        
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Gabriel-Passoss.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Passos</strong>
                            <time title="12 de Setembro às 7:54" dateTime="2022-09-11 07:54:30">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Vitor, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}