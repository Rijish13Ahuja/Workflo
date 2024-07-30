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
import styles from "./main21.module.css";

export type Main2Type = {
  className?: string;
};

const Main2: NextPage<Main2Type> = ({ className = "" }) => {
  const router = useRouter();

  const onNewAccountTextClick = useCallback(() => {
    router.push("/login1");
  }, [router]);

  return (
    <div className={[styles.main, className].join(" ")}>
      <h1 className={styles.welcomeToWorkfloContainer}>
        <span>{`Welcome to `}</span>
        <span className={styles.workflo}>Workflo</span>
        <span>!</span>
      </h1>
      <div className={styles.content}>
        <form className={styles.actions}>
          <div className={styles.emailInput}>
            <TextField
              className={styles.email}
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
            <div className={styles.email1}>
              <div className={styles.div}>*************</div>
              <img
                className={styles.emailSuffixIcon}
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
            Login
          </Button>
        </form>
      </div>
      <div className={styles.signup}>
        <div className={styles.dontHaveAn}>Don’t have an account? Create a</div>
        <div className={styles.newAccount} onClick={onNewAccountTextClick}>
          <span>new account</span>
          <span className={styles.span}>.</span>
        </div>
      </div>
    </div>
  );
};

export default Main2;
