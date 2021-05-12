import React from 'react';
import { Link } from 'react-router-dom';
// Layout
import Container from 'layout/container/container';
// Components
import Typography from 'components/typography/typography';
import Button from 'components/button/button';
import Image from 'components/image/image';
// Styles
import './404-page.sass';
// Assets
import img from 'assets/images/404/404-image.png';

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <Container>
        <div className="page-not-found-wrap">
          <Image className="page-not-found-image mb-4" src={img} alt="404" />
          <Typography component="h2" variant="h1" className="mb-2">Oops!</Typography>
          <Typography component="p" className="mb-3">That page doesn't exist or is unavailable</Typography>
          <Link to="/">
            <Button>Back to home</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default PageNotFound;
