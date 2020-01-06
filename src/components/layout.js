import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';
import cosmicjsLogo from '../../static/cosmicjs.svg';
import ThemeContext from 'src/theme/themeContext';
import MaterialThemeProvider from 'src/theme/MaterialThemeProvider';
import { rhythm, scale } from '../utils/typography';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

function Layout({ children, location }) {

  const [ themeType, setThemeType ] = useState('dark');

  const _changeThemeType = useCallback(type => {
    setThemeType(type);
  }, []);

  return (
    <StaticQuery
      query={graphql`
      query LayoutQuery {
        cosmicjsSettings(slug: { eq: "general" }) {
          metadata {
            site_heading
            homepage_hero {
              imgix_url
            }
          }
        }
      }
    `}
      render={data => {
        const siteTitle = data.cosmicjsSettings.metadata.site_heading;
        const homgePageHero =
        data.cosmicjsSettings.metadata.homepage_hero.imgix_url;
        return (
          <ThemeContext.Provider value={{
            themeType,
            changeThemeType: _changeThemeType
          }}>
            <MaterialThemeProvider>
              <div>
                <Header title={siteTitle} bannerImage={homgePageHero} />
                <div
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: rhythm(40),
                    padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(3 / 4)}`,
                    minHeight: 'calc(100vh - 42px)',
                  }}
                >
                  {children}
                </div>
                <Footer/>
                {/* <footer
                  style={{
                    textAlign: 'center',
                    padding: `0 20px 80px 0`,
                  }}
                >
                powered by&nbsp;
                  <a
                    target="_blank"
                    href="https://gatsbyjs.org"
                    style={{
                      color: '#191919',
                      boxShadow: 'none',
                    }}
                  >
                    <img
                    // src={gatsbyLogo}
                      alt="Gatsby JS"
                      style={{
                        width: '20px',
                        margin: '0 4px -3px 2px',
                      }}
                    />
                    <strong>Gatsby</strong>
                  </a>
                &nbsp;and&nbsp;
                  <a
                    target="_blank"
                    href="https://cosmicjs.com"
                    style={{
                      color: '#191919',
                      boxShadow: 'none',
                    }}
                  >
                    <img
                      src={cosmicjsLogo}
                      alt="Cosmic JS"
                      style={{
                        width: '18px',
                        margin: '0 4px -2px 5px',
                      }}
                    />
                    <strong>Cosmic JS</strong>
                  </a>
                </footer> */}
              </div>
            </MaterialThemeProvider>
          </ThemeContext.Provider>
        
        );
      }}
    />
  );
}

export default Layout;
