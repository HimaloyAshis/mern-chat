import React, { useEffect, useState } from 'react';

import axios from 'axios'

const ChatPage = () => {

    const [chats, setChats] = useState()

    console.log(chats)

    const fetchChat = async () => {
        const { data } = await axios.get('http://localhost:5000/app/chat/')
        setChats(data)

    }

    useEffect(() => {

        fetchChat()

    }, [])

    return (
        <div>
            {
                chats?.map((chat)=>(<div key={chat.chatName}>{chat.chatName}</div> ))
            }
        </div>
    );
};

export default ChatPage;