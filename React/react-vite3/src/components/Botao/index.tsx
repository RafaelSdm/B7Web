
import styles from './styles.module.css';

export const Botao = () =>{
    return(
        <div className={styles.square}>
            <button className={styles.botao}>LEARN MORE</button>
            <p className={styles.legend}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure soluta consequuntur labore magni possimus, nemo at eaque assumenda, rem sequi totam perferendis, doloremque pariatur? Facere quae vitae dolorum excepturi!</p>
        </div>
    );
}