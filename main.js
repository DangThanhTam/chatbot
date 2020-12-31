const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');
const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();


// Emoji selection  
window.addEventListener('DOMContentLoaded', () => {

    picker.on('emoji', emoji => {
      document.querySelector('input').value += emoji;
    });
  
    emojiBtn.addEventListener('click', () => {
      picker.togglePicker(emojiBtn);
    });
  });        

//   chat button toggler 

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

// send msg 
submitBtn.addEventListener('click', ()=>{
    let userInput = inputElm.value;
    let temp = this.client_say(userInput);
    let temp1 = this.bot_say(userInput);
    chatArea.insertAdjacentHTML("beforeend", temp);
    chatArea.insertAdjacentHTML("beforeend", temp1);
    inputElm.value = '';

})

function bot_say(data){
  let answer = "";
  if (data === "how are you?") {
    answer = "Fine";
  }else if (data === "y") {
    answer = "x";
  }else{
    answer = "I dont understand";
  }
  return `<div class="income-msg">
                <img src="img/avt.jpg"
                class="avatar" alt="">
                <span class="msg">${answer}</span>
            </div>`
}

function client_say(data){
  return `<div class="out-msg">
  <span class="my-msg">${data}</span>
  <img src="img/picture.jpg" class="avatar">
  </div>`;
  
}


