import React, {Component} from 'react';
import O_Transaction from "O_Transaction";

class MarkupRoute extends Component {

  render() {
    return (
      <div>
        <O_Transaction type='log' {...{
          txHash:"0xo31bdarse4zbeqzbdoq1y2",
          block:25800,
          from:"0xstxhyad7qd6gyuaxcfbytei8j7tmo4vvc6bzw0ndq",
          to:"0xskvvfrmu0kiae5o150xezn6gt447230680z18pfvo",
          time:"2017-07-25T04:09:26+08:00",
          hmqAmount:41,
          usdAmount:131.36
        }} />
        <O_Transaction type='holder' {...{
          address: '0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98',
          rank: 1,
          pecentage: 28.49,
          txns: 94,
          time: "2017-07-25T04:09:26+08:00",
          usdAmount: 5999,
          hmqAmount: 723.45,
        }} />
        <O_Transaction type='market' {...{
          address: 'Liqui',
          rank: 2,
          price: 0.14228,
          pair: 'HMQ/BTC',
          usdAmount: 5999.00,
          hmqAmount: 723.45,
        }} />
        <O_Transaction type='log' {...{
          txHash:"0xo31bdarse4zbeqzbdoq1y2",
          block:25800,
          from:"0xstxhyad7qd6gyuaxcfbytei8j7tmo4vvc6bzw0ndq",
          to:"0xskvvfrmu0kiae5o150xezn6gt447230680z18pfvo",
          time:"2017-07-25T04:09:26+08:00",
          hmqAmount:41,
          usdAmount:131.36
        }} />
      </div>
    )
  }
}

export default MarkupRoute;