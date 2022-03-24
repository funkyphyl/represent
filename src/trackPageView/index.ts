import DataLayer from 'types/DataLayer';

declare const dataLayer: DataLayer;

const trackPageView = (url: string): void => {
  if (typeof (dataLayer as DataLayer) !== 'undefined') {
    dataLayer.push({
      PageView: url,
      event: 'PageView',
    });
  } else {
    console.log('trackPageView', {
      PageView: url,
      event: 'PageView',
    });
  }
};

export default trackPageView;
