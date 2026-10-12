import { motion } from "framer-motion";
import { Monitor, Settings, Gem, Check } from "lucide-react";

const plans = [
  {
    number: "01",
    icon: Monitor,
    tier: "Tier 1",
    title: "Landing Page Only",
    price: "PHP 90,000",
    featured: false,
    features: [
      "Design included",
      "24/7 support for changes",
      "Exclusive of domain costs",
    ],
  },
  {
    number: "02",
    icon: Settings,
    tier: "Tier 2",
    title: "Web App / System",
    price: "Starts at PHP 170,000",
    featured: false,
    features: [
      "Booking integration",
      "Payment integration",
      "Final pricing based on confirmed requirements",
    ],
  },
  {
    number: "03",
    icon: Gem,
    tier: "Tier 3",
    title: "Enterprise",
    price: "Custom Pricing",
    featured: true,
    features: [
      "Pipelines and continuous delivery",
      "Dedicated product ownership",
      "Dedicated development team for new features",
      "AI model integration",
    ],
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
    y: 30,
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

function Pricing() {
  return (
    <section
      id="pricing"
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
        {/* Heading */}
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
          className="mb-14 max-w-3xl"
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
              Service quotation
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
            Scalable digital
            <br />
            <span className="text-base-content/50">solutions for growth.</span>
          </h2>

          <p
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-base-content/55
              sm:text-base
            "
          >
            Flexible service tiers designed for projects at every stage — from
            focused landing pages to full-scale enterprise systems.
          </p>
        </motion.div>

        {/* Pricing cards */}
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
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <motion.article
                key={plan.title}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.2,
                }}
                className={`
                  group
                  relative
                  flex
                  min-h-[480px]
                  flex-col
                  overflow-hidden
                  border
                  p-6
                  transition-colors
                  duration-300
                  sm:p-7
                  ${
                    plan.featured
                      ? "border-base-content bg-base-content text-base-100"
                      : "border-base-content/10 bg-base-200 text-base-content hover:border-base-content/30"
                  }
                `}
              >
                {/* Premium */}
                {plan.featured && (
                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      bg-base-100
                      px-4
                      py-2
                      font-mono
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-base-content
                    "
                  >
                    Premium
                  </div>
                )}

                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      border
                      ${
                        plan.featured
                          ? "border-base-100/20"
                          : "border-base-content/15 bg-base-100"
                      }
                    `}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <span
                    className={`
                      font-mono
                      text-xs
                      tracking-[0.2em]
                      ${
                        plan.featured
                          ? "text-base-100/40"
                          : "text-base-content/30"
                      }
                    `}
                  >
                    {plan.number}
                  </span>
                </div>

                {/* Tier */}
                <div className="mt-10">
                  <span
                    className={`
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      ${
                        plan.featured
                          ? "text-base-100/55"
                          : "text-base-content/45"
                      }
                    `}
                  >
                    {plan.tier}
                  </span>

                  <h3
                    className="
                      mt-2
                      font-display
                      text-2xl
                      font-semibold
                      uppercase
                      tracking-[-0.02em]
                      sm:text-3xl
                    "
                  >
                    {plan.title}
                  </h3>
                </div>

                {/* Price */}
                <div
                  className={`
                    mt-7
                    border-y
                    py-5
                    ${
                      plan.featured
                        ? "border-base-100/15"
                        : "border-base-content/10"
                    }
                  `}
                >
                  <p
                    className="
                      font-display
                      text-2xl
                      font-bold
                      uppercase
                      tracking-tight
                      sm:text-3xl
                    "
                  >
                    {plan.price}
                  </p>
                </div>

                {/* Features */}
                <ul className="mt-7 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={15}
                        strokeWidth={1.8}
                        className="
                          mt-0.5
                          shrink-0
                        "
                      />

                      <span
                        className={`
                          text-sm
                          leading-6
                          ${
                            plan.featured
                              ? "text-base-100/70"
                              : "text-base-content/55"
                          }
                        `}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-10">
                  <a
                    href="#contact"
                    className={`
                      btn
                      w-full
                      rounded-none
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      ${
                        plan.featured
                          ? "border-base-100 bg-base-100 text-base-content hover:bg-transparent hover:text-base-100"
                          : "btn-outline border-base-content/20 text-base-content hover:border-base-content hover:bg-base-content hover:text-base-100"
                      }
                    `}
                  >
                    Discuss this plan
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.25,
            duration: 0.6,
          }}
          className="
            mt-8
            text-center
            font-mono
            text-[9px]
            uppercase
            tracking-[0.14em]
            text-base-content/35
            sm:text-[10px]
          "
        >
          Quotation scope and final pricing are subject to confirmed
          requirements.
        </motion.p>
      </div>
    </section>
  );
}

export default Pricing;
