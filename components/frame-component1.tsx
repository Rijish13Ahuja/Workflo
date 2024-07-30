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
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
  fieldLabelsPlaceholder?: string;
  fieldLabelsPlaceholder1?: string;

  /** Action props */
  onFieldLabelsClick?: () => void;
  onCredentialsClick?: () => void;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  fieldLabelsPlaceholder,
  fieldLabelsPlaceholder1,
  onFieldLabelsClick,
  onCredentialsClick,
}) => {
  const router = useRouter();

  const onFieldLabelsClick1 = useCallback(() => {
    router.push("/login2");
  }, [router]);

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
          <div className={styles.fieldLabelsParent}>
            <TextField
              className={styles.fieldLabels}
              placeholder={fieldLabelsPlaceholder}
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "56px",
                  backgroundColor: "#ebebeb",
                  borderRadius: "8px",
                  fontSize: "20px",
                },
                "& .MuiInputBase-input": { color: "#999" },
              }}
              onClick={onFieldLabelsClick}
            />
            <TextField
              className={styles.fieldLabels1}
              placeholder={fieldLabelsPlaceholder1}
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "56px",
                  backgroundColor: "#ebebeb",
                  borderRadius: "8px",
                  fontSize: "20px",
                },
                "& .MuiInputBase-input": { color: "#999" },
              }}
              onClick={onFieldLabelsClick}
            />
            <TextField
              className={styles.fieldLabels2}
              placeholder="Password"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img width="24px" height="24px" src="/input-container.svg" />
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
              onClick={onCredentialsClick}
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
            Sign up
          </Button>
        </form>
      </div>
      <div className={styles.loginFooter}>
        <div className={styles.alreadyHaveAn}>Already have an account?</div>
        <div className={styles.logIn} onClick={onLogInTextClick}>
          <span>Log in</span>
          <span className={styles.span}>.</span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
