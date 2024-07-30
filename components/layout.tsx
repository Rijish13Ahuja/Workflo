import type { NextPage } from "next";
import styles from "./layout.module.css";

export type LayoutType = {
  className?: string;
  inProgress?: string;
};

const Layout: NextPage<LayoutType> = ({ className = "", inProgress }) => {
  return (
    <section className={[styles.layout, className].join(" ")}>
      <header className={styles.content}>
        <div className={styles.columns}>
          <img
            className={styles.columnItemIcon}
            loading="lazy"
            alt=""
            src="/frame1.svg"
          />
          <img
            className={styles.columnItemIcon1}
            loading="lazy"
            alt=""
            src="/frame-11.svg"
          />
        </div>
        <div className={styles.sharedContent}>
          <div className={styles.sharedButtons}>
            <a className={styles.share}>Share</a>
            <img
              className={styles.contentItemIcon}
              alt=""
              src="/frame-15.svg"
            />
          </div>
          <div className={styles.sharedButtons1}>
            <input
              className={styles.favorite}
              placeholder="Favorite"
              type="text"
            />
            <img className={styles.frameIcon} alt="" src="/frame-3.svg" />
          </div>
        </div>
      </header>
      <div className={styles.properties}>
        <div className={styles.propertyList}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.customField}>
            <div className={styles.fieldInfo}>
              <div className={styles.fieldIcons}>
                <img
                  className={styles.fieldValuesIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-41.svg"
                />
                <a className={styles.status}>Status</a>
              </div>
              <div className={styles.fieldIcons1}>
                <img
                  className={styles.frameIcon1}
                  loading="lazy"
                  alt=""
                  src="/frame-51.svg"
                />
                <a className={styles.priority}>Priority</a>
              </div>
              <div className={styles.fieldIcons2}>
                <img
                  className={styles.frameIcon2}
                  loading="lazy"
                  alt=""
                  src="/frame-61.svg"
                />
                <a className={styles.deadline}>Deadline</a>
              </div>
              <div className={styles.fieldIcons3}>
                <img
                  className={styles.frameIcon3}
                  loading="lazy"
                  alt=""
                  src="/frame-71.svg"
                />
                <div className={styles.description}>Description</div>
              </div>
            </div>
            <div className={styles.fieldStatus}>
              <div className={styles.inProgress}>{inProgress}</div>
              <div className={styles.notSelected}>Not selected</div>
              <div className={styles.notSelected1}>Not selected</div>
              <div className={styles.notSelected2}>Not selected</div>
            </div>
          </div>
        </div>
        <button className={styles.customProperty}>
          <img
            className={styles.customInputIcon}
            loading="lazy"
            alt=""
            src="/frame-8.svg"
          />
          <div className={styles.addCustomProperty}>Add custom property</div>
        </button>
      </div>
    </section>
  );
};

export default Layout;
