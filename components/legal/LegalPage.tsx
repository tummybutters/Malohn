import Link from "next/link";
import styles from "./LegalPage.module.css";

type SectionLink = { id: string; label: string };

export default function LegalPage({
  title,
  effectiveDate,
  updatedDate,
  sections,
  children,
}: {
  title: string;
  effectiveDate: string;
  updatedDate: string;
  sections: SectionLink[];
  children: React.ReactNode;
}) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.back} href="/">
          Malohn Capital Group / Home
        </Link>
        <h1>{title}</h1>
        <p>
          Effective date: {effectiveDate}. Last updated: {updatedDate}.
        </p>
      </header>
      <div className={styles.layout}>
        <nav
          className={`${styles.toc} ${styles.tocDesktop}`}
          aria-label="On this page"
        >
          <p>On this page</p>
          <ol>
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>
        <details className={styles.tocMobile}>
          <summary>On this page</summary>
          <nav aria-label="On this page">
            <ol>
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
          </nav>
        </details>
        <article className={styles.article}>{children}</article>
      </div>
    </div>
  );
}
