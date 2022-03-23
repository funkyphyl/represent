type DataLayerParams = {
  event: string;
  PageView?: string;
  action?: string;
  category?: string;
  label?: string;
};
type DataLayer = {
  push: (options: DataLayerParams) => void;
};

export default DataLayer;
