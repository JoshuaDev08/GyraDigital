import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import logoAsset from "../assets/logo.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-base-100
        px-4
        pb-8
        pt-24
        text-center
        text-base-content

        sm:px-6
        sm:pb-10
        sm:pt-28

        lg:px-8
        lg:pb-28
      "
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-30

          [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
          [background-size:40px_40px]

          sm:[background-size:56px_56px]
          lg:[background-size:64px_64px]
        "
      />

      {/* Center glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[280px]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-base-content/[0.035]
          blur-[90px]

          sm:h-[380px]
          sm:w-[380px]

          lg:h-[500px]
          lg:w-[500px]
          lg:blur-[120px]
        "
      />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-5xl
          flex-col
          items-center
          text-center
        "
      >
        {/* Logo */}
        <motion.div variants={fadeUpVariants}>
          <img
            src={logoAsset}
            alt="GYRA Digital"
            className="
              mx-auto
              h-auto
              w-full
              max-w-[135px]

              sm:max-w-[175px]
              md:max-w-[210px]
              lg:max-w-[250px]
            "
          />
        </motion.div>

        {/* Small Label */}
        <motion.div
          variants={fadeUpVariants}
          className="
            mt-4
            inline-flex
            max-w-full
            items-center
            gap-2
            border
            border-base-content/15
            bg-base-100/70
            px-3
            py-2
            backdrop-blur-sm

            sm:mt-6
            sm:gap-3
            sm:px-4
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              shrink-0
              rounded-full
              bg-base-content
            "
          />

          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-base-content/60

              sm:text-[10px]
              sm:tracking-[0.25em]

              md:text-xs
            "
          >
            Creative technology studio
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUpVariants}
          className="
            mt-5
            max-w-5xl
            font-display
            text-[clamp(2.25rem,11vw,4rem)]
            font-bold
            uppercase
            leading-[0.95]
            tracking-[-0.04em]
            text-base-content

            sm:mt-6
            sm:text-[clamp(3rem,9vw,5rem)]

            lg:text-[clamp(4.5rem,7vw,6.75rem)]
          "
        >
          Aerial vision.
          <br />
          <span className="text-base-content/55">Digital precision.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUpVariants}
          className="
            mt-5
            max-w-[34rem]
            px-1
            text-sm
            leading-6
            text-base-content/55

            sm:mt-7
            sm:text-base
            sm:leading-7

            md:max-w-2xl
            md:text-lg
            md:leading-8
          "
        >
          We create high-impact aerial content, action-driven visuals, and
          digital systems built for brands that want to move with purpose.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUpVariants}
          className="
            mt-7
            flex
            w-full
            max-w-sm
            flex-col
            items-center
            justify-center
            gap-3

            sm:mt-9
            sm:w-auto
            sm:max-w-none
            sm:flex-row
          "
        >
          <motion.a
            href="#services"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              btn
              btn-primary
              h-12
              w-full
              rounded-none
              border-primary
              px-6
              font-mono
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]

              sm:w-auto
              sm:px-7
              sm:text-xs
              sm:tracking-[0.18em]
            "
          >
            Explore services
            <ArrowRight size={15} strokeWidth={1.75} />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              btn
              btn-outline
              h-12
              w-full
              rounded-none
              border-base-content/20
              bg-transparent
              px-6
              font-mono
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-base-content

              hover:border-base-content
              hover:bg-base-content
              hover:text-base-100

              sm:w-auto
              sm:px-7
              sm:text-xs
              sm:tracking-[0.18em]
            "
          >
            Start a project
          </motion.a>
        </motion.div>

        {/* Mobile / Tablet Scroll Indicator */}
        <motion.a
          href="#services"
          aria-label="Scroll to services"
          variants={fadeUpVariants}
          className="
            group
            mt-8
            flex
            flex-col
            items-center
            gap-2

            lg:hidden
          "
        >
          <span
            className="
              font-mono
              text-[8px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-base-content/60
            "
          >
            Scroll
          </span>

          <div
            className="
              flex
              h-10
              w-6
              items-start
              justify-center
              border
              border-base-content/25
              p-1
            "
          >
            <motion.div
              animate={{
                y: [0, 14, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown
                size={11}
                strokeWidth={1.5}
                className="text-base-content"
              />
            </motion.div>
          </div>
        </motion.a>
      </motion.div>

      {/* Desktop Scroll Indicator */}
      <motion.a
        href="#services"
        aria-label="Scroll to services"
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.2,
          duration: 0.7,
        }}
        className="
          group
          absolute
          bottom-7
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-3

          lg:flex
        "
      >
        <span
          className="
            font-mono
            text-[9px]
            font-medium
            uppercase
            tracking-[0.35em]
            text-base-content/60
            transition-colors
            group-hover:text-base-content
          "
        >
          Scroll
        </span>

        <div
          className="
            flex
            h-12
            w-7
            items-start
            justify-center
            border
            border-base-content/25
            p-1.5
            transition-colors

            group-hover:border-base-content/60
          "
        >
          <motion.div
            animate={{
              y: [0, 16, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown
              size={12}
              strokeWidth={1.5}
              className="text-base-content"
            />
          </motion.div>
        </div>
      </motion.a>
    </section>
  );
}

export default Hero;
