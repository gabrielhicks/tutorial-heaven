import {createConsumer} from '@rails/actioncable'

const consumer = createConsumer("ws://tutorialheavenapi.herokuapp.com/cable")

export default consumer