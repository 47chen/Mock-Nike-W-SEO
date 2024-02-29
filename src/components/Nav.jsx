import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  console.log(navLinks);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-slate-gray text-lg hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburgerList" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
