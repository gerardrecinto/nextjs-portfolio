import { FaAws, FaGithub, FaLinkedin, FaPython, FaReact } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiTypescript } from "react-icons/si";

const strengths = [
  "CI/CD platform design",
  "Cloud infrastructure automation",
  "Kubernetes delivery workflows",
  "Developer experience",
];

const impactMetrics = [
  {
    value: "8+",
    label: "years across software, DevOps, QA, and release engineering",
  },
  {
    value: "100+",
    label: "GitHub repositories spanning apps, automation, infra, and interview prep",
  },
  {
    value: "24/7",
    label: "operational mindset for rollbacks, observability, and release readiness",
  },
];

const projects = [
  {
    title: "Next.js Portfolio",
    description:
      "Static portfolio shipped through AWS S3 and CloudFront with animated hero UI, typed components, and edge-cached assets.",
    stack: ["Next.js", "TypeScript", "Tailwind", "CloudFront"],
  },
  {
    title: "DevOps Ledger",
    description:
      "Operational memory layer for GitOps teams that records infrastructure intent, risk, approvals, rollback readiness, and learning.",
    stack: ["Python", "GitOps", "Automation", "Platform"],
  },
  {
    title: "GPU App Deployments",
    description:
      "Training workload deployment patterns for Kubernetes GPU scheduling, Slurm-aware HPC workflows, and Jenkins delivery.",
    stack: ["Python", "Kubernetes", "Jenkins", "GPU"],
  },
];

const toolchain = [
  { label: "AWS", icon: FaAws },
  { label: "Kubernetes", icon: SiKubernetes },
  { label: "Terraform", icon: SiTerraform },
  { label: "Python", icon: FaPython },
  { label: "TypeScript", icon: SiTypescript },
  { label: "React", icon: FaReact },
];

const PortfolioSections = () => {
  return (
    <div className="space-y-24 pb-24">
      <section id="about" className="scroll-mt-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-purple">
              About
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Senior software engineer focused on release confidence.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-white-200 md:text-base">
            <p>
              I work across software engineering, DevOps/CI/CD, cloud
              infrastructure, Kubernetes, QA automation, and release operations
              to turn manual delivery paths into repeatable systems. My
              strongest work sits where product velocity, reliability, failure
              analysis, and developer experience meet.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="rounded-lg border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-white"
                >
                  {strength}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="scroll-mt-24">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-purple">
            Impact
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Delivery systems measured by confidence, speed, and recovery.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {impactMetrics.map((metric) => (
            <article
              key={metric.value}
              className="rounded-lg border border-white/[0.12] bg-white/[0.04] p-5"
            >
              <p className="mb-3 text-4xl font-bold text-blue-100">
                {metric.value}
              </p>
              <p className="text-sm leading-6 text-white-200">
                {metric.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-24">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-purple">
              Selected Work
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Practical systems, not portfolio filler.
            </h2>
          </div>
          <a
            href="https://github.com/gerardrecinto"
            className="text-sm font-medium text-blue-100 transition hover:text-purple"
          >
            View GitHub
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-white/[0.12] bg-black-200 p-5"
            >
              <h3 className="mb-3 text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-5 text-sm leading-6 text-white-200">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/[0.1] px-2.5 py-1 text-xs text-blue-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-24">
        <div className="grid gap-8 rounded-lg border border-white/[0.12] bg-white/[0.04] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-purple">
              Contact
            </p>
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              Open to CI, developer tooling, and release engineering roles.
            </h2>
            <div className="flex flex-wrap gap-3">
              {toolchain.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-md border border-white/[0.1] px-3 py-2 text-sm text-white-200"
                >
                  <Icon className="h-4 w-4 text-purple" />
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href="https://github.com/gerardrecinto"
              aria-label="GitHub profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white text-black transition hover:bg-purple"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gerardrecinto/"
              aria-label="LinkedIn profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white text-black transition hover:bg-purple"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSections;
