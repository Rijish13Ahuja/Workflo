import type { NextPage } from "next";
import styles from "./task-modal.module.css";

export type TaskModalType = {
  className?: string;
};

const TaskModal: NextPage<TaskModalType> = ({ className = "" }) => {
  return (
    <div className={[styles.taskModal, className].join(" ")}>
      <section className={styles.layout}>
        <header className={styles.columns}>
          <div className={styles.columnContent}>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/frame1.svg"
            />
            <img
              className={styles.frameIcon1}
              loading="lazy"
              alt=""
              src="/frame-11.svg"
            />
          </div>
          <div className={styles.shareFavoriteColumn}>
            <div className={styles.shareFavoriteActions}>
              <a className={styles.share}>Share</a>
              <img className={styles.frameIcon2} alt="" src="/frame-15.svg" />
            </div>
            <div className={styles.shareFavoriteActions1}>
              <input
                className={styles.favorite}
                placeholder="Favorite"
                type="text"
              />
              <img className={styles.frameIcon3} alt="" src="/frame-3.svg" />
            </div>
          </div>
        </header>
        <div className={styles.propertiesColumn}>
          <div className={styles.customProperties}>
            <h1 className={styles.title}>Title</h1>
            <div className={styles.propertyFields}>
              <div className={styles.propertyLabels}>
                <div className={styles.propertyLabelSet}>
                  <img
                    className={styles.propertyControlSet}
                    loading="lazy"
                    alt=""
                    src="/frame-41.svg"
                  />
                  <div className={styles.status}>Status</div>
                </div>
                <div className={styles.propertyLabelSet1}>
                  <img
                    className={styles.frameIcon4}
                    loading="lazy"
                    alt=""
                    src="/frame-51.svg"
                  />
                  <div className={styles.priority}>Priority</div>
                </div>
                <div className={styles.propertyLabelSet2}>
                  <img
                    className={styles.frameIcon5}
                    loading="lazy"
                    alt=""
                    src="/frame-61.svg"
                  />
                  <div className={styles.deadline}>Deadline</div>
                </div>
                <div className={styles.propertyLabelSet3}>
                  <img
                    className={styles.frameIcon6}
                    loading="lazy"
                    alt=""
                    src="/frame-71.svg"
                  />
                  <div className={styles.description}>Description</div>
                </div>
              </div>
              <div className={styles.placeholderValues}>
                <div className={styles.notSelected}>Not selected</div>
                <div className={styles.notSelected1}>Not selected</div>
                <div className={styles.notSelected2}>Not selected</div>
                <div className={styles.notSelected3}>Not selected</div>
              </div>
            </div>
          </div>
          <button className={styles.addProperty}>
            <img
              className={styles.addPropertyControl}
              loading="lazy"
              alt=""
              src="/frame-8.svg"
            />
            <div className={styles.addCustomProperty}>Add custom property</div>
          </button>
        </div>
      </section>
      <div className={styles.emptyColumn} />
      <div className={styles.startWritingOr}>
        Start writing, or drag your own files here.
      </div>
    </div>
  );
};

export default TaskModal;
