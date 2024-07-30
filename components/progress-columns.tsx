import type { NextPage } from "next";
import styles from "./progress-columns.module.css";

export type ProgressColumnsType = {
  className?: string;
  designHomePageUI?: string;
  developAndIntegrateUserAu?: string;
  medium?: string;
  emptyProgressDate?: string;
  hrAgo?: string;
};

const ProgressColumns: NextPage<ProgressColumnsType> = ({
  className = "",
  designHomePageUI,
  developAndIntegrateUserAu,
  medium,
  emptyProgressDate,
  hrAgo,
}) => {
  return (
    <div className={[styles.progressColumns, className].join(" ")}>
      <div className={styles.inProgressDetailsParent}>
        <div className={styles.inProgressDetails}>
          <div className={styles.inProgressItems}>
            <div className={styles.designHomePage}>{designHomePageUI}</div>
            <div className={styles.developAndIntegrate}>
              {developAndIntegrateUserAu}
            </div>
          </div>
        </div>
        <div className={styles.inProgressUrgency}>
          <div className={styles.medium}>{medium}</div>
        </div>
        <div className={styles.emptyProgressUrgency}>
          <img
            className={styles.emptyProgressIcon}
            loading="lazy"
            alt=""
            src="/frame-18.svg"
          />
          <div className={styles.emptyProgressDate}>{emptyProgressDate}</div>
        </div>
      </div>
      <div className={styles.hrAgoWrapper}>
        <div className={styles.hrAgo}>{hrAgo}</div>
      </div>
    </div>
  );
};

export default ProgressColumns;
