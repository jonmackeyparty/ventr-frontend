import React from 'react';
import { Route } from 'react-router-dom'
import Apology from '../components/Apology'
import ApologyCreator from '../components/ApologyCreator'

class ApologyContainer extends React.Component {

  render() {
    return(
      <div>
        <Route path='/tweets/:id/responses' render={(routerProps) => <ApologyCreator {...routerProps} />} />
        <Route path ='/tweets/:id/apology' render={(routerProps) => <Apology {...routerProps} />} />
      </div>
    )
  }
}

export default ApologyContainer
