import styles from './Values.module.scss';
import clsx from 'clsx';
import { FaAngleRight } from "react-icons/fa";

const Values = () => {
  return (
    <div className={styles.ourValuesSection}>
      <p className={styles.valueP}>
        <FaAngleRight />  Tworzymy unikalne i wyróżniające się na tle konkurencji projekty
      </p>

      <p className={styles.valueP}>
        <FaAngleRight />  Skupiamy się na Twoich potrzebach, jasna i skuteczna komunikacja jest niezbędna, aby być pewnym, że spełnimy wszystkie Twoje wymagania
      </p>

      <p className={styles.valueP}>
        <FaAngleRight />  Pracujemy w zespole ekspertów, którzy poradzą sobie z każdym zadaniem i jak najszybciej dostarczą Ci gotową aplikację
      </p>

      <p className={styles.valueP}>
        <FaAngleRight />  Dbamy o każdy szczegół, aby każdy aspekt strony internetowej działa poprawnie i spełniał Twoje wymagania
      </p>

      <p className={styles.valueP}>
        <FaAngleRight />  Stale się rozwijamy, jesteśmy na bieżąco z najnowszymi trendami i technologiami
      </p>

      <p className={styles.valueP}>
        <FaAngleRight />  Każdy projekt - mały czy duży - traktujemy jako równie ważny
      </p>

      <p className={styles.valueP}>
        <FaAngleRight />  Wkładamy całe serce w to co robimy, jesteśmy dumnie z aplikacji, które dostarczamy
      </p>
    </div>
  );
};

export default Values;