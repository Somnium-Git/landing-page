import React from "react";
import Text from "../Text/Text";
import styles from "./Contact.module.css";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Button from "../Button/Button";
import Swal from "sweetalert2";

function Contact() {
  const newStyleCommon = {
    width: "100%",
    height: "50px",
    backgroundColor: "#333333",
    color: "#FFFFFF",
    fontWeight: "bold",
    letterSpacing: "1px",
    borderRadius: "25px",
    cursor: "pointer",
  };

  const newStyleHover = {
    ...newStyleCommon,
    backgroundColor: "#111111",
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const name = (form[0] as HTMLInputElement).value;
    const email = (form[1] as HTMLInputElement).value;
    const message = (form[2] as HTMLInputElement).value;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    });

    const swalOptions = {
      background: "#040013",
      color: "#fff",
      confirmButtonColor: "#C77DFF", // roxo, ajuste se quiser outra cor
      iconColor: "#C77DFF",
    };

    if (res.ok) {
      Swal.fire({
        icon: "success",
        title: "Mensagem enviada!",
        text: "Mensagem enviada com sucesso!",
        ...swalOptions,
      });
      form.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Erro ao enviar a mensagem. Tente novamente mais tarde.",
        ...swalOptions,
      });
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className="responsivo w-full mb-2 text-center lg:text-left">
          <Text color="#f1f1f1" size="2.5em" height="bold">
            Contato
          </Text>
        </div>

        <div className="px-2 text-center lg:text-justify">
          <Text color="#A8AFC1" size="1.25em">
            Entre em contato com a nossa equipe e <br />
            tire suas duvidas conosco.
          </Text>
        </div>

        <div className={styles.spacing}>
          <a
            href="mailto:somniumorganizacional@gmail.com"
            className="flex flex-wrap items-center gap-2.5"
          >
            <div className="text-white text-3xl">
              <MdEmail />
            </div>
            <Text color="#A8AFC1" size="1.125em">
              somniumorganizacional@gmail.com
            </Text>
          </a>
        </div>

        <div className={styles.line}></div>

        <nav className="w-full flex items-center row gap-4 md:mt-0 justify-center lg:justify-start">
          <a
            href="#"
            className="text-purple-400 hover:text-white text-3xl transition-all duration-200"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-purple-400 hover:text-white text-4xl transition-all duration-200"
          >
            <AiFillInstagram />
          </a>
          <a
            href="#"
            className="text-purple-400 hover:text-white text-3xl transition-all duration-200"
          >
            <FaXTwitter />
          </a>
        </nav>
      </div>

      <div className={styles.divForm}>
        <div className={styles.alignmentText}>
          <Text color="#fff" size="2em" height="bold">
            Fale
          </Text>
          <Text isGradient size="2em" height="bold">
            Conosco
          </Text>
        </div>

        <form
          action=""
          className={styles.containerForm}
          onSubmit={handleSubmit}
        >
          <input placeholder="Nome" type="text" className={styles.inputBasic} />

          <input
            placeholder="Email"
            type="email"
            className={styles.inputBasic}
          />

          <textarea placeholder="Sua Mensagem..." className={styles.textarea} />

          <Button
            text="Enviar"
            styleCommon={newStyleCommon}
            styleHover={newStyleHover}
          ></Button>

          {/* <button className={styles.btn} type="submit">
            Enviar
          </button> */}
        </form>
      </div>
    </section>
  );
}

export default Contact;
