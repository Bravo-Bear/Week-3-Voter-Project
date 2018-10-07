let voters = [];
let democratCandidates = [];
let republicanCandidates = [];
let independentCandidates = [];
let fakeName = [
  `Daniele`,
  `Albina`,
  `Eduard`,
  `John`,
  `Maurice`,
  `Bambi`,
  `Domonique`,
  `Brande`,
  `Jenae`,
  `Dewitt`,
  `Fiona`,
  `Judie`,
  `Alishia`,
  `Cary`,
  `Liz`,
  `Marry`,
  `Dakota`,
  `Rachal`,
  `Cletus`,
  `Karla`,
  `Chaya`,
  `Judi`,
  `Waldo`,
  `Tisa`,
  `Wynona`,
  `Shay`,
  `Meredith`,
  `Vincent`,
  `Jaymie`,
  `Dannette`,
  `Marvella`,
  `Deshawn`,
  `Jessenia`,
  `Carletta`,
  `Brynn`,
  `Elina`,
  `Gertrude`,
  `Emelia`,
  `Audra`,
  `Sarina`,
  `Kenia`,
  `Nathan`,
  `Karyl`,
  `Tova`,
  `Dia`,
  `Manual`,
  `Fransisca`,
  `Chelsie`,
  `Verlie`,
  `Emma`,
  `Maryln`
];

function getWinner() {
  let winnerPool = [...republicanCandidates, ...independentCandidates, ...democratCandidates]
  let max = winnerPool[0]
  winnerPool.forEach((e) => {
    max.votes > e.votes ? null : max = e
  })
  return max.name
}

function ranIdeology() {
  let array = [`Conservative`, `Liberal`, `Neutral`];
  return array[mathRan(3)];
}

function mathRan(num) {
  return Math.floor(Math.random() * num);
}

function voterChoice(num1, num2, num3) {
  if (Math.random() >= num1) {
    republicanCandidates[mathRan(republicanCandidates.length)].votes += 1;
  } else if (Math.random() >= num2) {
    democratCandidates[mathRan(democratCandidates.length)].votes += 1;
  } else if (Math.random() >= num3) {
    independentCandidates[mathRan(independentCandidates.length)].votes += 1;
  }
}

function vote() {
  voters.forEach(e => {
    let pie = e.ideology;
    if (pie == `Conservative`) {
      voterChoice(0.4, 0.8, 0.8);
    } else if (pie == `Liberal`) {
      voterChoice(0.8, 0.4, 0.8);
    } else if (pie == `Neutral`) {
      voterChoice(0.75, 0.75, 0.5);
    }
  })
  alert(`The Winner is ${getWinner()}!!`);
}
class Person {
  constructor(name) {
    this.name = name;
  }
}
class Voter extends Person {
  constructor(name, ideology) {
    super(name);
    this.ideology = ideology;
    voters.push(this);
  }
}

class Candidate extends Person {
  constructor(name, party) {
    super(name);
    this.party = party;
    this.votes = 0;
    if (party == `Democrat`) {
      democratCandidates.push(this);
    } else if (party == `Republican`) {
      republicanCandidates.push(this);
    } else {
      independentCandidates.push(this);
    }
  }
}

$("#voter-form form").submit(event => {
  // alert($(`#voter-name`).val())
  let butt = new Voter($(`#voter-name`).val(), $(`#voter-ideology`).val());
  console.log(butt);
  $(`#voter-list ul`).append(`
    <li class="list-group-item">
      ${butt.name}
      ${butt.ideology}
    </li>`);
  event.preventDefault();
});

$("#candidate-form form").submit(event => {
  // alert($(`#voter-name`).val())
  let butt = new Candidate(
    $(`#candidate-name`).val(),
    $(`#candidate-party`).val()
  );
  console.log(butt);
  $(`#candidate-list ul`).append(`
    <li class="list-group-item">
      ${butt.name}
      ${butt.party}
    </li>`);
  event.preventDefault();
});

$(`#randomize-btn`).click(() => {
  for (var i = 0; i < 100; i++) {
    let butt = new Voter(fakeName[mathRan(50)], ranIdeology());
    $(`#voter-list ul`).append(`
    <li class="list-group-item">
      ${butt.name}
      ${butt.ideology}
    </li>`);
  }
});

// $(`#vote-btn-div button`).click(vote());
$(`#vote-btn-div button`).click(() => {
  vote()
})