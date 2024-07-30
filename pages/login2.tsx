import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Main from "../components/main";
import styles from "./login2.module.css";

const Login2: NextPage = () => {
  const router = useRouter();

  const onInputFieldsClick = useCallback(() => {
    router.push("/login4");
  }, [router]);

  return (
    <div className={styles.login}>
      <Main
        inputFieldsPlaceholder="Full name"
        onInputFieldsClick={onInputFieldsClick}
      />
    </div>
  );
};

export default Login2;
