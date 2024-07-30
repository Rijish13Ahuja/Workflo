import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import TaskModal1 from "./task-modal1";
import PortalPopup from "./portal-popup";
import styles from "./task-columns.module.css";

export type TaskColumnsType = {
  className?: string;
  toDo?: string;
  implementUserAuthenticati?: string;
  developAndIntegrateUserAu?: string;
  urgent?: string;
  emptyTaskDate?: string;
  hrAgo?: string;
};

const TaskColumns: NextPage<TaskColumnsType> = ({
  className = "",
  toDo,
  implementUserAuthenticati,
  developAndIntegrateUserAu,
  urgent,
  emptyTaskDate,
  hrAgo,
}) => {
  const [isTaskModalOpen, setTaskModalOpen] = useState(false);

  const openTaskModal = useCallback(() => {
    setTaskModalOpen(true);
  }, []);

  const closeTaskModal = useCallback(() => {
    setTaskModalOpen(false);
  }, []);

  return (
    <>
      <div className={[styles.taskColumns, className].join(" ")}>
        <div className={styles.taskHeaders}>
          <div className={styles.toDo}>{toDo}</div>
          <img
            className={styles.emptyTaskHeader}
            loading="lazy"
            alt=""
            src="/frame-17.svg"
          />
        </div>
        <div className={styles.taskRows}>
          <div className={styles.taskRowContainer}>
            <div className={styles.taskDetailsContainer}>
              <div className={styles.taskItems}>
                <div className={styles.implementUserAuthentication}>
                  {implementUserAuthenticati}
                </div>
                <div className={styles.developAndIntegrate}>
                  {developAndIntegrateUserAu}
                </div>
              </div>
            </div>
            <div className={styles.taskUrgency}>
              <div className={styles.urgent}>{urgent}</div>
            </div>
            <div className={styles.emptyUrgency}>
              <img
                className={styles.emptyTaskIcon}
                loading="lazy"
                alt=""
                src="/frame-18.svg"
              />
              <div className={styles.emptyTaskDate}>{emptyTaskDate}</div>
            </div>
          </div>
          <div className={styles.taskTime}>
            <div className={styles.hrAgo}>{hrAgo}</div>
          </div>
        </div>
        <Button
          className={styles.taskActions}
          endIcon={<img width="24px" height="24px" src="/frame-19.svg" />}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#e2e1e1",
            fontSize: "16",
            background: "linear-gradient(180deg, #3a3a3a, #202020)",
            borderRadius: "8px",
            "&:hover": {
              background: "linear-gradient(180deg, #3a3a3a, #202020)",
            },
            height: 40,
          }}
          onClick={openTaskModal}
        >
          Add new
        </Button>
      </div>
      {isTaskModalOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTaskModal}
        >
          <TaskModal1 onClose={closeTaskModal} />
        </PortalPopup>
      )}
    </>
  );
};

export default TaskColumns;
