import { useEffect, useState } from "react";

const chats = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async() => {
        try {
            const res = await fetch("http://localhost:5000/chats");
            const data = await res.json();
            console.log(data);
            setChats(data);
        } catch (error) {
            console.log("An error occurred");
            console.log(error);
        }}

        useEffect(() => {
            fetchChats();
        },[])

    return (
        <div>
            {chats.map(chat=> {
                return <div key={chat._id}>{chat.chatName}</div>
            })}
        </div>
    );
}

export default chats;