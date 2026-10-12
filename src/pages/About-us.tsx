import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { Code2, Megaphone, Crown } from "lucide-react";

import developerImage from "../assets/Leadership/JoshuaPose.png";
import marketingImage from "../assets/Leadership/Dexter.png";
import ceoImage from "../assets/Leadership/LancePose.png";

const stats = [
  {
    value: 4000,
    suffix: "+",
    display: "4K+",
    label: "Video Asset Quality",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years of Engineering Software",
  },
  {
    value: 15,
    suffix: "+",
    label: "Systems designed",
  },
];

const leadership = [
  {
    icon: Code2,
    role: "Principal Developer",
    name: "Joshua D. Magnaye",
    description:
      "Leads system architecture, development, and technical direction across GYRA's digital products.",
    image: developerImage,
  },
  {
    icon: Megaphone,
    role: "Marketing Head",
    name: "Dexter Byron M. Endaya",
    description:
      "Drives brand strategy, campaigns, positioning, and creative direction across digital channels.",
    image: marketingImage,
  },
  {
    icon: Crown,
    role: "Chief Executive Officer",
    name: "Lance Ian M. Lopez",
    description:
      "Leads company strategy, partnerships, growth, and the overall direction of GYRA Digital.",
    image: ceoImage,
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

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

type CountUpProps = {
  value: number;
  suffix?: string;
  display?: string;
  duration?: number;
};

function CountUp({
  value,
  suffix = "",
  display,
  duration = 1.8,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  const formattedValue = display
    ? count >= value
      ? display
      : value >= 1000
        ? `${(count / 1000).toFixed(count >= 1000 ? 1 : 0)}K${suffix}`
        : `${count}${suffix}`
    : `${count.toLocaleString()}${suffix}`;

  return <span ref={ref}>{formattedValue}</span>;
}

function Stats() {
  return (
    <section
      id="stats"
      className="
        relative
        overflow-hidden
        border-y
        border-base-content/10
        bg-base-content/10
        px-4
        py-16
        text-base-content
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-24
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
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
          [background-size:48px_48px]
          md:[background-size:64px_64px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top section */}
        <div
          className="
            flex
            flex-col
            gap-12
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-16
          "
        >
          {/* Left content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUpVariants}
            className="max-w-xl"
          >
            <div
              className="
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
                Why GYRA
              </span>
            </div>

            <h2
              className="
                mt-5
                max-w-lg
                font-display
                text-3xl
                font-bold
                uppercase
                leading-[1]
                tracking-[-0.03em]
                text-base-content
                sm:text-4xl
                md:text-5xl
              "
            >
              Built for altitude
              <br />
              <span className="text-base-content/55">&amp; uptime.</span>
            </h2>

            <p
              className="
                mt-5
                max-w-lg
                text-sm
                leading-7
                text-base-content/55
                sm:text-base
              "
            >
              We don't just shoot and hand over files. We design the systems
              that deliver your content to the right audience, at the right
              quality, on the right device.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              grid
              w-full
              grid-cols-1
              border-t
              border-base-content/10
              sm:grid-cols-3
              lg:w-auto
              lg:min-w-[520px]
              lg:border-t-0
            "
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeUpVariants}
                className={`
                  relative
                  py-6
                  sm:px-6
                  sm:py-2
                  lg:px-8
                  ${
                    index !== stats.length - 1
                      ? "border-b border-base-content/10 sm:border-b-0 sm:border-r"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    font-mono
                    text-4xl
                    font-bold
                    tracking-[-0.04em]
                    text-base-content
                    sm:text-4xl
                    md:text-5xl
                    lg:text-6xl
                  "
                >
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    display={stat.display}
                  />
                </div>

                <div
                  className="
                    mt-2
                    max-w-[150px]
                    font-mono
                    text-[9px]
                    uppercase
                    leading-4
                    tracking-[0.18em]
                    text-base-content/45
                    sm:text-[10px]
                  "
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Leadership divider */}
        <div className="my-16 h-px w-full bg-base-content/10 lg:my-20" />

        {/* Leadership heading */}
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 max-w-2xl"
        >
          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.24em]
              text-base-content/45
              sm:text-[10px]
            "
          >
            Core team
          </span>

          <h3
            className="
              mt-3
              font-display
              text-2xl
              font-bold
              uppercase
              tracking-[-0.03em]
              text-base-content
              sm:text-3xl
              md:text-4xl
            "
          >
            The people behind GYRA.
          </h3>
        </motion.div>

        {/* Leadership grid */}
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
            md:grid-cols-3
            md:gap-6
        "
        >
          {leadership.map((member, index) => {
            const Icon = member.icon;

            return (
              <motion.article
                key={member.role}
                variants={fadeUpVariants}
                whileHover={{
                  y: -5,
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
                bg-base-100
                transition-colors
                duration-300
                hover:border-base-content/30

                sm:min-h-[360px]
                lg:min-h-[500px]
                "
              >
                {/* Background image */}
                {/* Background image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    scale-100
                    object-cover
                    opacity-60
                    grayscale
                    transition-all
                    duration-500
                    ease-out

                    md:scale-105
                    md:opacity-0

                    md:group-hover:scale-100
                    md:group-hover:opacity-60
                "
                />

                {/* Image overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-base-100/20
                    via-base-100/35
                    to-base-100/95
                    opacity-0
                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                "
                />

                {/* Content */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    min-h-[420px]
                    flex-col
                    p-6

                    sm:min-h-[460px]
                    lg:min-h-[500px]
                "
                >
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        border
                        border-base-content/15
                        bg-base-200
                        transition-all
                        duration-300

                        group-hover:border-base-content/30
                        group-hover:bg-base-content
                    "
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.6}
                        className="
                        text-base-content
                        transition-colors
                        duration-300

                        group-hover:text-base-100
                        "
                      />
                    </div>

                    <span
                      className="
                        font-mono
                        text-[9px]
                        tracking-[0.2em]
                        text-base-content/25
                        transition-colors
                        duration-300

                        group-hover:text-base-content/70
                    "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Bottom */}
                  <div className="mt-auto">
                    <p
                      className="
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.2em]
                        text-base-content/45
                        transition-colors
                        duration-300

                        group-hover:text-base-content/70

                        sm:text-[10px]
                    "
                    >
                      {member.role}
                    </p>

                    <h4
                      className="
                        mt-2
                        font-display
                        text-2xl
                        font-semibold
                        uppercase
                        leading-tight
                        tracking-tight
                        text-base-content

                        sm:text-[1.65rem]
                        lg:text-3xl
                    "
                    >
                      {member.name}
                    </h4>

                    <p
                      className="
                        mt-4
                        max-w-sm
                        text-sm
                        leading-6
                        text-base-content/50
                        transition-colors
                        duration-300

                        group-hover:text-base-content/80
                    "
                    >
                      {member.description}
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
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;
