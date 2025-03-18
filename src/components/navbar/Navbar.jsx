import { useContext, useState } from "react";
import { IsMobileContext } from "../../utilis/IsMobileContext";
import { motion } from "framer-motion";


export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false);

  const { isMobile } = useContext(IsMobileContext);
  const links = [
    { id: 1, link: "Home", isActive: true },
    { id: 2, link: "about" },
    { id: 3, link: "Movies" },
    { id: 4, link: "contact" },
  ];
  return (
    <nav>
      <div className="logo">
        <motion.img initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }} src="/src/assets/image/logo.png" alt="" />
      </div>
      {!isMobile && (
        <>
          <div className="menu">
            <ul>
              {links.map((link, index) => (
                <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}
                  key={index}
                  className={link.isActive ? "active" : ""}
                  href="#"
                >
                  {link.link}
                </motion.a>
              ))}
            </ul>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }} className="btn">
            <button>Get Started</button>
          </motion.div>
        </>
      )}
      {isMobile && (
        <>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }} className="bar" onClick={() => setActiveMenu(!activeMenu)}>
            <div></div>
            <div></div>
          </motion.div>
          <div className={`mobile_menu ${activeMenu ? "active" : ""}`}>
            <ul>
              {links.map((link, index) => (
                <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}
                  key={index}
                  className={link.isActive ? "active" : ""}
                  href="#"
                >
                  {link.link}
                </motion.a>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
