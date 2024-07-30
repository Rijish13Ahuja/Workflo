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
import TagsHeader from "./tags-header";
import TaskColumns from "./task-columns";
import ProgressColumns from "./progress-columns";
import styles from "./dashboard.module.css";

export type DashboardType = {
  className?: string;
};

const Dashboard: NextPage<DashboardType> = ({ className = "" }) => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/login8");
  }, [router]);

  return (
    <form className={[styles.dashboard, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/frame-330@2x.png"
                />
                <a className={styles.joeGardner}>Joe Gardner</a>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
                <img
                  className={styles.frameIcon1}
                  loading="lazy"
                  alt=""
                  src="/frame-1.svg"
                />
                <img className={styles.frameIcon2} alt="" src="/frame-2.svg" />
              </div>
              <div
                className={styles.logoutWrapper}
                onClick={onFrameContainerClick}
              >
                <a className={styles.logout}>Logout</a>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent3}>
              <div className={styles.menuItemsParent}>
                <TextField
                  className={styles.menuItems}
                  placeholder="Home"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <img width="24px" height="24px" src="/frame-3.svg" />
                    ),
                  }}
                  sx={{
                    "& fieldset": { borderColor: "#ddd" },
                    "& .MuiInputBase-root": {
                      height: "40px",
                      backgroundColor: "#f4f4f4",
                      paddingLeft: "8px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": {
                      paddingLeft: "14px",
                      color: "#797979",
                    },
                  }}
                />
                <div className={styles.menuItems1}>
                  <img
                    className={styles.frameIcon3}
                    loading="lazy"
                    alt=""
                    src="/frame-4.svg"
                  />
                  <div className={styles.boards}>Boards</div>
                </div>
                <div className={styles.menuItems2}>
                  <img
                    className={styles.frameIcon4}
                    loading="lazy"
                    alt=""
                    src="/frame-5.svg"
                  />
                  <a className={styles.settings}>Settings</a>
                </div>
                <div className={styles.menuItems3}>
                  <img
                    className={styles.frameIcon5}
                    loading="lazy"
                    alt=""
                    src="/frame-6.svg"
                  />
                  <div className={styles.teams}>Teams</div>
                </div>
                <div className={styles.menuItems4}>
                  <img
                    className={styles.frameIcon6}
                    loading="lazy"
                    alt=""
                    src="/frame-7.svg"
                  />
                  <a className={styles.analytics}>Analytics</a>
                </div>
              </div>
              <Button
                className={styles.primary}
                endIcon={<img width="24px" height="24px" src="/frame-8.svg" />}
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
                Create new task
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper2}>
          <div className={styles.frameParent4}>
            <img
              className={styles.frameIcon7}
              loading="lazy"
              alt=""
              src="/frame-9.svg"
            />
            <div className={styles.downloadTheAppParent}>
              <div className={styles.downloadTheApp}>Download the app</div>
              <div
                className={styles.getTheFull}
              >{`Get the full experience `}</div>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.rootWrapper}>
        <section className={styles.root}>
          <div className={styles.greeting}>
            <div className={styles.innerGreeting}>
              <h1 className={styles.goodMorningJoe}>Good morning, Joe!</h1>
              <div className={styles.helpContainer}>
                <a className={styles.helpFeedback}>{`Help & feedback`}</a>
                <img className={styles.frameIcon8} alt="" src="/frame-10.svg" />
              </div>
            </div>
            <nav className={styles.tagsHeaderParent}>
              <TagsHeader
                undrawOpinionReJix41="/undraw-opinion-re-jix4-1.svg"
                introducingTags="Introducing tags"
                easilyCategorizeAndFindYo="Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient."
              />
              <TagsHeader
                undrawOpinionReJix41="/undraw-share-link-re-54rx-1.svg"
                introducingTags="Share Notes Instantly"
                easilyCategorizeAndFindYo="Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options."
                propPadding="14px 15px"
                propGap="16px"
              />
              <TagsHeader
                undrawOpinionReJix41="/undraw-undraw-posts-givd-1-5vi7-1.svg"
                introducingTags="Access Anywhere"
                easilyCategorizeAndFindYo="Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer."
                propPadding="23px 15px"
                propGap="16px"
              />
            </nav>
            <div className={styles.searchContainerParent}>
              <TextField
                className={styles.searchContainer}
                placeholder="Search"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="24px" height="24px" src="/frame-11.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#e9e9e9" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#fff",
                    paddingRight: "8px",
                    borderRadius: "8px",
                  },
                  "& .MuiInputBase-input": { color: "#797979" },
                  width: "196px",
                }}
              />
              <div className={styles.primaryFeatures}>
                <div className={styles.featuresList}>
                  <TextField
                    className={styles.featuresTitle}
                    placeholder="Calendar view"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img width="24px" height="24px" src="/frame-12.svg" />
                      ),
                    }}
                    sx={{
                      "& fieldset": { border: "none" },
                      "& .MuiInputBase-root": {
                        height: "40px",
                        backgroundColor: "#f4f4f4",
                        paddingRight: "8px",
                      },
                      "& .MuiInputBase-input": { color: "#797979" },
                    }}
                  />
                  <button className={styles.featuresTitle1}>
                    <div className={styles.automation}>Automation</div>
                    <img
                      className={styles.frameIcon9}
                      alt=""
                      src="/frame-13.svg"
                    />
                  </button>
                  <div className={styles.featuresTitle2}>
                    <div className={styles.filter}>Filter</div>
                    <img
                      className={styles.frameIcon10}
                      alt=""
                      src="/frame-14.svg"
                    />
                  </div>
                  <div className={styles.featuresTitle3}>
                    <a className={styles.share}>Share</a>
                    <img
                      className={styles.frameIcon11}
                      alt=""
                      src="/frame-15.svg"
                    />
                  </div>
                </div>
                <button className={styles.primary1}>
                  <div className={styles.button}>Create new</div>
                  <img
                    className={styles.emptyPrimaryIcon}
                    alt=""
                    src="/frame-16.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.taskManagement}>
            <TaskColumns
              toDo="To do"
              implementUserAuthenticati="Implement User Authentication"
              developAndIntegrateUserAu="Develop and integrate user authentication using email and password."
              urgent="Urgent"
              emptyTaskDate="2024-08-15"
              hrAgo="1 hr ago"
            />
            <div className={styles.progressTracking}>
              <div className={styles.progressColumns}>
                <div className={styles.inProgress}>In progress</div>
                <img
                  className={styles.progressTimeIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-17.svg"
                />
              </div>
              <ProgressColumns
                designHomePageUI="Design Home Page UI"
                developAndIntegrateUserAu="Develop and integrate user authentication using email and password."
                medium="Medium"
                emptyProgressDate="2024-08-15"
                hrAgo="1 hr ago"
              />
              <ProgressColumns
                designHomePageUI="Conduct User Feedback Survey"
                developAndIntegrateUserAu="Collect and analyze user feedback to improve app features."
                medium="Low"
                emptyProgressDate="2024-08-05"
                hrAgo="3 hr ago"
              />
              <Button
                className={styles.progressColumns1}
                endIcon={<img width="24px" height="24px" src="/frame-23.svg" />}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#e2e1e1",
                  fontSize: "16",
                  background: "linear-gradient(180deg, #3a3a3a, #202020)",
                  borderRadius: "8px",
                  "&:hover": {
                    background: "linear-gradient(180deg, #3a3a3a, #202020)",
                  },
                  height: 40,
                }}
              >
                Add new
              </Button>
            </div>
            <TaskColumns
              toDo="Under review"
              implementUserAuthenticati="Integrate Cloud Storage"
              developAndIntegrateUserAu="Enable cloud storage for note backup and synchronization."
              urgent="Urgent"
              emptyTaskDate="2024-08-20"
              hrAgo="2 days  ago"
            />
            <TaskColumns
              toDo="Finished"
              implementUserAuthenticati="Test Cross-browser Compatibility"
              developAndIntegrateUserAu="Ensure the app works seamlessly across different web browsers."
              urgent="Medium"
              emptyTaskDate="2024-07-30"
              hrAgo="4 days ago"
            />
          </div>
        </section>
      </main>
    </form>
  );
};

export default Dashboard;
