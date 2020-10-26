import React from 'react';
// Components
import Typography from 'components/typography/typography';
// Styles
import './error-indicator.sass';
// Assets
import { ReactComponent as Warning } from 'assets/images/icons/warning.svg';

const ErrorIndicator = () => {
	return (
		<div className="error-indicator">
      <Warning className="error-indicator-icon"/>
      <Typography component="h4">BOOM!</Typography>
      <Typography component="p">Something has gone terribly wrong</Typography>
		</div>
	);
};

export default ErrorIndicator;
