var chat = {
  init: function() {
    this.cacheDOM();
    this.bindEvents();
  },
  cacheDOM: function() {
    this.chatLog = document.getElementsByClassName("chat-log")[0];
    this.chatLogList = this.chatLog.querySelector("ul");
    this.textarea = document.getElementById("message-to-send");

    this.roomName = JSON.parse(roomName);
    this.chatSocket = new WebSocket(
      'ws://'
      + window.location.host
      + '/ws/chat/'
      + this.roomName
      + '/');
  },
  bindEvents: function() {
    this.textarea.focus();
    this.textarea.addEventListener('keyup', this.sendMessageEnter.bind(this));
    this.chatSocket.addEventListener('message', this.addMessage.bind(this));
  },
  addMessage: function(e) {
    this.messageData = JSON.parse(e.data);
    this.render();
  },
  render: function() {
    // responses
    var source = document.getElementById("message-response-template").innerHTML;
    var template = Handlebars.compile(source);
    this.message = this.messageData.message.replace('\n','');
    this.username = this.messageData.username;
    this.time = this.messageData.time;
    var context = {
      name: this.username,
      time: this.time,
      response: this.message,
    };
    var compiledHTML = '';
    compiledHTML += template(context);
    this.chatLogList.innerHTML += compiledHTML;
  },
  sendMessage: function() {
    this.messageToSend = this.textarea.value;
    if (this.messageToSend.trim() !=='') {
      this.chatSocket.send(JSON.stringify({
        'message': this.messageToSend
      }));
    }
    this.textarea.value = '';
    // this.render();
  },
  sendMessageEnter: function(e) {
    if(e.keyCode===13) {
      this.sendMessage();
    }
  },
};

window.onload = () => {
  chat.init();
}
