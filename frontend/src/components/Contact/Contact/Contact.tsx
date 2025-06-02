import React from "react";
import Text from "../Text/Text";
import styles from "./Contact.module.css"
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { AiFillInstagram } from "react-icons/ai"
import { MdEmail } from 'react-icons/md';

function Contact() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Text color="#f1f1f1" size="6vh" height="bold">Contato</Text>

                <Text color="#A8AFC1" size="2.5vh">
                    Entre em contato com a nossa equipe e <br/> 
                    tire suas duvidas conosco.
                </Text>

                <div className={styles.spacing}>
                    <a href="mailto:seuemail@exemplo.com" className="text-white-400 hover:text-white text-2xl transition-all duration-200"><MdEmail /></a>
                    <Text color="#A8AFC1" size="2.5vh">somniumorganizacional@gmail.com</Text>
                </div>

                <div className={styles.line}></div>

                <nav className="flex items-center row gap-4 mt-6 md:mt-0">
                    <a href="#" className="text-purple-400 hover:text-white text-2xl transition-all duration-200"><FaFacebook /></a>
                    <a href="#" className="text-purple-400 hover:text-white text-3xl transition-all duration-200"><AiFillInstagram /></a>
                    <a href="#" className="text-purple-400 hover:text-white text-2xl transition-all duration-200"><FaXTwitter /></a>
                </nav>

            </div>
            <div className={styles.divForm}>
                <div className={styles.alignmentText}>
                    <Text color="#fff" size="3.5vh" height="600">Fale</Text><Text isGradient size="3.5vh" height="600">Conosco</Text>
                </div>
                <form action="" className={styles.containerForm}>
                    
                    <input placeholder="Nome" type="text" className={styles.inputBasic}/>
                    
                    <input placeholder="Email" type="email" className={styles.inputBasic}/>

                    <textarea placeholder="Sua Mensagem..." className={styles.textarea}/>

                    <button className={styles.btn}>Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;