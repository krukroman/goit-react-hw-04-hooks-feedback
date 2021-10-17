import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <p className={s.text}>
          Good:
          <span className={s.value}>{good}</span>
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>
          Neutral:
          <span className={s.value}>{neutral}</span>
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>
          Bad:
          <span className={s.value}>{bad}</span>
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>
          Total:
          <span className={s.value}>{total}</span>
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>
          Positive feedback:
          <span className={s.value}>{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
