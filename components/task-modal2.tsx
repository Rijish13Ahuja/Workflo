import type { NextPage } from "next";
import Layout from "./layout";
import styles from "./task-modal2.module.css";

export type TaskModal2Type = {
  className?: string;
  onClose?: () => void;
};

const TaskModal2: NextPage<TaskModal2Type> = ({ className = "", onClose }) => {
  return (
    <div className={[styles.taskModal, className].join(" ")}>
      <Layout inProgress="Finished" />
      <div className={styles.taskModalChild} />
      <div className={styles.startWritingOr}>
        Start writing, or drag your own files here.
      </div>
    </div>
  );
};

export default TaskModal2;
