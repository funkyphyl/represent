import DataLayer from 'types/DataLayer';

type EventProps = {
  action?: string;
  category?: string;
  label?: string;
};

declare const dataLayer: DataLayer;

const trackEvent = ({ action, category, label = '', ...rest }: EventProps) => {
  if (typeof (dataLayer as DataLayer) !== 'undefined') {
    // eslint-disable-next-line no-undef
    dataLayer.push({
      event: 'custom_event',
      action,
      category,
      label,
      ...rest,
    });
  } else {
    console.log('trackEvent', {
      event: 'custom_event',
      action,
      category,
      label,
      ...rest,
    });
  }
};

export default trackEvent;
