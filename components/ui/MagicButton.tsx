import type { ReactNode } from "react";

type MagicButtonProps = {
  title: string;
  icon?: ReactNode;
  position?: "left" | "right";
  otherClasses?: string;
  /**
   * Root element to render. Defaults to "button". Pass "span" when this
   * component is nested inside an <a> (HTML doesn't allow a <button>
   * inside an <a>, and browsers will otherwise silently reparent it,
   * breaking keyboard focus and screen reader activation order).
   */
  as?: "button" | "span";
};

const MagicButton = ({
  title,
  icon,
  position = "right",
  otherClasses = "",
  as = "button",
}: MagicButtonProps) => {
  const Tag = as;
  return (
    <Tag className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple md:mt-10 md:w-60">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </Tag>
  );
};

export default MagicButton;
