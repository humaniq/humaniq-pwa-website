// import {numberFormat} from 'utils'
import moment from "moment";

const dateFormat = date =>
  moment(date)
    .local()
    .format("DD/MM/YYYY");

const sortDate = date =>
  moment(date, "DD/MM/YYYY").format("YYYYMMDD");

const mapper = (data = []) => {
  const arr = data.map(({ updatedAt, createdAt, releaseDate, ...other }) => ({
    createdAt: dateFormat(createdAt),
    releaseDate: dateFormat(releaseDate),

    edited: createdAt !== updatedAt,
    ...other
  }));


  return arr.sort((a, b) => +sortDate(a.releaseDate) - sortDate(b.releaseDate));
};

export default mapper;
