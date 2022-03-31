import axios from 'axios';
import detailMapper  from './detail/detail-mapper';
import listMapper  from './list/list-mapper';

const list = async (req, res) => {
  const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=4`);
  res.json(listMapper(response.data));
};

const details = async (req, res) => {
  const response = await axios.get(`https://api.mercadolibre.com/items/${req.params.id}`);
  res.json(detailMapper(response.data, req.params.description));
};

const items = { list, details };

export default items;
