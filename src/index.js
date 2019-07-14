import React from 'react'
import ReactDOM from 'react-dom'

// Service worker
import * as serviceWorker from './common/serviceWorker'

import 'assets/scss/material-kit-react.scss?v=1.7.0'

// App
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
