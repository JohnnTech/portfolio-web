import "./Contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com/channel/"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>Prof. John Dev</span>
          </h2>
        </a>

        <a
          href="https://wa.link/"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+55 </span>
          </h2>
        </a>

        <a href="#" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>profjohn.dev</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
