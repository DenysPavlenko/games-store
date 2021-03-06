import React from 'react';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography/typography';
import './progress-item.sass';

const ProgressItem = ({ title, percents, radius }) => {
  const circle = Math.PI * radius * 2;
  return (
    <div className="progress-item">
      <div className="progress-item-bar">
        <svg
          viewBox="0 0 75 75"
          height="75"
          width="75"
          version="1.1"
          className="progress-item-svg"
        >
          <circle
            strokeWidth="3"
            cx="50%"
            cy="50%"
            r={radius}
            className="progress-item-circle-bottom"
          />
          <circle
            strokeWidth="3"
            cx="50%"
            cy="50%"
            r={radius}
            className="progress-item-circle-top"
            strokeDasharray={`${circle}, ${circle}`}
            strokeDashoffset={circle * ((100 - percents) / 100)}
          />
        </svg>
        <Typography component="h6" className="progress-item-percents mb-0">
          {percents}%
        </Typography>
      </div>
      <Typography component="h5" className="progress-item-title mb-0">
        {title}
      </Typography>
    </div>
  );
};

ProgressItem.defaultProps = {
  radius: 36,
};

ProgressItem.propTypes = {
  title: PropTypes.string.isRequired,
  percents: PropTypes.number.isRequired,
  radius: PropTypes.number,
};

export default ProgressItem;
