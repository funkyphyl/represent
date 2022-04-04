type DataLayerParams = {
  event: string;
  page?: string;
  action?: string;
  category?: string;
  label?: string;
  value?: any; // String, number or custom object. Will be used in GA later on.
  initialPageView?: boolean;
};
type DataLayer = {
  push: (options: DataLayerParams) => void;
};

export default DataLayer;
