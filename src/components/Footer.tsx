import { motion } from "framer-motion";
import { Camera, Monitor, Server } from "lucide-react";
import logoAsset from "../assets/Logo.png";

function Footer() {
  return (
    <footer
      className="
        border-t
        border-base-content/10
        bg-base-100
        px-4
        py-8
        text-base-content
        sm:px-6
        md:py-10
        lg:px-8
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 16,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-6
          text-center
          md:flex-row
          md:text-left
        "
      >
        {/* Brand */}
        <motion.a
          href="#home"
          whileHover={{
            opacity: 0.75,
          }}
          className="flex items-center gap-3"
        >
          <img src={logoAsset} alt="GYRA Digital" className="h-8 w-auto" />

          <span
            className="
              font-mono
              text-[10px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-base-content
              sm:text-xs
            "
          >
            GYRA Digital
          </span>
        </motion.a>

        {/* Copyright */}
        <p
          className="
            font-mono
            text-[9px]
            uppercase
            leading-5
            tracking-[0.18em]
            text-base-content/40
            sm:text-[10px]
          "
        >
          © {new Date().getFullYear()} GYRA Digital.
          <span className="hidden sm:inline"> All rights reserved.</span>
        </p>

        {/* Capabilities */}
        <div className="flex items-center gap-2">
          {[
            { icon: Camera, label: "Media" },
            { icon: Monitor, label: "Digital" },
            { icon: Server, label: "Systems" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                whileHover={{
                  y: -2,
                }}
                className="
                  tooltip
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-base-content/10
                  bg-base-200
                  transition-colors
                  hover:border-base-content/30
                  hover:bg-base-300
                "
                data-tip={item.label}
              >
                <Icon
                  size={15}
                  strokeWidth={1.6}
                  className="text-base-content/50"
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
