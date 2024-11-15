let userName = prompt('What is your name?')
let musicType = prompt('What kind of music do you like?')


let myStory = `<p> Hello ${userName}. 
<p> I see you like ${musicType} music.</p>I understand that you might be <span class="loud"</span>anxious/overwhelmed/upset</p></span>
<p>Take some time to listen to some music and relax.</p>`
console.log(myStory)

document.getElementById('story').innerHTML = myStory