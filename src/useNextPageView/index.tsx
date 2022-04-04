import trackPageView from '../trackPageView/index';
import { useEffect } from 'react';
import { NextRouter } from 'next/router';

const useNextPageView = (router: NextRouter): void => {
  useEffect(() => {
    if (router?.asPath) {
      trackPageView(router.asPath, true); // initial pageview
    }
    const handleRouteChange = (url: string) => {
      trackPageView(url);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);
};

export default useNextPageView;
