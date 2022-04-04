import DataLayer from 'types/DataLayer';

declare const dataLayer: DataLayer;

/**
 * Add new object to dataLayer.
 * @param url string
 * @param initialPageView boolean
 */
const trackPageView = (url: string, initialPageView: boolean = false): void => {
  if (typeof (dataLayer as DataLayer) !== 'undefined') {
    dataLayer.push({
      page: url,
      event: 'PageView',
      initialPageView,
    });
  } else {
    console.log('trackPageView', {
      page: url,
      event: 'PageView',
      initialPageView,
    });
  }
};

export default trackPageView;
