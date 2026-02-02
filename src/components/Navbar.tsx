import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto px-4 py-3 flex gap-4">
        <NavButton to="/" label="Home" />
        <NavButton to="/about" label="About" />
        <NavButton to="/contact" label="Contact" />
      </div>
    </nav>
  );
};

export default Navbar;