import styles from './Values.module.scss';

const Values = () => {
  return (
    <div className={styles.ourValuesSection}>
      <img alt="icon" src={process.env.PUBLIC_URL + '/icons/1.png'} className={styles.icon} />
      <p className={styles.valueP}>
        Dbamy o każdy szczegół, aby każdy aspekt strony internetowej działa poprawnie i spełniał Twoje wymagania
      </p>

      <img alt="icon" src={process.env.PUBLIC_URL + '/icons/3.png'} className={styles.icon} />
      <p className={styles.valueP}>
        Skupiamy się na Twoich potrzebach, jasna i skuteczna komunikacja jest niezbędna, aby być pewnym, że spełnimy wszystkie Twoje wymagania
      </p>

      <img alt="icon" src={process.env.PUBLIC_URL + '/icons/2.png'} className={styles.icon} />
      <p className={styles.valueP}>
        Wkładamy całe serce w to co robimy, jesteśmy dumnie z aplikacji, które dostarczamy
      </p>

      <img alt="icon" src={process.env.PUBLIC_URL + '/icons/6.png'} className={styles.icon} />
      <p className={styles.valueP}>
        Pracujemy w zespole ekspertów, którzy poradzą sobie z każdym zadaniem i jak najszybciej dostarczą Ci gotową aplikację
      </p>

      <img alt="icon" src={process.env.PUBLIC_URL + '/icons/4.png'} className={styles.icon} />
      <p className={styles.valueP}>
        Stale się rozwijamy, jesteśmy na bieżąco z najnowszymi trendami i technologiami
      </p>

      <img alt="icon" src={process.env.PUBLIC_URL + '/icons/5.png'} className={styles.icon} />
      <p className={styles.valueP}>
        Każdy projekt - mały czy duży - traktujemy jako równie ważny
      </p>

      <img alt="icon" src={process.env.PUBLIC_URL + '/icons/7.png'} className={styles.icon} />
      <p className={styles.valueP}>
        Tworzymy unikalne i wyróżniające się na tle konkurencji projekty
      </p>
    </div>
  );
};

export default Values;