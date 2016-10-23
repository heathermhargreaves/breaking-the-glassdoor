import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _data = ''

class DataStore extends EventEmitter {
  constructor () {
    super()
    AppDispatcher.register(action => {
      switch (action.type) {
        case 'GOT_DATA':
        _data = action.payload
        this.emit('CHANGE')
        break
      }
    })
  }

  startListening (cb) {
    this.on('CHANGE', cb)
  }

  stopListening (cb) {
    this.removeListener('CHANGE', cb)
  }

  getData(){
    return _data
  }
}

export default new DataStore()
