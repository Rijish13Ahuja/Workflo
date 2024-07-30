import type { NextPage } from "next";
import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  const router = useRouter();

  const onFrameSelectClick = useCallback(() => {
    router.push("/login8");
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
      <form className={styles.frameParent}>
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
        <FormControl
          className={styles.parent}
          variant="standard"
          sx={{
            borderColor: "#999",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#ebebeb",
            borderRadius: "8px",
            width: "100%",
            height: "56px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "56px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "56px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "56px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "56px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#999",
              fontSize: 20,
              fontWeight: "Regular",
              fontFamily: "Inter",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "16px",
            },
          }}
          onClick={onFrameSelectClick}
        >
          <InputLabel color="secondary" />
          <Select
            color="secondary"
            disableUnderline
            displayEmpty
            IconComponent={() => (
              <img
                width="24px"
                height="24px"
                src="/password-label.svg"
                style={{ marginRight: "12px" }}
              />
            )}
          >
            <MenuItem>Password</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
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
      <div className={styles.signupPromptWrapper}>
        <div className={styles.signupPrompt}>
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

export default FrameComponent2;
