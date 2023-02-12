import styles from './Container.module.scss';
import useReadingProgress from "./useReadingProgress";

const Container = (props) => {
  const completion = useReadingProgress();
  return (
    <>
      <span className={styles.progessBarBackground}></span>
      <span className={styles.progessbar}
        style={{transform: `translateY(${completion - 100}%)`}}></span>
      <div className={styles.container}>
        {props.children}
      </div>
    </>
  );
};

export default Container;