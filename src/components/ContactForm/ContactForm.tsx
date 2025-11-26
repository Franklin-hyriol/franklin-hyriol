"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const contactSchema = z.object({
  title: z.string().min(2, { message: "Le titre est obligatoire" }),
  email: z
    .string()
    .email({ message: "Veuillez entrer une adresse e-mail valide" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});

type ContactSchemaType = z.infer<typeof contactSchema>;

function ContactFormContent() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme && currentTheme.includes("visiontest-dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
  });

  const submitData = async (data: ContactSchemaType) => {
    if (!executeRecaptcha) {
      toast.error("Le service de vérification de Google n'est pas disponible. Veuillez réessayer plus tard.");
      return;
    }

    setIsLoading(true);
    const token = await executeRecaptcha("contactForm");

    const templateParams = {
      ...data,
      "g-recaptcha-response": token,
    };

    emailjs
      .send(
        import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setIsLoading(false);
          reset();
          toast.success("Votre message a été envoyé avec succès !");
        },
        (error) => {
          setIsLoading(false);
          toast.error("Une erreur est survenue lors de l'envoi du message.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <form
            onSubmit={handleSubmit(submitData)}
            className="flex flex-col gap-4"
          >
            <ScrollReveal>
              <div className="form-control">
                <label className="label block mb-2">
                  <span className="label-text font-medium">Titre</span>
                </label>
                <input
                  type="text"
                  placeholder="J'ai besoin de..."
                  className={`input input-bordered w-full ${
                    errors.title ? "input-error" : ""
                  }`}
                  {...register("title")}
                />
                {errors.title && (
                  <small className="text-error mt-1">
                    {errors.title.message}
                  </small>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="form-control">
                <label className="label block mb-2">
                  <span className="label-text font-medium">
                    Votre adresse e-mail (facultatif)
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="votre.email@example.com"
                  className={`input input-bordered w-full ${
                    errors.email ? "input-error" : ""
                  }`}
                  {...register("email")}
                />
                {errors.email && (
                  <small className="text-error mt-1">
                    {errors.email.message}
                  </small>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <div className="form-control">
                <label className="label block mb-2">
                  <span className="label-text font-medium">Message</span>
                </label>
                <textarea
                  className={`textarea textarea-bordered w-full min-h-46 ${
                    errors.message ? "textarea-error" : ""
                  }`}
                  placeholder="Votre message détaillé ici..."
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <small className="text-error mt-1">
                    {errors.message.message}
                  </small>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.55}>
              <div className="card-actions justify-end mt-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Envoyer le message"
                  )}
                </button>
              </div>
            </ScrollReveal>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        transition={Bounce}
      />
    </div>
  );
}

export default function ContactForm() {
  const recaptchaKey = import.meta.env.VITE_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!recaptchaKey) {
    console.error(
      "La clé de site de vérification de Google n'est pas définie dans les variables d'environnement."
    );
    // You might want to render a message to the user in this case
    return <p>Le formulaire de contact est actuellement indisponible.</p>;
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
      <ContactFormContent />
    </GoogleReCaptchaProvider>
  );
}

