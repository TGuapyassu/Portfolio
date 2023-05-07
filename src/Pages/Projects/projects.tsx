import styles from './Project.module.scss';

const Projects = () => {

    const Dados1 = [{
        title: "Gerador de Senha Online",
        desc: "Gerador online para criar uma senha forte e segura",
        photo: "https://raw.githubusercontent.com/TGuapyassu/PasswordGen/master/src/Assets/preview.png",
        link1: "https://password-gen-eta.vercel.app/",
        link2: "https://github.com/TGuapyassu/PasswordGen"
    },
    {
        title: "ToDo List",
        desc: "Todo List feito com React",
        photo: "https://github.com/TGuapyassu/TodoList/blob/master/src/assets/preview.png?raw=true",
        link1: "https://todo-list-sand-three.vercel.app/",
        link2: "https://github.com/TGuapyassu/TodoList"
    }, {
        title: "Ping Pong",
        desc: "Jogo Ping Pong feito com html e javaScript",
        photo: "https://raw.githubusercontent.com/TGuapyassu/PingPong/master/preview.png",
        link1: "https://ping-pong-self.vercel.app/",
        link2: "https://github.com/TGuapyassu/PingPong"
    }, {
        title: "Api GitHub",
        desc: "API do Github para pesquisar usuários",
        photo: "https://raw.githubusercontent.com/TGuapyassu/ApiGitHub/master/src/assets/imgs/preview.png",
        link1: "https://api-git-hub-sigma.vercel.app/",
        link2: "https://github.com/TGuapyassu/ApiGitHub"
    }]

    const Dados2 = [{
        title: "Game Zumbi",
        desc: "Jogo de Sobrevivência com zumbis feito na Unity",
        photo: "",
        NameButton: "Demo",
        link: "https://tguapyassu.itch.io/sobrevivencia"
    },
    {
        title: "Assistente Virtual",
        desc: "Assistente pessoal virtual que escuta os seus comandos de voz e executa-os",
        photo: "",
        NameButton: "Code",
        link: "https://github.com/TGuapyassu/AssistenteVirtual"
    },
    {
        title: "Flappy Bird",
        desc: "Clone do Jogo Flappy Bird com inteligencia artificial",
        photo: "https://raw.githubusercontent.com/TGuapyassu/FlappyBird/master/imgs/game.png",
        NameButton: "Code",
        link: "https://github.com/TGuapyassu/FlappyBird"
    }]

    return (
        <section className={styles.projects}>
            <h2 className={styles.title}>Projects</h2>
            <span className={styles.subtitle}>Most recent work</span>

            <div className={styles.container}>
                <ul className={styles.list}>
                    {Dados1.map((projet, index) => (
                        <li key={index}>
                            <div className={styles.post}>
                                <img height={"120px"}
                                    src={projet.photo}
                                    alt='imagem do projeto'
                                />
                                <h2 className={styles.title_project}>{projet.title}</h2>
                                <p className={styles.desc_project}>{projet.desc}</p>
                                <div className={styles.class_button}>
                                    <a className={styles.button}
                                        href={projet.link1}
                                        target='_blank'
                                        rel="noreferrer"
                                    >
                                        Demo
                                    </a>
                                    <a className={styles.button}
                                        href={projet.link2}
                                        target='_blank'
                                        rel="noreferrer"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                    {Dados2.map((projet, index) => (
                        <li key={index}>
                            <div className={styles.post}>
                                <img height={"120px"}
                                    src={projet.photo}
                                    alt='imagem do projeto'
                                />
                                <h2 className={styles.title_project}>{projet.title}</h2>
                                <p className={styles.desc_project}>{projet.desc}</p>
                                <div className={styles.class_button}>
                                    <a className={styles.button}
                                        href={projet.link}
                                        target='_blank'
                                        rel="noreferrer"
                                    >
                                        {projet.NameButton}
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects