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
import styles from "./main.module.css";

export type MainType = {
  className?: string;
  inputFieldsPlaceholder?: string;

  /** Action props */
  onInputFieldsClick?: () => void;
  onInputLabelsClick?: () => void;
};

const Main: NextPage<MainType> = ({
  className = "",
  inputFieldsPlaceholder,
  onInputFieldsClick,
  onInputLabelsClick,
}) => {
  const router = useRouter();

  const onInputFieldsClick1 = useCallback(() => {
    router.push("/login4");
  }, [router]);

  const onLogInTextClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className={[styles.main, className].join(" ")}>
      <h1 className={styles.welcomeToWorkfloContainer}>
        <span>{`Welcome to `}</span>
        <span className={styles.workflo}>Workflo</span>
        <span>!</span>
      </h1>
      <form className={styles.credentials}>
        <TextField
          className={styles.inputFields}
          placeholder={inputFieldsPlaceholder}
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
          placeholder="Your email"
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
          onClick={onInputLabelsClick}
        />
        <TextField
          className={styles.inputFields2}
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
          Sign up
        </Button>
      </form>
      <div className={styles.account}>
        <div className={styles.loginInfo}>
          <div className={styles.alreadyHaveAn}>Already have an account?</div>
          <div className={styles.logIn} onClick={onLogInTextClick}>
            <span>Log in</span>
            <span className={styles.span}>.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
