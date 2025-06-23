import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Template01.module.css";

const Template01 = () => {
  const navigate = useNavigate();

  const onTemplate01ContainerClick = useCallback(() => {
    navigate("/ready");
  }, [navigate]);

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
    <div
      className={styles.template01}
      onClick={onTemplate01ContainerClick}
      data-animate-on-scroll
    >
      <div className={styles.frameParent}>
        <div className={styles.heyWrapper}>
          <div className={styles.hey}>Hey</div>
        </div>
        <b className={styles.sarah}>SARAH</b>
      </div>
      <div className={styles.text}>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
    </div>
  );
};

export default Template01;
