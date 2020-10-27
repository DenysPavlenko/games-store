import React from 'react';
// Laytou
import Container from 'layout/container/container';
import Row from 'layout/row/row';
import Col from 'layout/col/col';
// Components
import SocialIcons from 'components/social-icons/social-icons';
import Typography from 'components/typography/typography';
// Styles
import './footer.sass'
// Assets
import { ReactComponent as Twitter } from 'assets/images/icons/twitter.svg';
import { ReactComponent as Discord } from 'assets/images/icons/discord.svg';
import { ReactComponent as Instagram } from 'assets/images/icons/instagram.svg';
import { ReactComponent as Chevron } from 'assets/images/icons/chevron.svg';

class Footer extends React.Component {
  state = {
    socials: [
      { Icon: Twitter, link: 'http://example.com' },
      { Icon: Discord, link: 'http://example.com' },
      { Icon: Instagram, link: 'http://example.com' },
    ]
  }
  render() {
    const { socials } = this.state;

    return (
      <div className="footer">
        <Container>
          <Row>
            <Col col="12" className="d-flex justify-content-between align-items-center mb-4">
              <SocialIcons socials={socials} />
              <div className="footer-up" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Chevron />
              </div>
            </Col>
            <Col md={12} lg={8} xl={7}>
              <Typography component="p">© {new Date().getFullYear()}, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Epic Games International, S.à r.l.</Typography>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Footer;
