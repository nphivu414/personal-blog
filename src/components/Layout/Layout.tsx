import * as React from 'react';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { loadSettingListAction } from 'src/redux/thunk/setting/settingListThunk';
import { getGeneralSetting } from 'src/redux/selectors/setting/settingSelector';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import ThemeContext from 'src/theme/themeContext';
import MaterialThemeProvider from 'src/theme/MaterialThemeProvider';
import { rhythm } from 'src/utils/typography';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

type LayoutProps = {
};
const { useEffect, useState, useCallback } = React;

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { children } = props;
  const dispatch = useDispatch();
  const generalSetting = useSelector(getGeneralSetting);

  const siteTitle = get(generalSetting, 'metadata.site_heading');
  const homgePageHero = get(generalSetting, 'metadata.homepage_hero.imgix_url')

  const [themeType, setThemeType] = useState('dark');

  const _changeThemeType = useCallback(type => {
    setThemeType(type);
  }, []);

  useEffect(() => {
    dispatch(loadSettingListAction({}));
  }, [dispatch])

  return (
    <ThemeContext.Provider
      value={{
        themeType,
        changeThemeType: _changeThemeType,
      }}
    >
      <MaterialThemeProvider>
        <div>
          <Header title={siteTitle} bannerImage={homgePageHero} />
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(40),
              padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(
                3 / 4
              )}`,
              minHeight: 'calc(100vh - 42px)',
            }}
          >
            {children}
          </div>
          <Footer />
        </div>
      </MaterialThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Layout;