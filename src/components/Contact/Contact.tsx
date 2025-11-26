import ContactForm from "../ContactForm/ContactForm";

function Contact() {
  return (
    <section id="contact" className="pt-15 pb-5 md:pt-10 md:pb-10">
      <div className="main-container">
        <h2 className="text-center text-4xl font-semibold mb-10">
          Me contacter
        </h2>

        <div className="text-lg text-center w-full lg:w-[80%] mx-auto flex flex-col gap-5 mb-10 lg:mb-20">
          <p>
            Chaque message compte et j’adore découvrir de nouveaux projets.
            N’hésitez pas à me contacter, je vous répondrai dès que possible.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
