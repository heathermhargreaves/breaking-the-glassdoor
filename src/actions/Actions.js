import API from '../API'
import AppDispatcher from '../AppDispatcher'

const Actions = {
   getCompany(name){
     API.getCompany(name)
   },
  sampleActions () {
    API.sampleActions()
  }
}

export default Actions
