import React,{Component} from "react";
import "./Chat.css"
import ChatContent from "../chatContent/ChatContent";
import ChatList from "../chatList/ChatList";

export default class Chat extends Component{
    render(){
        return(
            <div className="main_chat">
                <ChatList />
                <ChatContent />
            </div>
        )
    }
}