import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent1 from "../components/frame-component1";
import styles from "./login9.module.css";

const Login9: NextPage = () => {
  const router = useRouter();

  const onCredentialsClick = useCallback(() => {
    router.push("/login10");
  }, [router]);

  return (
    <div className={styles.login}>
      <FrameComponent1
        fieldLabelsPlaceholder="Joe Gardner"
        fieldLabelsPlaceholder1="jgardner@gmail.com"
        onCredentialsClick={onCredentialsClick}
      />
    </div>
  );
};

export default Login9;
