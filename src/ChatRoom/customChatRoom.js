import { useEffect } from 'react';
import { createConnection } from './chat.js';


export default function CustomChatRoom({serverUrl, roomId}) {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => connection.disconnect();
      }, [roomId, serverUrl]);
}
