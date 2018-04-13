import React from 'react';
import moment from 'moment'
import Utils from '@utils/Utils'

type Props = {
  sessionList: Array,
  messages: Array,
  userId: Integer,
}

class Chat extends React.Component {

  constructor(props) {
    super(props);
    const sessionlists = Utils.sortByKey(this.props.sessionList,'lastMessageDate');
    this.state={
      sessionList : sessionlists,
      sessionId : sessionlists[0].sessionId,
      oppName: sessionlists[0].trainer.name,
      text: "",
      messages: this.props.messages
    };
    this.props.sendReadMessages(this.state.sessionId);
  }

  smallRender(msgUser)
  {
    return (
      <div className="col-xs-3 mobile-user-list" onClick={this.setUser.bind(this, msgUser.sessionId, msgUser.trainer.name)}>

        <div className="user-img-frame">

          <span className="new-message-notification" style={msgUser.userUnreadMessagesNumber > 0 ? enableNewMsgNtf : disableNewMsgNtf}>{msgUser.userUnreadMessagesNumber}</span>
          <img className="messages-user-img" src={((msgUser.trainer.avatar)?(msgUser.trainer.avatar.url):(""))} alt="user-name"/>

        </div>

        <h2 className="user-title">{msgUser.trainer.name}</h2>

      </div>
    )
  }

  bigRender(msgUser)
  {
    return (
        <div className="messages-user" onClick={this.setUser.bind(this, msgUser.sessionId, msgUser.trainer.name)}>

          <div className="user-img-frame">

            <span className="new-message-notification" style={msgUser.userUnreadMessagesNumber > 0 ? enableNewMsgNtf : disableNewMsgNtf}>{msgUser.userUnreadMessagesNumber}</span>
            <img className="messages-user-img" src={((msgUser.trainer.avatar)?(msgUser.trainer.avatar.url):(""))} alt="user-name"/>

          </div>

          <h2 className="user-title">{msgUser.trainer.name} <small>{moment(new Date(msgUser.lastMessageDate.replace(/\s/g, ''))).fromNow().toUpperCase()}</small></h2>
          <p className="user-status">{((msgUser.lastMessage)?(msgUser.lastMessage.text):(""))}</p>

        </div>
    )
  }

  setUser(sessionId, name, event){
    this.props.sendReadMessages(sessionId);
    this.setState({
      sessionId:sessionId,
      oppName:name
    });
  }

  renderContent(messages)
  {
    if(!messages) return <div>No messages</div>;
    let row = [];
    row.push(
      <h3 className="chat-title text-center">{this.state.oppName}</h3>
    );
    const flag = this.props.userId;
    const mess = Utils.sortByKey(messages,'createdAt')
    //for (let i = (( 5 > mess.length)?(mess.length-1):(5)); i>=0; i-- )
    for (let i = mess.length-1; i>=0; i-- )
    {
      const newdate=new Date(mess[i].createdAt.replace(/\s/g, ''));
      row.push(<p className="time-bubble text-center text-muted">{moment(newdate).format("DD MMM, LT")}</p>);
      if(mess[i].user.id== flag ) {
        row.push(
            <div className="chat-group-right">
              <p><span className="chat-group-item green">{mess[i].text}</span></p>
            </div>
        );
      }
      else {
        row.push(
            <div className="chat-group-left">
              <p><span className="chat-group-item">{mess[i].text}</span></p>
            </div>
        );
      }
    }
    return row;
  }

  handleKeyPress(sessionId, e) {
    if (e.key === 'Enter') {
      const message ={
        message:e.target.value,
        sessionId: sessionId
      }
      this.props.sendMessage(message);
      const newText={
        sessionId:this.state.sessionId,
        createdAt:new Date().toISOString(),
        text:e.target.value,
        user:{
          id: this.props.userId,
          avatar:undefined,
          name:this.state.oppName
        }
      };
      const prevMessage=this.state.messages;
      prevMessage[this.state.sessionId].push(newText);
      this.setState({
        messages: prevMessage
      });
      e.target.value="";
    }
  }

  render() {
    return(
      <div className="container messages">

        <div className="row visible-sm visible-xs">

          {this.state.sessionList.map((msgUser, i) => this.smallRender(msgUser))}

        </div>

        <div className="row">

          <div className="col-md-3 user-list hidden-xs hidden-sm kill-left-padding kill-right-padding">
            {this.state.sessionList.map((msgUser, i) => this.bigRender(msgUser))}
          </div>

          <div className="col-md-9 col-sm-12 chat-container">
          <div style={pos}>
            {this.renderContent(this.state.messages[this.state.sessionId])}
          </div>
          <div>
            <input type="text" ref={"sendMessage"} className="send-message" id="sendMessage" placeholder="Type a message..." onKeyPress={this.handleKeyPress.bind(this, this.state.sessionId)} defaultValue={this.state.text} />
          </div>
          </div>

        </div>

      </div>
    )
  }

}

const pos= {
  paddingBottom: "48px"
}

const enableNewMsgNtf = {
  display: 'inherit'
};

const disableNewMsgNtf = {
  display: 'none'
};


export default Chat;
