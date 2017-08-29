import React, {Component} from 'react';
import * as T from "prop-types";
import O_Transaction from 'O_Transaction'
import M_ScrollScreen from 'M_ScrollScreen'
import A_Container from 'A_Container'
import O_ScrollUp from "O_ScrollUp";
import Waypoint from 'react-waypoint'

class SE_HmqLog extends Component {

  getTransactions(entities, loadMore, loading){
    return (entities.map( (props, i) => {

      const entitiesCount = entities.length
      const addWayPoint = !loading && (i + 30 === entitiesCount || i + 5 === entitiesCount)
      return (
        <div key ={props.txHash}>
          <O_Transaction {...props} type="log" up={i == 0}/>
          {addWayPoint &&
          <Waypoint
            scrollableAncestor={'window'}
            onEnter={loadMore}
          />
          }
        </div>
      )
    }))
  }

  // getTransactions(entities) {
  //   return (entities.map((props, i) =>
  //     <O_Transaction key={'key_' + i} {...props} type="log" up={i == 0}/>
  //   ))
  // }

  render() {
    const {entities, loadMore, loading} = this.props
    const renderedTransactions = this.getTransactions(entities, loadMore, loading)
    return (
      <div>
        <O_ScrollUp initTop={50} showAfter={700}>
          <A_Container type='section-clean'>
              <M_ScrollScreen >
                {renderedTransactions}
              </M_ScrollScreen>
          </A_Container>
        </O_ScrollUp>
      </div>

    )
  }
}

SE_HmqLog.propTypes = {
  entities: T.array.isRequired,
}

SE_HmqLog.defaultProps = {
  entities: []
}

export default SE_HmqLog
