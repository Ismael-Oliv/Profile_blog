import styles from "./styles.module.scss"

export function NoContent(){
    return (
        <div className={styles.container}>
            <h2>Nenhum conteúdo encontrado</h2>
        </div>
    )
}