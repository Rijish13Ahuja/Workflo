import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent from "../components/frame-component";
import styles from "./login6.module.css";

const Login6: NextPage = () => {
  const router = useRouter();

  const onApsAConcepoDoProjetoEmClick = useCallback(() => {
    router.push("/login7");
  }, [router]);

  return (
    <div className={styles.login}>
      <FrameComponent
        frame309Placeholder="jgardner@gmail.com"
        onApsAConcepoDoProjetoEmClick={onApsAConcepoDoProjetoEmClick}
      />
    </div>
  );
};

export default Login6;
