import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Template05.module.css";

const Template05 = () => {
  const navigate = useNavigate();

  const onNoteContainerClick = useCallback(() => {
    navigate("/baddie");
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
      className={styles.note}
      onClick={onNoteContainerClick}
      data-animate-on-scroll
    >
      <div className={styles.bottomConfettiParent}>
        <div className={styles.bottomConfetti}>
          <img
            className={styles.bottomConfettiChild}
            alt=""
            src="/group-3.svg"
          />
          <img
            className={styles.bottomConfettiItem}
            alt=""
            src="/group-4.svg"
          />
        </div>
        <div className={styles.topConfetti}>
          <img className={styles.topConfettiChild} alt="" src="/frame-10.svg" />
          <img className={styles.topConfettiItem} alt="" src="/group-11.svg" />
        </div>
        <div className={styles.frontCard}>
          <div className={styles.dearSarahIContainer}>
            <p className={styles.dearSarah}>Dear Sarah,</p>
            <p className={styles.dearSarah}>&nbsp;</p>
            <p className={styles.iHopeYou}>
              I hope you have an amazing 18th Birthday. Thank you for being my
              Fortnite buddy, a really fun person to yap with and of course
              always down to go cafe hopping with me. From our Great America
              runs to badminton nights, I’m really glad I got to know you. Even
              though I’ll be 2 hours in the future, I’ll try not to give any
              spoilers. Have fun and even if you do become a tree hugger, I’ll
              still be ROOTING for you 2117 miles away. I’m going to miss our
              late-night rants and impulsive plans, but I know you’re going to
              do amazing things. Don’t forget to keep in touch (remember I know
              where you live).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template05;
