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
import styles from "./main1.module.css";

export type Main1Type = {
  className?: string;
};

const Main1: NextPage<Main1Type> = ({ className = "" }) => {
  const router = useRouter();

  const onInputFieldsClick = useCallback(() => {
    router.push("/login6");
  }, [router]);

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
      <form className={styles.loginFields}>
        <TextField
          className={styles.inputFields}
          placeholder="Your email"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#999" },
            "& .MuiInputBase-root": {
              height: "56px",
              backgroundColor: "#ebebeb",
              borderRadius: "8px",
              fontSize: "20px",
            },
            "& .MuiInputBase-input": { color: "#999" },
          }}
          onClick={onInputFieldsClick}
        />
        <TextField
          className={styles.inputFields1}
          placeholder="Password"
          variant="outlined"
          InputProps={{
            endAdornment: <img width="24px" height="24px" src="/frame.svg" />,
          }}
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "56px",
              backgroundColor: "#ebebeb",
              paddingRight: "12px",
              borderRadius: "8px",
              fontSize: "20px",
            },
            "& .MuiInputBase-input": { color: "#999" },
          }}
        />
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
      <div className={styles.footer}>
        <div className={styles.signup}>
          <div className={styles.dontHaveAn}>
            Don’t have an account? Create a
          </div>
          <div className={styles.newAccount} onClick={onNewAccountTextClick}>
            <span>new account</span>
            <span className={styles.span}>.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1;
