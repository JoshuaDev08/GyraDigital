import { motion } from "framer-motion";
import { Camera, Play, Code2, Server } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Integration",
    description:
      "Seamlessly embedded media, galleries, and experiences that turn raw footage into conversion-ready digital products.",
  },
  {
    icon: Server,
    title: "System Design",
    description:
      "End-to-end web architecture, UX, and digital infrastructure that keeps your platform fast, secure, and scalable.",
  },
  {
    icon: Camera,
    title: "Drone Photography",
    description:
      "Cinematic aerials for real estate, events, and brand stories — captured from perspectives only flight can unlock.",
  },
  {
    icon: Play,
    title: "Action Cam Footage",
    description:
      "High-impact POV content built for speed, sport, and scale. Rugged, immersive, and made to perform on any screen.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function Services() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-base-100
        px-4
        py-20
        text-base-content
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-32
      "
    >
      {/* Subtle background grid */}
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

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
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
          className="mb-12 max-w-2xl sm:mb-14 lg:mb-16"
        >
          <div
            className="
              mb-4
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
              What we do
            </span>
          </div>

          <h2
            className="
              font-display
              text-3xl
              font-bold
              uppercase
              leading-[1]
              tracking-[-0.03em]
              text-base-content
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Capture.
            <br className="sm:hidden" /> Build. Scale.
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-base-content/55
              sm:text-base
              md:text-lg
            "
          >
            From the sky to the server — we connect high-fidelity media with
            engineered digital systems built for modern brands.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  border
                  border-base-content/10
                  bg-base-200
                  p-5
                  transition-colors
                  duration-300
                  hover:border-base-content/30
                  hover:bg-base-300
                  sm:p-6
                "
              >
                {/* Number */}
                <div
                  className="
                    absolute
                    right-4
                    top-4
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-base-content/25
                  "
                >
                  0{index + 1}
                </div>

                {/* Icon */}
                <div
                  className="
                    mb-6
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border
                    border-base-content/15
                    bg-base-100
                    transition-all
                    duration-300
                    group-hover:border-base-content/40
                    group-hover:bg-base-content
                  "
                >
                  <Icon
                    className="
                      h-5
                      w-5
                      text-base-content
                      transition-colors
                      duration-300
                      group-hover:text-base-100
                    "
                    strokeWidth={1.6}
                  />
                </div>

                {/* Content */}
                <h3
                  className="
                    font-display
                    text-base
                    font-semibold
                    uppercase
                    tracking-[0.04em]
                    text-base-content
                    sm:text-lg
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-base-content/50
                    transition-colors
                    duration-300
                    group-hover:text-base-content/65
                  "
                >
                  {service.description}
                </p>

                {/* Bottom line */}
                <div
                  className="
                    mt-7
                    h-px
                    w-full
                    origin-left
                    scale-x-0
                    bg-base-content/50
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
