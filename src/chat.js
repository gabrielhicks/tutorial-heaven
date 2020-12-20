import { createConsumer } from "@rails/actioncable";

const consumer = createConsumer("wss://tutorialheavenapi.herokuapp.com/cable");

export default consumer;
