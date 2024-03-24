import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Provider } from 'react-redux'
// import store from './redux/store.js'
import { store, persistor } from '~/redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App/>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            pauseOnHover={false}
          />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
