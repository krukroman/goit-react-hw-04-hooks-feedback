import PropTypes from 'prop-types';
import FeedbackOption from './FeedbackOption';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.list}>
      {Object.keys(options).map(key => {
        return (
          <FeedbackOption
            key={key}
            name={key}
            onLeaveFeedback={() => onLeaveFeedback(key)}
          />
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
