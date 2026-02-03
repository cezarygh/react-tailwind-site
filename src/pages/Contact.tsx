import ContactAccordion from "@/components/modules/ContactAccordion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-gray-900 px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Contact Me
      </h2>

      <ContactAccordion />
    </div>
  );
};

export default Contact;