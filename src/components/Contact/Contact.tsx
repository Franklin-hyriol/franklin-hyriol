import ContactForm from "../ContactForm/ContactForm";

function Contact() {
  return (
    <section className="pt-20 pb-20">
      <div className="main-container">
        <h2 className="text-center text-4xl font-semibold mb-10">
          Me contacter
        </h2>

        <div className="text-lg text-center w-[80%] mx-auto flex flex-col gap-5 mb-20">
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
