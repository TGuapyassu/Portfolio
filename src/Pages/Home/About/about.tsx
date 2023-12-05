import styles from './About.module.scss';
import Image from 'Assets/about.png';
import { BsDownload } from 'react-icons/bs';

const About = () => {
    return (
        <section className={styles.about}>
            <h2>About Me</h2>
            <span>My introduction</span>
            <div>
                <div className={styles.data}>
                    <img height="200px" src={Image} alt="" />
                    <div className={styles.description}>
                        <p>
                            Estudante de Engenharia da Computação. Apaixonado por entender o funcionamento das tecnologias e seus processos,
                            sempre busco me atualizar em relação às últimas tendências e tecnologias.
                            Possuo uma grande sede de aprendizado e estou sempre em busca de oportunidades para me desenvolver na área.
                            <br /> <br />
                            Computer Engineering student. Passionate about understanding how technologies and their processes work,
                            I always seek to update myself regarding the latest trends and technologies.
                            I have a great thirst for learning and I am always looking for opportunities to develop myself in the field.
                        </p>
                        <a href='https://1drv.ms/b/s!As5BrTKg5a8tgog8AXKsiL7UKl08-w?e=sgEtXP' target="__blank" className={styles.button}>
                            Download CV <BsDownload />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;