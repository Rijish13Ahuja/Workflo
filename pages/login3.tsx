import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Main from "../components/main";
import styles from "./login3.module.css";

const Login3: NextPage = () => {
  const router = useRouter();

  const onInputLabelsClick = useCallback(() => {
    router.push("/login9");
  }, [router]);

  return (
    <div className={styles.login}>
      <Main
        inputFieldsPlaceholder="Joe Gardner"
        onInputLabelsClick={onInputLabelsClick}
      />
    </div>
  );
};

export default Login3;
