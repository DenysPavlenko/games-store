import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
// Components
import Container from 'components/container/container.component';
// Styles
import './breadcrumbs.styles.sass';

const Breadcrumbs = ({ routes, history: { location } }) => {
  const path = location.pathname;

  return (
    <div className="breadcrumbs">
      <Container>
        <Link className="breadcrumbs-link h6 mb-0" to="/">Back to store</Link>
        {routes.map((route, idx) => (
          <Link key={idx} className="breadcrumbs-link h6 mb-0" to={`${path.substring(0, path.indexOf(route) + route.length)}`} >
            {route.replace(/^\w/, l => l.toUpperCase())}
          </Link>
        ))}
      </Container>
    </div >
  );
};

Breadcrumbs.propTypes = {
  routes: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Breadcrumbs);
