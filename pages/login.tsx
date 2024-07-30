import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent from "../components/frame-component";
import styles from "./login.module.css";

const Login: NextPage = () => {
  const router = useRouter();

  const onFrameInputClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.login}>
      <FrameComponent
        frame309Placeholder="Your email"
        onFrameInputClick={onFrameInputClick}
      />
    </div>
  );
};

export default Login;
