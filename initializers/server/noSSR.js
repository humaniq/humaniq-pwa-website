import getAsset from './getAsset';
import Helmet from 'react-helmet'

export default function(req, res){
  res.status(200);
  const helmet = Helmet.rewind()

  res.render('index', {helmet, getAsset})
}