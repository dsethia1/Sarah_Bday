import { useEffect } from "react";
import { Button } from "@mui/material";
import styles from "./Template03.module.css";


const Template03 = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      },
    );
    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.template03} data-animate-on-scroll>
      <div className={styles.frameParent}>
        <div className={styles.heyParent}>
          <div className={styles.hey}>Hey</div>
          <b className={styles.sarah}>SARAH</b>
          <div className={styles.howsItBeing}>HOWS IT BEING LEGAL?</div>
          <div className={styles.areYouReady}>ARE YOU READY?</div>
        </div>
        <div className={styles.frameGroup}>
          <Button
            className={styles.frameChild}
            disableElevation
            color="primary"
            variant="contained"
            href="/template04"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 143, height: 71 }}
          >
            YES
          </Button>
          <Button
            className={styles.frameItem}
            disableElevation
            color="primary"
            variant="contained"
            href="/template04"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 143, height: 71 }}
          >
            OFC
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Template03;
