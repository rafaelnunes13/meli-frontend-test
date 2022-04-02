import axios from 'axios';
import detailMapper  from './detail/detail-mapper';
import listMapper  from './list/list-mapper';

const baseUrl = 'https://api.mercadolibre.com';

const list = async (req, res) => {
  const params = { limit: 4, q: req.query.q };
  const response = await axios.get(`${baseUrl}/sites/MLA/search`, { params });
  res.json(listMapper(response.data));
};

const details = async (req, res) => {
  const response = await axios.get(`${baseUrl}/items/${req.params.id}`);
  const responseDescription = await axios.get(`${baseUrl}/items/${req.params.id}/description`);
  res.json(detailMapper(response.data, responseDescription.data.plain_text));
};

const items = { list, details };

export default items;
