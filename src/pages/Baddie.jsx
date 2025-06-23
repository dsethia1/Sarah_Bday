import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Baddie.module.css";

const Baddie = () => {
  const navigate = useNavigate();

  const onBaddieContainerClick = useCallback(() => {
    navigate("/note");
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
      className={styles.baddie}
      onClick={onBaddieContainerClick}
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
        <div className={styles.backCard}>
          <div className={styles.backCardInner}>
            <div className={styles.groupParent}>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.img1260Edited1Parent}>
                    <img
                      className={styles.img1260Edited1}
                      alt=""
                      src="/img-1260--edited-1@2x.png"
                    />
                    <img
                      className={styles.img9794Edited1}
                      alt=""
                      src="/img-9794--edited-1@2x.png"
                    />
                  </div>
                  <img className={styles.su1Icon} alt="" src="/su-1@2x.png" />
                </div>
                <div className={styles.bEf6749889b06Ccd41906f90aParent}>
                  <img
                    className={styles.bEf6749889b06Ccd41906f90aIcon}
                    alt=""
                    src="/3381428bef6749889b06ccd41906f90a--edited-1@2x.png"
                  />
                  <video
                    className={styles.wrapper}
                    autoPlay
                    muted
                    loop
                    controls
                  >
                    <source src="/img_5912.mov" />
                  </video>
                  <img
                    className={styles.img0310Edited1}
                    alt=""
                    src="/img-0310--edited-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.seattleIsGetting}>
                SEATTLE IS GETTING A BADDIE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baddie;
