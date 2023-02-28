import styles from './Cards.module.scss';
import clsx from 'clsx';

const Cards = props => {

  return (
    // <div className={styles.tutorial}>
    //   <div className={clsx(styles.card, styles.middle)}>
    //     <div className={styles.front}>
    //       <h2 className={styles.hFront}>{props.title}</h2>
    //     </div>

    //     <div className={styles.back}>
    //       <div className={styles.iconDiv}>
    //         <img alt="icon" src={process.env.PUBLIC_URL + '/icons/' + props.cardImgId + '.png'} />
    //       </div>
    //       <div className={clsx(styles.back_content, styles.middle)}>
    //         <p className={styles.pBack}>{props.desc}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className={styles.a}> 
      <div className={styles.b}> 

        <div className={styles.d}>
          <h1>{props.title}</h1>
        </div>

        <div className={styles.c}>
          <div className={styles.e}>
            <img alt="icon" src={process.env.PUBLIC_URL + '/icons/' + props.cardImgId + '.png'} />
          </div>
          <p>
            {props.desc}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Cards;