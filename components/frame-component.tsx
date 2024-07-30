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
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  const router = useRouter();

  const onApsAConcepoDoProjetoEmClick = useCallback(() => {
    router.push("/login7");
  }, [router]);

  const onNewAccountTextClick = useCallback(() => {
    router.push("/login1");
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
          <div className={styles.frameGroup}>
            <TextField
              className={styles.frameChild}
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
            <TextField
              className={styles.apsAConcepoDoProjetoEm}
              placeholder="Password"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img width="24px" height="24px" src="/placeholder.svg" />
                ),
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
              onClick={onApsAConcepoDoProjetoEmClick}
            />
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
      <div className={styles.dontHaveAnAccountCreateParent}>
        <div className={styles.dontHaveAn}>Don’t have an account? Create a</div>
        <div className={styles.newAccount} onClick={onNewAccountTextClick}>
          <span>new account</span>
          <span className={styles.span}>.</span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
