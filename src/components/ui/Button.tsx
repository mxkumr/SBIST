import Link from "next/link";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md",
  accent:
    "bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-md",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
  ghost: "text-primary hover:bg-primary/10",
  white:
    "bg-white text-primary hover:bg-surface border border-border shadow-sm",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function buttonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return [
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold motion-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const classes = buttonClasses(variant, size, className);

  const content = (
    <>
      {leftIcon}
      {children}
      {rightIcon}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
