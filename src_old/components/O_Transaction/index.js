import React , { Component } from 'react';
import './styles.scss';
import A_Container from 'A_Container';
import O_Transaction_Menu from 'O_Transaction_Menu';
import O_Search from 'O_Search';
import {cssClassName} from 'utils';
const cn = cssClassName('O_Transaction');


class O_Transaction extends Component {

  render() {
    return (
      <div>
        <div className={cn('root')}>
          <div className={cn('menu')}>
            <O_Transaction_Menu />
          </div>
          <div className={cn('search')}>
            <O_Search />
          </div>
        </div>
        <A_Container type='wide'>
          <table className={cn('asset-stats')}>
            <tbody>
              <tr className={cn('asset-stats__tr')}>
                <td className={cn('asset-stats__td')}>
                  <span className={cn('asset-stats__hash')}>TxHash:</span>
                  <span className={cn('asset-stats__block')}>Block:</span>
                </td>
                <td className={cn('asset-stats__td')}>
                  <a href="javascript:void(0);" className={cn('asset-stats__hash-link')}>ajhRd87S0fd76fsdkjhsdkjDhsG56dfdfajhRd87S0fd76fsdkjhsdkjDhsG56dfdf</a>
                  <a href="javascript:void(0);" className={cn('asset-stats__block-link')}>3994577</a>
                </td>
                <td className={cn('asset-stats__td')}>
                  <span className={cn('asset-stats__from')}>From:</span>
                  <span className={cn('asset-stats__to')}>To:</span>
                </td>
                <td className={cn('asset-stats__td')}>
                  <a href="javascript:void(0);" className={cn('asset-stats__from-link')}>ajhRd87S0fd76fsdkjhsdkjDhsG56dfdfDhsG56dfdf</a>
                  <a href="javascript:void(0);" className={cn('asset-stats__to-link')}>ajhRd87S0fd76fsdkjhsdkjDhsG56dfdfDhsG56dfdf</a>
                </td>
                <td className={cn('asset-stats__td')}>
                  <span className={cn('asset-stats__price-hmq')}>5,999.00 HMQ</span>
                  <span className={cn('asset-stats__price-usd')}>$723.45 USD</span>
                </td>
                <td className={cn('asset-stats__td')}>
                  <small className={cn('asset-stats__time asset-stats__time--success')}>
                    <i className={cn('asset-stats__icon o-asset-stats__icon--success')}></i>
                    17 sec ago
                  </small>
                </td>
              </tr>

              <tr className={cn('asset-stats__tr')}>
                <td className={cn('asset-stats__td')}>
                  <span className={cn('asset-stats__hash')}>TxHash:</span>
                  <span className={cn('asset-stats__block')}>Block:</span>
                </td>
                <td className={cn('asset-stats__td')}>
                  <a href="javascript:void(0);" className={cn('asset-stats__hash-link')}>ajhRd87S0fd76fsdkjhsdkjDhsG56dfdfajhRd87S0fd76fsdkjhsdkjDhsG56dfdf</a>
                  <a href="javascript:void(0);" className={cn('asset-stats__block-link')}>3994577</a>
                </td>
                <td className={cn('asset-stats__td')}>
                  <span className={cn('asset-stats__from')}>From:</span>
                  <span className={cn('asset-stats__to')}>To:</span>
                </td>
                <td className={cn('asset-stats__td')}>
                  <a href="javascript:void(0);" className={cn('asset-stats__from-link')}>ajhRd87S0fd76fsdkjhsdkjDhsG56dfdfDhsG56dfdf</a>
                  <a href="javascript:void(0);" className={cn('asset-stats__to-link')}>ajhRd87S0fd76fsdkjhsdkjDhsG56dfdfDhsG56dfdf</a>
                </td>
                <td className={cn('asset-stats__td')}>
                  <span className={cn('asset-stats__price-hmq')}>5,999.00 HMQ</span>
                  <span className={cn('asset-stats__price-usd')}>$723.45 USD</span>
                </td>
                <td className={cn('asset-stats__td')}>
                  <small className={cn('asset-stats__time asset-stats__time--success')}>
                    <i className={cn('asset-stats__icon o-asset-stats__icon--success')}></i>
                    17 sec ago
                  </small>
                </td>
              </tr>
              <tr className={cn('asset-stats__tr')}>
                <td className={cn('asset-stats__td')}>
                  <span className={cn('asset-stats__hash')}>TxHash:</span>
                  <span className={cn('asset-stats__block')}>Block:</span>
                </td>
                <td className={cn('asset-stats__td')}>
                  <a href="javascript:void(0);" className={cn('asset-stats__hash-link')}>ajhRd87S0fd76fsdkjhsdkjDhsG56dfdfajhRd87S0fd76fsdkjhsdkjDhsG56dfdf</a>
                  <a href="javascript:void(0);" className={cn('asset-stats__block-link')}>3994577</a>
                </td>
                <td className={cn('asset-stats__td')}>
                  <span className={cn('asset-stats__from')}>From:</span>
                  <span className={cn('asset-stats__to')}>To:</span>
                </td>
                <td className={cn('asset-stats__td')}>
                  <a href="javascript:void(0);" className={cn('asset-stats__from-link')}>ajhRd87S0fd76fsdkjhsdkjDhsG56dfdfDhsG56dfdf</a>
                  <a href="javascript:void(0);" className={cn('asset-stats__to-link')}>ajhRd87S0fd76fsdkjhsdkjDhsG56dfdfDhsG56dfdf</a>
                </td>
                <td className={cn('asset-stats__td')}>
                  <span className={cn('asset-stats__price-hmq')}>5,999.00 HMQ</span>
                  <span className={cn('asset-stats__price-usd')}>$723.45 USD</span>
                </td>
                <td className={cn('asset-stats__td')}>
                  <small className={cn('asset-stats__time asset-stats__time--success')}>
                    <i className={cn('asset-stats__icon o-asset-stats__icon--success')}></i>
                    17 sec ago
                  </small>
                </td>
              </tr>

            </tbody>
          </table>
        </A_Container>
      </div>
    )
  }
}


O_Transaction.propTypes = {};

export default O_Transaction