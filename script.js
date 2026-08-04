const app = document.getElementById("app");


function startGame(){

app.innerHTML = `

<div class="card">

<h1>
💌 Birthday Adventure 💌
</h1>


<p>
A special surprise was created only for my Duduzilla ❤️
</p>


<div class="heart" onclick="findHeart()">
❤️
</div>


<p>
Find the magic heart to start the adventure ✨
</p>


</div>

`;

}



function findHeart(){

app.innerHTML = `

<div class="card">

<h1>
✨ You found it! ✨
</h1>


<p>
The first secret is unlocked...
</p>


<button onclick="openEnvelope()">
Open the surprise 💌
</button>


</div>

`;

}



function openEnvelope(){

app.innerHTML = `

<div class="card">

<h1>
💌 A mysterious envelope
</h1>


<p>
Something special is waiting inside...
</p>


<button onclick="showPassword()">
Open the envelope
</button>


</div>

`;

}



function showPassword(){

app.innerHTML = `

<div class="card">

<h1>
🔒 Secret Lock
</h1>


<p>
Only Duduzilla knows the code ❤️
</p>


<input 
id="code"
placeholder="DD.MM"
style="
padding:15px;
font-size:20px;
border-radius:20px;
border:2px solid pink;
text-align:center;
"
>


<br>


<button onclick="checkCode()">
Unlock ❤️
</button>


<p id="message"></p>


</div>

`;

}



function checkCode(){

let code=document.getElementById("code").value;


if(code=="09.08" || code=="0908"){

app.innerHTML=`

<div class="card">

<h1>
🔓 Unlocked!
</h1>


<p>
You found the secret code ❤️
</p>


<button onclick="firstLetter()">
Continue 💕
</button>


</div>

`;

}

else{

document.getElementById("message").innerHTML=
"❌ Almost! Try again ❤️";

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

Today is a very special day for a very special person.

<br><br>

Happy Birthday, my Duduzilla! 🎂

<br><br>

This is my first time creating something like this hehe 🤭

<br><br>

I wish you the sweetest and the best things in this world.

<br><br>

I love and appreciate every moment we spend together,
even when we are far away.

<br><br>

You are the strongest, most handsome,
smartest, hottest and cutest person in the whole world.

<br><br>

I love you so much ❤️

</p>


<button onclick="showDudu()">
Continue 💕
</button>


</div>


<img src="bubu.png">

</div>

</div>

`;

}


startGame();
