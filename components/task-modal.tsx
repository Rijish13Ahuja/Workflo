import type { NextPage } from "next";
import Layout from "./layout";
import styles from "./task-modal.module.css";

export type TaskModalType = {
  className?: string;
  onClose?: () => void;
};

const TaskModal: NextPage<TaskModalType> = ({ className = "", onClose }) => {
  return (
    <div className={[styles.taskModal, className].join(" ")}>
      <Layout inProgress="In progress" />
      <div className={styles.empty} />
      <div className={styles.startWritingOr}>
        Start writing, or drag your own files here.
      </div>
    </div>
  );
};

export default TaskModal;
