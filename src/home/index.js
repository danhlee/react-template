import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Router from './Router'
import globalStore from '../shared/redux/global-store'

import '../shared/styles/common.css'

ReactDOM.render(
  <Provider store={globalStore}>
    <Router />
  </Provider>
)
