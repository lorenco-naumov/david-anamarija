import type { HTMLAttributes, ReactNode } from "react";
import styles from "./WeddingDetailCard.module.css";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type WeddingCardShellProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  medallion?: ReactNode;
  showDivider?: boolean;
  showMedallion?: boolean;
};

export function WeddingCardShell({
  children,
  className,
  contentClassName,
  medallion,
  showDivider = true,
  showMedallion = true,
  ...props
}: WeddingCardShellProps) {
  return (
    <div className={cx(styles.shell, className)} {...props}>
      <div className={styles.paper}>
        <span className={styles.borderFrame} aria-hidden>
          <svg viewBox="0 0 300 400" focusable="false">
            <path d="M 31 10 H 269 C 269 22 278 31 290 31 V 369 C 278 369 269 378 269 390 H 31 C 31 378 22 369 10 369 V 31 C 22 31 31 22 31 10 Z" />
          </svg>
        </span>
        <span className={cx(styles.floral, styles.floralTop)} aria-hidden />
        <span className={cx(styles.floral, styles.floralBottom)} aria-hidden />
        {showMedallion ? (
          <span className={styles.medallion} aria-hidden={!medallion}>
            {medallion ? (
              <span className={styles.medallionIcon}>{medallion}</span>
            ) : null}
          </span>
        ) : null}
        {showDivider ? (
          <span className={styles.divider} aria-hidden>
            <svg viewBox="0 0 220 24" focusable="false">
              <path d="M 2 12 H 78" />
              <path d="M 142 12 H 218" />
              <circle cx="84" cy="12" r="2.6" />
              <circle cx="136" cy="12" r="2.6" />
              <path d="M 92 12 C 99 3 107 3 110 12 C 113 21 121 21 128 12" />
              <path d="M 92 12 C 99 21 107 21 110 12 C 113 3 121 3 128 12" />
              <path d="M 110 3 L 116 9 L 110 15 L 104 9 Z" />
            </svg>
          </span>
        ) : null}
        {children ? (
          <div className={cx(styles.contentSlot, contentClassName)}>
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export type WeddingCountdownCardProps = Omit<
  HTMLAttributes<HTMLElement>,
  "children" | "title"
> & {
  className?: string;
  label: ReactNode;
  value: ReactNode;
};

export function WeddingCountdownCard({
  className,
  label,
  value,
  ...props
}: WeddingCountdownCardProps) {
  return (
    <article {...props} className={cx(styles.card, className)}>
      <WeddingCardShell
        className={styles.statShell}
        contentClassName={styles.statContent}
        showMedallion={false}
      >
        <span className={styles.statValue}>{value}</span>
        <span className={styles.statLabel}>{label}</span>
      </WeddingCardShell>
    </article>
  );
}

export type WeddingVenueCardProps = Omit<
  HTMLAttributes<HTMLElement>,
  "children" | "title"
> & {
  action?: ReactNode;
  address?: ReactNode;
  className?: string;
  icon?: ReactNode;
  label?: ReactNode;
  note?: ReactNode;
  title?: ReactNode;
};

export function WeddingVenueCard({
  action,
  address,
  className,
  icon,
  label,
  note,
  title,
  ...props
}: WeddingVenueCardProps) {
  return (
    <article {...props} className={cx(styles.card, className)}>
      <WeddingCardShell
        className={styles.venueShell}
        contentClassName={cx(styles.venueContent, styles.interactiveContent)}
        medallion={icon}
      >
        <div className={styles.venueText}>
          {label ? <span className={styles.venueEyebrow}>{label}</span> : null}
          {title ? <h3 className={styles.venueTitle}>{title}</h3> : null}
          {address ? <p className={styles.venueAddress}>{address}</p> : null}
          {note ? <p className={styles.venueNote}>{note}</p> : null}
        </div>
        {action ? <div className={styles.venueAction}>{action}</div> : null}
      </WeddingCardShell>
    </article>
  );
}

export type WeddingDetailCardProps = Omit<
  HTMLAttributes<HTMLElement>,
  "children" | "title"
> & {
  children?: ReactNode;
  className?: string;
  href?: string;
  icon?: ReactNode;
  location?: ReactNode;
  note?: ReactNode;
  number?: ReactNode;
  rel?: string;
  target?: string;
  time?: ReactNode;
  title?: ReactNode;
};

export function WeddingDetailCard({
  children,
  className,
  href,
  icon,
  location,
  note,
  number,
  rel,
  target,
  time,
  title,
  ...props
}: WeddingDetailCardProps) {
  const displayNumber =
    typeof number === "number" ? String(number).padStart(2, "0") : number;
  const detailNote = children ?? note;
  const card = (
    <WeddingCardShell medallion={icon}>
      {displayNumber ? <p className={styles.number}>{displayNumber}</p> : null}
      {title ? <h3 className={styles.title}>{title}</h3> : null}
      {time || location ? (
        <div className={styles.meta}>
          {time ? <p className={styles.time}>{time}</p> : null}
          {location ? <p className={styles.location}>{location}</p> : null}
        </div>
      ) : null}
      {detailNote ? <div className={styles.note}>{detailNote}</div> : null}
    </WeddingCardShell>
  );

  const rootClassName = cx(
    styles.card,
    href && styles.cardInteractive,
    className,
  );

  if (href) {
    return (
      <a
        {...props}
        className={rootClassName}
        href={href}
        rel={rel ?? (target === "_blank" ? "noreferrer" : undefined)}
        target={target}
      >
        {card}
      </a>
    );
  }

  return (
    <article {...props} className={rootClassName}>
      {card}
    </article>
  );
}
