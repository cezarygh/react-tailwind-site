const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-6 text-center text-sm">
        © {new Date().getFullYear()} My React Website
      </div>
    </footer>
  );
};

export default Footer;