import { io } from 'socket.io-client';



const URL = 'https://api.youcarrf.ru';

export const socket = io(URL);