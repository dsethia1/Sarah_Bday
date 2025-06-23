import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Template2.module.css";

const Template2 = () => {
  const navigate = useNavigate();

  const onTemplate2ContainerClick = useCallback(() => {
    navigate("/template03");
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
      className={styles.template2}
      onClick={onTemplate2ContainerClick}
      data-animate-on-scroll
    >
      <div className={styles.heyParent}>
        <div className={styles.hey}>Hey</div>
        <b className={styles.sarah}>SARAH</b>
        <div className={styles.howsItBeing}>HOWS IT BEING LEGAL?</div>
      </div>
      <div className={styles.text}>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
    </div>
  );
};

export default Template2;
