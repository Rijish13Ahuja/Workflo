import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./tags-header.module.css";

export type TagsHeaderType = {
  className?: string;
  undrawOpinionReJix41?: string;
  introducingTags?: string;
  easilyCategorizeAndFindYo?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
};

const TagsHeader: NextPage<TagsHeaderType> = ({
  className = "",
  undrawOpinionReJix41,
  introducingTags,
  easilyCategorizeAndFindYo,
  propPadding,
  propGap,
}) => {
  const tagsHeaderStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  return (
    <div
      className={[styles.tagsHeader, className].join(" ")}
      style={tagsHeaderStyle}
    >
      <img
        className={styles.undrawOpinionReJix41Icon}
        loading="lazy"
        alt=""
        src={undrawOpinionReJix41}
      />
      <div className={styles.tagsHeaderTitles}>
        <div className={styles.introducingTags}>{introducingTags}</div>
        <div className={styles.easilyCategorizeAnd}>
          {easilyCategorizeAndFindYo}
        </div>
      </div>
    </div>
  );
};

export default TagsHeader;
