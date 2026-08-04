const app = document.getElementById("app");


function start(){

app.innerHTML = `

<div class="card">

<h1>
💌 Birthday Adventure 💌
</h1>


<p>
A secret surprise was created only for Duduzilla ❤️
</p>


<div class="heart" onclick="findHeart()">
❤️
</div>


<p>
Find the magic heart ✨
</p>


</div>

`;

}



function findHeart(){

app.innerHTML = `

<div class="card">

<h1>
✨ You found the heart! ✨
</h1>


<p>
The first secret is unlocked ❤️
</p>


<button onclick="envelope()">
Open the envelope 💌
</button>


</div>

`;

}



function envelope(){

app.innerHTML = `

<div class="card">

<h1>
💌 A mysterious letter
</h1>


<div class="envelope" onclick="openLock()">

<div class="paper">
❤️
</div>

<div class="flap"></div>

</div>


<p>
Click the envelope
</p>


</div>

`;

}



function openLock(){

app.innerHTML = `

<div class="card">

<h1>
🔒 Secret Code
</h1>


<p>
Only Duduzilla knows the password ❤️
<br>
Hint: a very special day 🎂
</p>


<input id="code"
placeholder="DD.MM"
style="
padding:12px;
border-radius:20px;
font-size:18px;
text-align:center;
border:2px solid pink;
">


<br>


<button onclick="checkCode()">
Unlock 🔓
</button>


<p id="error"></p>


</div>

`;

}



function checkCode(){

let value=document.getElementById("code").value;


if(value=="09.08" || value=="0908"){

unlockAnimation();

}
function unlockAnimation(){

app.innerHTML=`

<div class="card">

<div class="lock">
🔒
</div>

<h1>
Unlocking... ✨
</h1>

<p>
The secret is revealed ❤️
</p>

</div>

`;


setTimeout(()=>{

app.innerHTML=`

<div class="card">

<div class="lock">
🔓
</div>

<h1>
Unlocked! ❤️
</h1>

<p>
You found the special date 🎂
</p>

<button onclick="firstLetter()">
Open the letter 💌
</button>

</div>

`;

},1500);

}

else{

document.getElementById("error").innerHTML=
"❌ Try again ❤️";

}

}



function firstLetter(){

app.innerHTML=`

<div class="card">

<div class="characters">


<img src="dudu.png">


<div class="letter">

<h1>
💖 Happy Birthday My Duduzilla 💖
</h1>


<p>

Today is a very special day.

<br><br>

Happy Birthday! 🎂

<br>

I created this little adventure only for you.

<br><br>

More surprises are waiting...

</p>


<button onclick="duduMessage()">
Continue 💕
</button>


</div>


<img src="bubu.png">


</div>

</div>

`;

}



function duduMessage(){

app.innerHTML=`

<div class="card">

<h1>
🐻 Dudu has a message
</h1>


<p>
"Someone very special made this surprise for you ❤️"
</p>


<button onclick="bubuMessage()">
Next ✨
</button>


</div>

`;

}



function bubuMessage(){

app.innerHTML=`

<div class="card">

<h1>
🐼 Bubu says...
</h1>


<p>
"Keep smiling! The adventure is not finished yet 💖"
</p>


<button>
Continue soon 🌸
</button>


</div>

`;

}



start();
