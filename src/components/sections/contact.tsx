import { useState } from "react";
import { Phone, Mail, Linkedin, Send, Github } from "lucide-react";
import Section from "@/components/ui/section";
import SectionTitle from "@/components/ui/section-title";
import { useTranslation } from "react-i18next";
import Reveal from "@/components/ui/reveal";

const CONTACT_EMAIL = "lkgiovani.dev@gmail.com";

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-background/50 border border-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

const socialLinks = [
  { Icon: Github, likes: "https://github.com/lkgiovani" },
  { Icon: Linkedin, likes: "https://www.linkedin.com/in/lkgiovani/" },
  { Icon: Mail, likes: `mailto:${CONTACT_EMAIL}` },
  {
    Icon: Phone,
    likes: "https://wa.me/5561984806923?text=Olá,%20gostaria%20de%20solicitar%20uma%20cotação.%20Poderia%20me%20passar%20mais%20informações?",
  },
];

export default function Contact() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    subject: "",
    email: "",
    message: "",
  });
  const [mailAppOpened, setMailAppOpened] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  // Sem back-end de envio: abre o app de e-mail do visitante com a mensagem pronta.
  // O formulário não é limpo, para o visitante não perder o texto se o app não abrir.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, phone, subject, email, message } = formState;
    const body = [
      message,
      "",
      "--",
      `${firstName} ${lastName}`.trim(),
      email,
      phone,
      t("contact.form.signature"),
    ]
      .filter((line, index) => index < 3 || line)
      .join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailAppOpened(true);
  };

  return (
    <Section id="contact">
      <Reveal>
        <SectionTitle>{t("contact.title")}</SectionTitle>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <Reveal direction="right" className="flex flex-col gap-4">
          <div className="w-full h-40 relative">
            <img
              src="./go.png"
              alt={t("contact.logoAlt")}
              className="w-full h-full object-cover mb-6"
            />
          </div>
          <div className="flex justify-center w-full gap-6">
            {socialLinks.map((Icon, index) => (
              <a
                key={index}
                href={Icon.likes}
                className="w-10 h-10 rounded-full border border-primary/80 flex items-center justify-center hover:bg-foreground/20 transition-colors text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal direction="left" delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                placeholder={t("contact.form.firstName")}
                className={inputClass}
                required
              />
              <input
                type="text"
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
                placeholder={t("contact.form.lastName")}
                className={inputClass}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder={t("contact.form.phone")}
                className={inputClass}
              />
              <input
                type="text"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder={t("contact.form.subject")}
                className={inputClass}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder={t("contact.form.email")}
              className={inputClass}
              required
            />
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder={t("contact.form.message")}
              rows={6}
              className={`${inputClass} resize-none`}
              required
            />

            {mailAppOpened && (
              <p role="status" className="text-sm px-3 py-2 rounded bg-primary/10 text-foreground">
                {t("contact.form.openedMessage", { email: CONTACT_EMAIL })}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {t("contact.form.submit")}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
