import { motion } from "framer-motion";
import { Aperture, Mail, ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-base-content/10
        px-4
        py-20
        text-base-contents
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-32
      "
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-20
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]
          [background-size:48px_48px]
          md:[background-size:64px_64px]
        "
      />

      {/* Subtle center glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-base-content/[0.03]
          blur-[100px]
          sm:h-[420px]
          sm:w-[420px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-4xl
          text-center
        "
      >
        {/* Icon */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="
            mx-auto
            mb-6
            flex
            h-12
            w-12
            items-center
            justify-center
            border
            border-base-content/15
            bg-base-200
          "
        >
          <Aperture className="h-5 w-5 text-base-content" strokeWidth={1.6} />
        </motion.div>

        {/* Label */}
        <div
          className="
            mb-5
            inline-flex
            items-center
            gap-3
            border
            border-base-content/15
            px-3
            py-2
            sm:px-4
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-base-content" />

          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-base-content/55
              sm:text-[10px]
            "
          >
            Let's work together
          </span>
        </div>

        {/* Heading */}
        <h2
          className="
            font-display
            text-3xl
            font-bold
            uppercase
            leading-[1]
            tracking-[-0.035em]
            text-base-content
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
          "
        >
          Ready to elevate
          <br className="hidden sm:block" />
          <span className="text-base-content/50">your next project?</span>
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-6
            max-w-xl
            text-sm
            leading-7
            text-base-content/55
            sm:text-base
            md:text-lg
            md:leading-8
          "
        >
          Tell us what you're building. We'll bring the aerial perspective,
          creative direction, and digital systems to help move it forward.
        </p>

        {/* Actions */}
        <div
          className="
            mx-auto
            mt-10
            flex
            w-full
            max-w-md
            flex-col
            items-center
            justify-center
            gap-3
            sm:max-w-none
            sm:flex-row
          "
        >
          <motion.a
            href="mailto:gyradigital8@gmail.com"
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
              px-7
              font-mono
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              sm:w-auto
              sm:text-xs
              sm:tracking-[0.18em]
            "
          >
            <Mail size={15} strokeWidth={1.7} />
            gyradigital8@gmail.com
          </motion.a>

          <motion.button
            type="button"
            onClick={() => {
              const modal = document.getElementById(
                "project_inquiry_modal",
              ) as HTMLDialogElement | null;

              modal?.showModal();
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
                btn
                btn-outline
                h-12
                w-full
                rounded-none
                border-base-content/20
                bg-transparent
                px-7
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
                sm:text-xs
            "
          >
            Discuss your project
            <ArrowUpRight size={14} strokeWidth={1.7} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
