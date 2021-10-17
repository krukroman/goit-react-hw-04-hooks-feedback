import PropTypes from 'prop-types';
import FeedbackOption from './FeedbackOption';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.list}>
      {options.map(option => {
        return (
          <FeedbackOption
            key={option}
            name={option}
            onLeaveFeedback={() => onLeaveFeedback(option)}
          />
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
