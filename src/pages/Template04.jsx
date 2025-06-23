import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Template04.module.css";
import Confetti from 'react-confetti';

const Template04 = () => {
  const navigate = useNavigate();
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

  const onFrameClick = useCallback(() => {
    navigate("/note");
  }, [navigate]);

  return (
    <div className={styles.template04} data-animate-on-scroll>
      <Confetti />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <img className={styles.frameChild} alt="" src="/frame-101.svg" />
          <div className={styles.groupParent}>
            <img className={styles.frameItem} alt="" src="/group-11.svg" />
            <div className={styles.clickTheCake}>**Click the cake</div>
          </div>
          <div className={styles.audioParent}>
            <audio className={styles.audio} autoPlay controls>
              <source src="/happy-birthday.mp3" />
            </audio>
            <div className={styles.audio} />
          </div>
        </div>
        <div className={styles.happyBirthdayParent}>
          <b className={styles.happyBirthday}>Happy Birthday</b>
          <div className={styles.toMyFavoriteContainer}>
            {`TO MY FAVORITE `}REDHAWK
          </div>
        </div>
        <div className={styles.groupContainer}>
          <img className={styles.frameInner} alt="" src="/group-31.svg" />
          <img
            className={styles.frameIcon}
            alt=""
            src="/frame-11.svg"
            onClick={onFrameClick}
          />
          <img className={styles.groupIcon} alt="" src="/group-41.svg" />
        </div>
      </div>
    </div>
  );
};

export default Template04;
