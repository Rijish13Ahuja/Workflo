import type { NextPage } from "next";
import styles from "./task-modal1.module.css";

export type TaskModal1Type = {
  className?: string;
  onClose?: () => void;
};

const TaskModal1: NextPage<TaskModal1Type> = ({ className = "", onClose }) => {
  return (
    <div className={[styles.taskModal, className].join(" ")}>
      <section className={styles.frameParent}>
        <header className={styles.frameGroup}>
          <div className={styles.shareFavoriteIconsParent}>
            <img
              className={styles.shareFavoriteIcons}
              loading="lazy"
              alt=""
              src="/frame1.svg"
            />
            <img
              className={styles.shareFavoriteIcons1}
              loading="lazy"
              alt=""
              src="/frame-11.svg"
            />
          </div>
          <div className={styles.shareFavoriteOptions}>
            <div className={styles.shareFavoriteItems}>
              <a className={styles.share}>Share</a>
              <img className={styles.iconPairs} alt="" src="/frame-15.svg" />
            </div>
            <div className={styles.shareFavoriteItems1}>
              <input
                className={styles.favorite}
                placeholder="Favorite"
                type="text"
              />
              <img className={styles.frameIcon} alt="" src="/frame-3.svg" />
            </div>
          </div>
        </header>
        <div className={styles.customPropertiesParent}>
          <div className={styles.customProperties}>
            <h1 className={styles.title}>Title</h1>
            <div className={styles.propertyFields}>
              <div className={styles.propertyTypes}>
                <div className={styles.propertyTypeIcons}>
                  <img
                    className={styles.propertyTypeValues}
                    loading="lazy"
                    alt=""
                    src="/frame-41.svg"
                  />
                  <div className={styles.status}>Status</div>
                </div>
                <div className={styles.propertyTypeIcons1}>
                  <img
                    className={styles.frameIcon1}
                    loading="lazy"
                    alt=""
                    src="/frame-51.svg"
                  />
                  <div className={styles.priority}>Priority</div>
                </div>
                <div className={styles.propertyTypeIcons2}>
                  <img
                    className={styles.frameIcon2}
                    loading="lazy"
                    alt=""
                    src="/frame-61.svg"
                  />
                  <div className={styles.deadline}>Deadline</div>
                </div>
                <div className={styles.propertyTypeIcons3}>
                  <img
                    className={styles.frameIcon3}
                    loading="lazy"
                    alt=""
                    src="/frame-71.svg"
                  />
                  <div className={styles.description}>Description</div>
                </div>
              </div>
              <div className={styles.toDoStatus}>
                <div className={styles.toDo}>To do</div>
                <div className={styles.notSelected}>Not selected</div>
                <div className={styles.notSelected1}>Not selected</div>
                <div className={styles.notSelected2}>Not selected</div>
              </div>
            </div>
          </div>
          <button className={styles.customProperty}>
            <img
              className={styles.customFieldIcon}
              loading="lazy"
              alt=""
              src="/frame-8.svg"
            />
            <div className={styles.addCustomProperty}>Add custom property</div>
          </button>
        </div>
      </section>
      <div className={styles.taskModalChild} />
      <div className={styles.startWritingOr}>
        Start writing, or drag your own files here.
      </div>
    </div>
  );
};

export default TaskModal1;
