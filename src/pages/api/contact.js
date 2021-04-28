import micro from 'micro';
import sanity from '../../utils/sanity';

export default micro(async (req, res) => {
  // console.log('req', req.body);
  const doc = {
    _type: 'order',
    ...req.body,
  };

  try {
    const result = await sanity.create(doc);

    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
