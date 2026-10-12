import { useState } from "react";
import { motion } from "framer-motion";
import { X, Send } from "lucide-react";
import { sileo } from "sileo";

import { sendProjectInquiry } from "../../services/contactApi";

type ProjectInquiryModalProps = {
  modalId?: string;
};

function ProjectInquiryModal({
  modalId = "project_inquiry_modal",
}: ProjectInquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent duplicate submission
    if (isSubmitting) return;

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      service: String(formData.get("service") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      timeline: String(formData.get("timeline") ?? ""),
      details: String(formData.get("details") ?? ""),
    };

    try {
      const response = await sendProjectInquiry(payload);

      sileo.success({
        title: "Inquiry sent",
        fill: "white",
        styles: {
          title: "text-black!",
          description: "text-black/75!",
        },
        description:
          response.message ||
          "Your project inquiry has been sent successfully.",
      });

      // Clear form only after successful submission
      form.reset();

      // Close modal
      const modal = document.getElementById(
        modalId,
      ) as HTMLDialogElement | null;

      modal?.close();
    } catch (error) {
      console.error("Project inquiry error:", error);

      const companyNumber = "+639765895451";

      sileo.error({
        title: "Unable to send inquiry",
        fill: "white",
        styles: {
          title: "text-black!",
          description: "text-black/75!",
        },
        description: (
          <div className="space-y-3">
            <p>
              {error instanceof Error
                ? error.message
                : "Something went wrong. Please try again."}
            </p>

            <a
              href={`tel:${companyNumber}`}
              className="
                    inline-flex
                    items-center
                    justify-center
                    border
                    border-black
                    px-3
                    py-2
                    text-xs
                    font-medium
                    uppercase
                    tracking-widest
                    text-black
                    transition
                    hover:bg-black
                    hover:text-white
                "
            >
              Call {companyNumber}
            </a>
          </div>
        ),
      });
      const modal = document.getElementById(
        modalId,
      ) as HTMLDialogElement | null;

      modal?.close();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <dialog id={modalId} className="modal">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          modal-box
          relative
          max-w-2xl
          rounded-none
          border
          border-base-content/15
          bg-base-100
          p-0
          text-base-content
          shadow-2xl
        "
      >
        {/* Header */}
        <div
          className="
            flex
            items-start
            justify-between
            border-b
            border-base-content/10
            px-5
            py-5
            sm:px-7
          "
        >
          <div>
            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-base-content/45
                sm:text-[10px]
              "
            >
              Project inquiry
            </span>

            <h3
              className="
                mt-2
                font-display
                text-2xl
                font-bold
                uppercase
                tracking-[-0.03em]
                sm:text-3xl
              "
            >
              Tell us what you're building.
            </h3>
          </div>

          <form method="dialog">
            <button
              type="submit"
              aria-label="Close modal"
              className="
                btn
                btn-square
                btn-ghost
                btn-sm
                rounded-none
                border
                border-base-content/10
                hover:border-base-content/30
                hover:bg-base-200
              "
            >
              <X size={16} strokeWidth={1.6} />
            </button>
          </form>
        </div>

        {/* Form */}
        <form
          className="
            grid
            gap-5
            px-5
            py-6
            sm:grid-cols-2
            sm:px-7
            sm:py-7
          "
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className="sm:col-span-1">
            <label
              htmlFor="name"
              className="
                mb-2
                block
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-base-content/45
              "
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="
                input
                w-full
                rounded-none
                border-base-content/15
                bg-base-200
                text-base-content
                placeholder:text-base-content/25
                focus:border-base-content/40
                focus:outline-none
              "
            />
          </div>

          {/* Email */}
          <div className="sm:col-span-1">
            <label
              htmlFor="email"
              className="
                mb-2
                block
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-base-content/45
              "
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
              className="
                input
                w-full
                rounded-none
                border-base-content/15
                bg-base-200
                text-base-content
                placeholder:text-base-content/25
                focus:border-base-content/40
                focus:outline-none
              "
            />
          </div>

          {/* Company */}
          <div className="sm:col-span-1">
            <label
              htmlFor="company"
              className="
                mb-2
                block
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-base-content/45
              "
            >
              Company / Brand
            </label>

            <input
              id="company"
              name="company"
              type="text"
              placeholder="Company name"
              className="
                input
                w-full
                rounded-none
                border-base-content/15
                bg-base-200
                text-base-content
                placeholder:text-base-content/25
                focus:border-base-content/40
                focus:outline-none
              "
            />
          </div>

          {/* Service */}
          <div className="sm:col-span-1">
            <label
              htmlFor="service"
              className="
                mb-2
                block
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-base-content/45
              "
            >
              Service
            </label>

            <select
              id="service"
              name="service"
              defaultValue=""
              required
              className="
                select
                w-full
                rounded-none
                border-base-content/15
                bg-base-200
                text-base-content
                focus:border-base-content/40
                focus:outline-none
              "
            >
              <option value="" disabled>
                Select a service
              </option>

              <option>Landing Page</option>
              <option>Web App / System</option>
              <option>Enterprise Development</option>
              <option>Drone Photography</option>
              <option>Action Cam Production</option>
              <option>Other</option>
            </select>
          </div>

          {/* Budget */}
          <div className="sm:col-span-1">
            <label
              htmlFor="budget"
              className="
                mb-2
                block
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-base-content/45
              "
            >
              Budget Range
            </label>

            <select
              id="budget"
              name="budget"
              defaultValue=""
              className="
                select
                w-full
                rounded-none
                border-base-content/15
                bg-base-200
                text-base-content
                focus:border-base-content/40
                focus:outline-none
              "
            >
              <option value="" disabled>
                Select budget
              </option>

              <option>Below PHP 100,000</option>
              <option>PHP 100,000 - PHP 200,000</option>
              <option>PHP 200,000 - PHP 500,000</option>
              <option>PHP 500,000+</option>
              <option>To be discussed</option>
            </select>
          </div>

          {/* Timeline */}
          <div className="sm:col-span-1">
            <label
              htmlFor="timeline"
              className="
                mb-2
                block
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-base-content/45
              "
            >
              Target Timeline
            </label>

            <select
              id="timeline"
              name="timeline"
              defaultValue=""
              className="
                select
                w-full
                rounded-none
                border-base-content/15
                bg-base-200
                text-base-content
                focus:border-base-content/40
                focus:outline-none
              "
            >
              <option value="" disabled>
                Select timeline
              </option>

              <option>As soon as possible</option>
              <option>Within 1 month</option>
              <option>1 - 3 months</option>
              <option>3+ months</option>
              <option>Flexible</option>
            </select>
          </div>

          {/* Project Details */}
          <div className="sm:col-span-2">
            <label
              htmlFor="details"
              className="
                mb-2
                block
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-base-content/45
              "
            >
              Project Details
            </label>

            <textarea
              id="details"
              name="details"
              rows={5}
              placeholder="Tell us about your project, goals, requirements, and what you need help with."
              required
              className="
                textarea
                w-full
                resize-none
                rounded-none
                border-base-content/15
                bg-base-200
                text-base-content
                placeholder:text-base-content/25
                focus:border-base-content/40
                focus:outline-none
              "
            />
          </div>

          {/* Footer */}
          <div
            className="
              mt-2
              flex
              flex-col
              gap-3
              border-t
              border-base-content/10
              pt-5
              sm:col-span-2
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                max-w-sm
                font-mono
                text-[9px]
                uppercase
                leading-4
                tracking-[0.12em]
                text-base-content/30
              "
            >
              Final scope and quotation will be confirmed after project review.
            </p>

            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="
                btn
                btn-primary
                rounded-none
                px-7
                font-mono
                text-[10px]
                uppercase
                tracking-[0.18em]
                sm:text-xs
              "
            >
              Send inquiry
              <Send size={14} strokeWidth={1.7} />
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* Clicking outside closes it */}
      <form method="dialog" className="modal-backdrop">
        <button type="submit">close</button>
      </form>
    </dialog>
  );
}

export default ProjectInquiryModal;
