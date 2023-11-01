import { configureStore } from '@reduxjs/toolkit'
// import EditDataRedux from '../action/EditDataRedux'
// import KotakMakeUp from '../action/KotakMakeUp'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default configureStore({
  // untuk penamaan rootReducer bebas asalakan path benar
  reducer: rootReducer,
  middleware : (getMiddleware) => getMiddleware().concat(thunk)
})