import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

const configureStore = () => {
  return createStore(rootReducer, devToolsEnhancer())
}

export default configureStore
