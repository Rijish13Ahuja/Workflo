import type { NextPage } from "next";
import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  const router = useRouter();

  const onLogInTextClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className={[styles.welcomeToWorkfloParent, className].join(" ")}>
      <h1 className={styles.welcomeToWorkfloContainer}>
        <span>{`Welcome to `}</span>
        <span className={styles.workflo}>Workflo</span>
        <span>!</span>
      </h1>
      <div className={styles.frameWrapper}>
        <form className={styles.frameParent}>
          <div className={styles.contactInfoParent}>
            <TextField
              className={styles.contactInfo}
              placeholder="Joe Gardner"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "56px",
                  backgroundColor: "#ebebeb",
                  borderRadius: "8px",
                  fontSize: "20px",
                },
                "& .MuiInputBase-input": { color: "#606060" },
              }}
            />
            <TextField
              className={styles.contactInfo1}
              placeholder="jgardner@gmail.com"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "56px",
                  backgroundColor: "#ebebeb",
                  borderRadius: "8px",
                  fontSize: "20px",
                },
                "& .MuiInputBase-input": { color: "#606060" },
              }}
            />
            <div className={styles.contactInfo2}>
              <div className={styles.emptyContactWrapper}>
                <div className={styles.emptyContact}>*************</div>
              </div>
              <img
                className={styles.emptyInfoIcon}
                alt=""
                src="/email-suffix.svg"
              />
            </div>
          </div>
          <Button
            className={styles.primary}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "20",
              background: "linear-gradient(180deg, #4c38c2, #2f2188)",
              border: "#4b36cd solid 1px",
              borderRadius: "8px",
              "&:hover": {
                background: "linear-gradient(180deg, #4c38c2, #2f2188)",
              },
              height: 52,
            }}
          >
            Sign up
          </Button>
        </form>
      </div>
      <div className={styles.alreadyHaveAnAccountParent}>
        <div className={styles.alreadyHaveAn}>Already have an account?</div>
        <div className={styles.logIn} onClick={onLogInTextClick}>
          <span>Log in</span>
          <span className={styles.span}>.</span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
