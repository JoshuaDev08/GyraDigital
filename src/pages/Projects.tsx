import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import project1 from "../assets/projects/projects-1.png";
import project2 from "../assets/projects/projects-2.png";
import project3 from "../assets/projects/projects-3.png";
import project4 from "../assets/projects/projects-4.png";

const projects = [
  {
    number: "01",
    title: "PicklePro System",
    category: "Web Development",
    description:
      "A complete digital platform designed for pickleball operations, combining booking workflows, player management, scheduling, and an intuitive user experience in one responsive system.",
    image: project1,
    href: "https://github.com/JoshuaDev08/pickleball-frontend",
  },
  {
    number: "02",
    title: "Magnified Memories Landing Page",
    category: "Web Development",
    description:
      "A visually driven landing page designed for a photo booth brand, combining polished presentation, smooth interactions, and clear service storytelling to create a memorable online experience.",
    image: project2,
    href: "https://magnified-memories.vercel.app/",
  },
  {
    number: "03",
    title: "Earth Keepers Landing Page",
    category: "Web Development",
    description:
      "A modern, responsive landing page created to communicate the Earth Keepers brand clearly through strong visual hierarchy, engaging interactions, and conversion-focused content.",
    image: project3,
    href: "https://www.earthkeepers.ph/",
  },
  {
    number: "04",
    title: "Ilamu Landing Page",
    category: "Web Development",
    description:
      "A modern and responsive landing page designed to present the Ilamu brand with a strong visual identity, clear content hierarchy, and smooth user experience across desktop and mobile devices.",
    image: project4,
    href: "https://ilamu.vercel.app/",
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

const projectVariants = {
  hidden: {
    opacity: 0,
    y: 32,
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

function Projects() {
  return (
    <section
      id="projects"
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

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
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
            mb-12
            flex
            flex-col
            gap-6
            sm:mb-16
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-2xl">
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
                Selected work
              </span>
            </div>

            <h2
              className="
                font-display
                text-3xl
                font-bold
                uppercase
                leading-[0.95]
                tracking-[-0.035em]
                text-base-content
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Projects built
              <br />
              <span className="text-base-content/50">to move brands.</span>
            </h2>
          </div>

          <p
            className="
              max-w-lg
              text-sm
              leading-7
              text-base-content/50
              sm:text-base
            "
          >
            A selection of visual and digital work spanning aerial production,
            immersive media, web experiences, and engineered systems.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            grid
            gap-4
            md:grid-cols-2
            lg:gap-6
          "
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={projectVariants}
              className={`
                group
                relative
                overflow-hidden
                border
                border-base-content/10
                bg-base-200
                ${index === 0 || index === 3 ? "md:col-span-2" : ""}
              `}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    relative
                    block
                    min-h-[420px]
                    overflow-hidden
                    sm:min-h-[480px]
                    md:min-h-[520px]
                "
              >
                {/* Image */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{
                    scale: 1.035,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    grayscale
                    transition-all
                    duration-700
                    group-hover:grayscale-0
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-base-100
                    via-base-100/35
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-base-100/10
                    transition-colors
                    duration-500
                    group-hover:bg-transparent
                  "
                />

                {/* Top meta */}
                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    flex
                    items-start
                    justify-between
                    p-5
                    sm:p-6
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-base-content/65
                    "
                  >
                    {project.number}
                  </span>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      border
                      border-base-content/20
                      bg-base-100/40
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:border-base-content
                      group-hover:bg-base-content
                    "
                  >
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.6}
                      className="
                        text-base-content
                        transition-colors
                        duration-300
                        group-hover:text-base-100
                      "
                    />
                  </div>
                </div>

                {/* Bottom content */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-5
                    sm:p-6
                    lg:p-8
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-base-content/50
                      sm:text-[10px]
                    "
                  >
                    {project.category}
                  </span>

                  <h3
                    className="
                      mt-2
                      max-w-2xl
                      font-display
                      text-2xl
                      font-semibold
                      uppercase
                      leading-[1]
                      tracking-[-0.025em]
                      text-base-content
                      sm:text-3xl
                      lg:text-4xl
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-xl
                      text-sm
                      leading-6
                      text-base-content/55
                      sm:text-base
                    "
                  >
                    {project.description}
                  </p>

                  <div
                    className="
                      mt-6
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
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-10
            flex
            justify-center
            sm:mt-14
          "
        >
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
              rounded-none
              border-base-content/20
              bg-transparent
              px-8
              font-mono
              text-xs
              uppercase
              tracking-[0.18em]
              text-base-content
              hover:border-base-content
              hover:bg-base-content
              hover:text-base-100
            "
          >
            Start a project
            <ArrowUpRight size={15} strokeWidth={1.7} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
