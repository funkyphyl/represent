import DataLayer from 'types/DataLayer';

type EventProps = {
  action?: string;
  category?: string;
  label?: string;
  value?: any
};

declare const dataLayer: DataLayer;

const trackEvent = ({ action, category, label = '',value, ...rest }: EventProps) => {
  if (typeof (dataLayer as DataLayer) !== 'undefined') {
    // eslint-disable-next-line no-undef
    dataLayer.push({
      event: 'custom_event',
      action,
      category,
      label,
      value,
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
