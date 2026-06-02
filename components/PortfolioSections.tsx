import { FaAws, FaGithub, FaLinkedin, FaPython } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiSwift, SiJenkins, SiAnsible, SiDocker } from "react-icons/si";

const strengths = [
  "XCTest · Swift 6 automation frameworks",
  "AI-assisted CI failure triage",
  "Jenkins · K8s release pipelines",
  "Linux platform DevOps",
];

const impactMetrics = [
  {
    value: "$26.28M",
    label: "per year in infrastructure savings from S3 lifecycle automation across 9 PB of data (July 2024)",
  },
  {
    value: "97%",
    label: "CI build time reduction: 6h 59m to ~15 min by migrating 13.48 GB of Git LFS artifacts to Artifactory",
  },
  {
    value: "30min → 2min",
    label: "MTTR across 475+ Jenkins pipelines via automated rollback stages and health-check-driven deployment gates",
  },
  {
    value: "80%",
    label: "pipeline setup time reduction via Jenkins shared library adopted across 100+ developers, 10 product lines",
  },
];

const projects = [
  {
    title: "xctriage",
    description:
      "Swift 6 CLI for Apple CI environments. Parses xcodebuild output and .xcresult bundles, classifies XCTest failures with 17 pattern rules (simulator crashes, SPM errors, xcresulttool failures). Falls back to Claude API when rule confidence is low. Tracks flaky tests via actor-based SQLite recurrence scoring. generate command emits XCTestCase regression stubs from .xcresult failures automatically. 17 XCTests.",
    stack: ["Swift 6", "XCTest", "xcresulttool", "Claude API", "SQLite", "Actor"],
    github: "https://github.com/gerardrecinto/xctriage",
    metric: "17 XCTests · 17 classification rules",
  },
  {
    title: "ci-triage",
    description:
      "Python AI failure analysis tool for Jenkins, GitHub Actions, and xcodebuild pipelines. 22 rule-based classifiers with Claude API fallback. Flaky test detection via SQLite recurrence scoring (90-day window). Structured triage output: category, root cause, suggested fix. 28 tests. Built to separate infrastructure noise from real product regressions in large-scale CI environments.",
    stack: ["Python", "Claude API", "Jenkins", "GitHub Actions", "SQLite"],
    github: "https://github.com/gerardrecinto/ci-triage",
    metric: "28 tests · 22 classifier rules",
  },
  {
    title: "icloud-automation-framework",
    description:
      "XCTest automation framework targeting iCloud-scale test quality. CloudTestBase with retry/exponential backoff and per-operation timeout budget enforcement. FailureAnalyzer actor for concurrent failure categorization (infrastructure / product / environment / flaky). Python triage engine parses .xcresult bundles using 11 ordered pattern rules, computes signal-to-noise ratio. coverage_gap.py detects untested public Swift symbols. Jenkins pipeline: build → lint → xctest → triage → publish.",
    stack: ["Swift", "XCTest", "Python", "Jenkins", "Actor"],
    github: "https://github.com/gerardrecinto/icloud-automation-framework",
    metric: "14 XCTests · 11 triage rules",
  },
  {
    title: "wireless-platform-devops",
    description:
      "Linux DevOps toolkit for wireless prototype systems. Per-core CPU utilization monitor with NUMA topology and IRQ imbalance detection reading directly from /proc and /sys. PCIe NIC and network bridge diagnostics. RPM spec generation for kernel images and kmod drivers. Ansible provisioning roles for Linux base and container runtime. Kubernetes deployment manifests with hostNetwork for PCIe NIC visibility. Jenkins pipeline for lint, tests, RPM specs, container images, and deployment.",
    stack: ["Python", "Ansible", "Kubernetes", "Docker", "Jenkins", "RPM/YUM"],
    github: "https://github.com/gerardrecinto/wireless-platform-devops",
    metric: "32 tests · installable via pip",
    gif: "https://raw.githubusercontent.com/gerardrecinto/wireless-platform-devops/main/docs/assets/demo.gif",
  },
  {
    title: "devops-mcp",
    description:
      "MCP server integrating Claude AI with 7 enterprise systems: Jira, GitHub, Jenkins, AWS, Kubernetes, Grafana, and Confluence. Provides AI-grounded root-cause analysis and incident triage across live infrastructure context. Deployed at Qualcomm to reduce context-switching during CI failure investigation by 70%. Supports the Axiom public LLM provider endpoint serving a globally distributed engineering organization.",
    stack: ["Python", "MCP", "Claude API", "Kubernetes", "AWS", "Jenkins"],
    github: "https://github.com/gerardrecinto/devops-mcp",
    metric: "7 systems · 70% context-switch reduction",
  },
];

const toolchain = [
  { label: "Swift", icon: SiSwift },
  { label: "Python", icon: FaPython },
  { label: "Jenkins", icon: SiJenkins },
  { label: "Kubernetes", icon: SiKubernetes },
  { label: "Ansible", icon: SiAnsible },
  { label: "Terraform", icon: SiTerraform },
  { label: "Docker", icon: SiDocker },
  { label: "AWS", icon: FaAws },
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
              Eight years turning CI chaos into reliable delivery.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-white-200 md:text-base">
            <p>
              Senior Engineer at Qualcomm — DevOps &amp; Platform Engineering since 2021.
              I build the systems that give product engineers confidence to ship: CI pipelines
              that fail fast and recover automatically, AI-assisted triage tools that separate
              real regressions from infrastructure noise, and release automation that replaced
              2-hour manual processes with 5-minute deploys.
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
            Numbers from production, not estimates.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric) => (
            <article
              key={metric.value}
              className="rounded-lg border border-white/[0.12] bg-white/[0.04] p-5"
            >
              <p className="mb-3 text-3xl font-bold text-blue-100 leading-tight">
                {metric.value}
              </p>
              <p className="text-xs leading-5 text-white-200">
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
              Projects
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Tools built for real CI environments.
            </h2>
          </div>
          <a
            href="https://github.com/gerardrecinto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-100 transition hover:text-purple"
          >
            github.com/gerardrecinto →
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-white/[0.12] bg-black-200 p-5 flex flex-col"
            >
              {project.gif && (
                <div className="mb-4 rounded-md overflow-hidden border border-white/[0.08]">
                  <img
                    src={project.gif}
                    alt={`${project.title} terminal demo`}
                    className="w-full"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-semibold text-white leading-tight">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="text-white-200 hover:text-white transition flex-shrink-0 mt-0.5"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
              </div>
              <p className="mb-4 text-xs leading-5 text-white-200 flex-1">
                {project.description}
              </p>
              <div className="space-y-3">
                <p className="text-xs text-purple font-medium">{project.metric}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-white/[0.1] px-2 py-0.5 text-xs text-blue-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
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
            <h2 className="mb-1 text-2xl font-bold text-white md:text-3xl">
              Gerard Louis Recinto
            </h2>
            <p className="mb-4 text-sm text-white-200">
              San Diego, CA · gerardrecinto@gmail.com · Senior Engineer, Qualcomm
            </p>
            <div className="flex flex-wrap gap-2">
              {toolchain.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded border border-white/[0.1] px-2.5 py-1.5 text-xs text-white-200"
                >
                  <Icon className="h-3.5 w-3.5 text-purple" />
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href="https://github.com/gerardrecinto"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white text-black transition hover:bg-purple"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gerardrecinto/"
              target="_blank"
              rel="noopener noreferrer"
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
