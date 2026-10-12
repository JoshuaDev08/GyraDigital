import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import logoAsset from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#stats" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        inset-x-0
        top-0
        z-50
        w-full
        border-b
        border-base-content/10
        bg-base-100/85
        backdrop-blur-md
      "
    >
      <nav
        className="
          mx-auto
          flex
          min-h-16
          max-w-7xl
          items-center
          justify-between
          px-4
          py-3
          sm:px-6
          lg:px-8
        "
      >
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ opacity: 0.8 }}
          transition={{ duration: 0.2 }}
          className="
            flex
            shrink-0
            items-center
            gap-2
            sm:gap-3
          "
        >
          <img
            src={logoAsset}
            alt="GYRA Digital"
            className="
              h-8
              w-auto
              object-contain
              sm:h-9
              md:h-10
            "
          />

          <span
            className="
              font-mono
              text-xs
              font-medium
              tracking-[0.18em]
              text-base-content
              sm:text-sm
              sm:tracking-[0.2em]
            "
          >
            GYRA
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link, index) => (
            <motion.li
              key={link.label}
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.15 + index * 0.08,
              }}
            >
              <motion.a
                href={link.href}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="
                  relative
                  font-mono
                  text-xs
                  uppercase
                  tracking-widest
                  text-base-content/50
                  transition-colors
                  duration-300
                  hover:text-base-content
                "
              >
                {link.label}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-px
                    w-0
                    bg-base-content
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <motion.a
          href="#contact"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="
            btn
            btn-outline
            hidden
            h-10
            min-h-10
            rounded-none
            border-base-content
            bg-transparent
            px-5
            font-mono
            text-xs
            font-normal
            uppercase
            tracking-widest
            text-base-content
            hover:border-base-content
            hover:bg-base-content
            hover:text-base-100
            lg:inline-flex
          "
        >
          Start a project
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="
            btn
            btn-square
            btn-ghost
            h-10
            min-h-10
            w-10
            rounded-none
            border
            border-base-content/10
            text-base-content
            hover:border-base-content/30
            hover:bg-base-200
            lg:hidden
          "
        >
          {isOpen ? (
            <X size={20} strokeWidth={1.6} />
          ) : (
            <Menu size={20} strokeWidth={1.6} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              overflow-hidden
              border-t
              border-base-content/10
              bg-base-100
              lg:hidden
            "
          >
            <div
              className="
                mx-auto
                flex
                max-w-7xl
                flex-col
                px-4
                pb-5
                pt-2
                sm:px-6
                lg:px-8
              "
            >
              <div className="flex flex-col">
                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={handleMobileLinkClick}
                    initial={{
                      opacity: 0,
                      x: -12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    className="
                      border-b
                      border-base-content/10
                      py-4
                      font-mono
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-base-content/60
                      transition-colors
                      hover:text-base-content
                    "
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#contact"
                onClick={handleMobileLinkClick}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  btn
                  btn-primary
                  mt-5
                  h-11
                  min-h-11
                  w-full
                  rounded-none
                  font-mono
                  text-xs
                  font-normal
                  uppercase
                  tracking-widest
                "
              >
                Start a project
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
