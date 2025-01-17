import type { NextPage } from "next";
import Layout from "./layout";
import styles from "./task-modal1.module.css";

export type TaskModal1Type = {
  className?: string;
};

const TaskModal1: NextPage<TaskModal1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.taskModal, className].join(" ")}>
      <Layout inProgress="Under review" />
      <div className={styles.taskModalChild} />
      <div className={styles.startWritingOr}>
        Start writing, or drag your own files here.
      </div>
    </div>
  );
};

export default TaskModal1;
