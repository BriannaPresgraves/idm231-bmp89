// define variables
const DisplayImg = document.getElementById('background');
const TitleNew = document.getElementById('title');
const DateNew = document.getElementById('date');
const DescriptionNew = document.getElementById('description');

// Birthday Input and Sign Calculation
const userSubmit = document.getElementById('submit');

userSubmit.addEventListener('click', function () {
    console.log('submitButton clicked');
  
const birthdate = new Date(document.getElementById('birthday').value);
console.log('birthdate is: ' + birthdate);

let month = birthdate.getUTCMonth();
month++;
console.log('month is: ' + month);

const day = birthdate.getUTCDate();
console.log('day is: ' + day);
  
let id = '';

if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    id = 'Capricorn'//Belgian Sheepdog
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    id = 'Sagittarius'//Brittany Spaniel
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    id = 'Scorpio'//American Bloodhound
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    id = 'Libra'//Samoyed
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    id = 'Virgo'//Sheltie
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    id = 'Leo'//Golden Retriever
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    id = 'Cancer'//Border Collie
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    id = 'Gemini'//Jack Russell Terrier
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    id = 'Taurus'//Italian Greyhound
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    id = 'Aries'//German Shepherd
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    id = 'Pisces'//Aussie
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    id = 'Aquarius'//Pitbull Mix
  }

  console.log('id is ' + id);

  userPicked(id);

});

// audio input
var belgiansheepdog = new Audio('audio/dogtoy.wav');
var britttanyspaniel = new Audio('audio/dogwhine.wav');
var americanbloodhound = new Audio('audio/bloodhound.wav');
var samoyed = new Audio('audio/dogsniffing.wav');
var sheltie = new Audio('audio/dogwalking.wav');
var goldenretriever = new Audio('audio/golden.wav');
var bordercollie = new Audio('audio/bordercollie.wav');
var jackrussellterrier = new Audio('audio/jackrussellterrier.wav');
var italiangreyhound = new Audio('audio/greyhound.wav');
var germanshepherd = new Audio('audio/germanshepherd.wav');
var aussie = new Audio('audio/aussie.wav');
var pitbullmix = new Audio('audio/pitbull.wav');

function userPicked (modalCard) {
  console.log('user picked called: ' + modalCard);

  // Dog Breed Descriptions
  switch (modalCard) {
    case 'Capricorn':
      DisplayImg.src="images/belgiansheepdog.jpg";
      TitleNew.innerHTML = "Belgian Sheepdog";
      DateNew.innerHTML = "December 22 - January 19";
      DescriptionNew.innerHTML = "You value a pratical and focused approach to life. Reaching your goals is your number one priority, and you often think about how your actions will help you achieve these dreams. You are determined yet calm just like a Belgian Sheepdog. ";
      console.log("the log worked");
      belgiansheepdog.play();
     
      break;

    case 'Sagittarius':
      DisplayImg.src = "images/brittanyspaniel.jpg";
      TitleNew.innerHTML = 'Brittany Spaniel';
      DateNew.innerHTML = "November 22 - December 21";
      DescriptionNew.innerHTML = "Like a Brittany Spaniel, you are energetic and carefree. You're a free spirit who is always on the lookout for the next big adventure in life.";
      console.log("the log worked");
      britttanyspaniel.play();
     
      break;

      case 'Scorpio':
      DisplayImg.src = "images/americanbloodhound.jpg";
      TitleNew.innerHTML = "American Bloodhound";
      DateNew.innerHTML = "October 24 - November 21st";
      DescriptionNew.innerHTML = "You're a reserved and mysterious type who plays their cards close to the chest. It takes some time to earn your trust, but once it's earned, you're one of the most loyal and dedicated dog breeds.";
      americanbloodhound.play();
     
      break;

      case 'Libra':
      DisplayImg.src = "images/samoyed.jpg";
      TitleNew.innerHTML = "Samoyed";
      DateNew.innerHTML = "September 23 - October 23";
      DescriptionNew.innerHTML = "Samoyeds thrive on companionship but also know how to enjoy alone time, like you. You're a social butterfly. You're always tactful and diplomatic which means you can fit in anyplace, anytime, with anyone.";
      samoyed.play()
     
      break;

      case 'Virgo':
      DisplayImg.src = "images/images/sheltie.jpg";
      TitleNew.innerHTML = "Sheltie";
      DateNew.innerHTML = "August 23 - September 22";
      DescriptionNew.innerHTML = "You are known for being hardworking and affectionate like a Sheltie. You have a sensitive, giving personality and are a perfectionist with an analytical eye. There's no job or dream too big to scare you, and you're the kind of person who reliably shows up for themselves and others.";
      sheltie.play()
     
      break;

      case 'Leo':
      DisplayImg.src = "images/goldenretriever.jpg";
      TitleNew.innerHTML = "Golden Retriever";
      DateNew.innerHTML = "July 23 - August 22";
      DescriptionNew.innerHTML = "Golden Retrievers are characterized by their gentle and affectionate nature. This breed is regal, smart, and fun-loving just like you. Your sense of adventure is the driving force behind almost all of the decisions you make and this breed shares your bright and bold personality. ";
      goldenretriever.play()
     
      break;

      case 'Cancer':
      DisplayImg.src = "images/bordercollie.jpg";
      TitleNew.innerHTML = "Border Collie";
      DateNew.innerHTML = "June 22 - July 22";
      DescriptionNew.innerHTML = "Border Collies are known to be gentle, energetic, and people-loving just like you. You are extremely family orientated and take these relationships very seriously. You are a natural nurturer and homebody.";
      bordercollie.play()
     
      break;

      case 'Gemini':
      DisplayImg.src = "images/jackrussellterrier.jpg";
      TitleNew.innerHTML = "Jack Russell Terrier";
      DateNew.innerHTML = "May 21 - June 21";
      DescriptionNew.innerHTML = "Jack Russell Terriers are know to be some of the most outgoing, playful, smart, and adaptable dogs. You are a natural social butterfly who loves getting to meet new people and going to new places. You're always on the go.";
      jackrussellterrier.play()

      break;

      case 'Taurus':
      DisplayImg.src = "images/italiangreyhound.jpg";
      TitleNew.innerHTML = "Italian Greyhound";
      DateNew.innerHTML = "April 20 - May 20";
      DescriptionNew.innerHTML = "Italian Greyhounds are known for their sweet, gentle, and affable personality, just like you. You're a practical person who prefers to take things slow in life. As a lover of the finer things, you take pride in working hard and playing harder. You also have a patient and protective personality.";
      italiangreyhound.play()
     
      break;

      case 'Aries':
      DisplayImg.src = "images/germanshepherd.jpg";
      TitleNew.innerHTML = "German Shepherd";
      DateNew.innerHTML = "March 21 - April 19";
      DescriptionNew.innerHTML = " German Shepherds are a caring and playful spirit that's just as active and fiecerly loyal as you. You're an assertive leader who loves competition, physical activity, and the great outdoors. However, you also have a loving and devoted side when it comes to those you hold most dear.";
      germanshepherd.play()
     
      break;

      case 'Pisces':
      DisplayImg.src = "images/aussie.jpg";
      TitleNew.innerHTML = "Aussie";
      DateNew.innerHTML = "February 19 - March 20";
      DescriptionNew.innerHTML = "An Aussie has the same loving personality as you, and they're famous for their good-natured temperaments. You are empathic, creative, and are known for your intuitive approach to life.";
      aussie.play()

      break;

      case 'Aquarius':
      DisplayImg.src = "images/pitbullmix.jpg";
      TitleNew.innerHTML = "Pitbull Mix";
      DateNew.innerHTML = "January 20 - February 18";
      DescriptionNew.innerHTML = "A Pitbull Mix is very people-orientated, affectionate, and playful. They're also known to mold their energy levels to their living situation. Unlike others that go with the status quo, you like to standout from the crowd.";
      pitbullmix.play()
     
      break;

      case 'help':
        DisplayImg.src = "";
        TitleNew.innerHTML = "";
        DateNew.innerHTML = "";
        DescriptionNew.innerHTML = " Input the month, day, and year in which you were born. Then click the submit button to see which dog breed you are."
  
  }
}

// define dog breeds
function userBirthday () {}

const belgiansheepdog = document.getElementById('Capricorn')
const brittanyspaniel = document.getElementById('Sagittarius')
const americanbloodhound = document.getElementById('Scorpio')
const samoyed = document.getElementById('Libra')
const sheltie = document.getElementById('Virgo')
const goldenretriever = document.getElementById('Leo')
const bordercollie = document.getElementById('Cancer')
const jackrussellterrier = document.getElementById('Gemini')
const italiangreyhound = document.getElementById('Taurus')
const germanshepherd = document.getElementById('Aries')
const aussie = document.getElementById('Pisces')
const pitbullmix = document.getElementById('Aquarius')
const help = document.getElementById('help')

// Dog Button Click Event Listeners
belgiansheepdog.addEventListener('click', function (evt) {
  console.log('belgiansheepdog button clicked' + evt.target.id); 
  const id = 'Capricorn';
  userPicked(id);
});

brittanyspaniel.addEventListener('click', function (evt) {
  console.log('brittanyspaniel button clicked' + evt.target.id);
  const id = 'Sagittarius';
  userPicked(id);
});

americanbloodhound.addEventListener('click', function (evt) {
  console.log('americanbloodhound button clicked' + evt.target.id);
  const id = 'Scorpio';
  userPicked(id);
});

samoyed.addEventListener('click', function (evt) {
  console.log('samoyed button clicked' + evt.target.id);
  const id = 'Libra';
  userPicked(id);
});

sheltie.addEventListener('click', function (evt) {
  console.log('sheltie button clicked' + evt.target.id);
  const id = 'Virgo';
  userPicked(id);
});

goldenretriever.addEventListener('click', function (evt) {
  console.log('goldenretriever button clicked' + evt.target.id);
  const id = 'Leo';
  userPicked(id);
});

bordercollie.addEventListener('click', function (evt) {
  console.log('bordercollie button clicked' + evt.target.id);
  const id = 'Cancer';
  userPicked(id);
});

jackrussellterrier.addEventListener('click', function (evt) {
  console.log('jackrussellterrier button clicked' + evt.target.id);
  const id = 'Gemini';
  userPicked(id);
});

italiangreyhound.addEventListener('click', function (evt) {
  console.log('italiangreyhound button clicked' + evt.target.id);
  const id = 'Taurus';
  userPicked(id);
});

germanshepherd.addEventListener('click', function (evt) {
  console.log('germanshepherd button clicked' + evt.target.id);
  const id = 'Aries';
  userPicked(id);
});

aussie.addEventListener('click', function (evt) {
  console.log('aussie button clicked' + evt.target.id);
  const id = 'Pisces';
  userPicked(id);
});

pitbullmix.addEventListener('click', function (evt) {
  console.log('pitbullmix button clicked' + evt.target.id);
  const id = 'Aquarius';
  userPicked(id);
});

help.addEventListener ('click',function (evt) {
  console.log('help button clicked'+evt.target.id);
  const id = 'help';
  userPicked(id)
});
