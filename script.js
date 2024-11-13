let userName = prompt('What is your name?')
let userQuest = prompt('How are you feeling?')
let userFavColor = prompt('What is your favorite color?')
let userLofi = prompt('What ')


let myStory = `<p> Hello ${userName}. 
<p> I see you are feeling ${userQuest}.</p>I understand that you are likely <span class="loud"</span>anxious/overwhelmed/upset</p></span>
<p>Take some time to listen to some music and relax.</p>`
console.log(myStory)

document.getElementById('story').innerHTML = myStory