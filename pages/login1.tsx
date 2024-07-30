import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent1 from "../components/frame-component1";
import styles from "./login1.module.css";

const Login1: NextPage = () => {
  const router = useRouter();

  const onFieldLabelsClick = useCallback(() => {
    router.push("/login2");
  }, [router]);

  return (
    <div className={styles.login}>
      <FrameComponent1
        fieldLabelsPlaceholder="Full name"
        fieldLabelsPlaceholder1="Your email"
        onFieldLabelsClick={onFieldLabelsClick}
      />
    </div>
  );
};

export default Login1;
