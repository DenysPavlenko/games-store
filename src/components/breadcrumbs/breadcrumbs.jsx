import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
// Layout
import Container from 'layout/container/container';
// Styles
import './breadcrumbs.sass';

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