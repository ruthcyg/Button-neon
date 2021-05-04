  'use strict'
// List of sentences in an array
let _CONTENT = [ 
  "Hey l Hope this make you smile☺☺",
	"Twinkle, twinkle, little star", 
	"How I wonder what you are", 
	"Up above the world so high", 
	"Like a diamond in the sky"
];

// Current sentence being processed
let _PART = 0;

// Character number of the current sentence being processed 
let _PART_INDEX = 0;

// Holds the handle returned from setInterval
let  _INTERVAL_VAL;

// Element that holds the text
let _ELEMENT = document.querySelector("#text");

// Cursor element 
let _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	let text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	let text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);





//https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// WITH THIS FIRST ITS GOING TO BE A LOT OF WORK

  //const container = document.querySelector('#container');
 // const newImage = document.createElement('img');
  //newImage.src ='https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  //const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
 
 // container.appendChild(newImage);

  // BEST PRACTICE  IS USING LOOP TO MAKE bulk IMAGEs

const container = document.querySelector('#container');
const baseURL  = 'https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


  for(let i = 1; i <= 151; i++){
       // creating a this markup 

       // <div> <img> <span>2 </span> </div>
        const pokemon = document.createElement('div');
        //Creating or adding a classlist
        pokemon.classList.add('pokemon');
        const label = document.createElement ('span');
        label.innerText = `#${i}`; // this help to add numbers
        
       const newImage = document.createElement('img');
       // make it dynamic we have to remove 1.png from the image src if not it will 
       // be just be one image in  in 151 places 
  newImage.src = `${baseURL}${i}.png`
 // const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
   
  pokemon.appendChild(newImage);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
   
  }

  // learn how to add a classlist