//Questions

var questions = [
	{
		question: "Who is the Hero in the Legend of Zelda series?",
		answers: {
			a: 'Zelda',
			b: 'Link',
            c: 'Tingle',
            d: 'Ganondorf'
		},
		correctAnswer: 'b'
	},
	{
		question: "Who is Mario's brother?",
		answers: {
			a: 'Wario',
			b: 'Waluigi',
            c: 'Luigi',
            d: 'Yoshi'
		},
		correctAnswer: 'c'
    },
    {
		question: "Pikachu belongs to which game series?",
		answers: {
			a: 'Pokempon',
			b: 'The Witcher',
            c: 'Metroid',
            d: 'Fallout'
		},
		correctAnswer: 'a'
    },
    {
		question: "What city does GTA 5 take place in?",
		answers: {
            c: 'Los Gatos',
			a: 'Salt Lake City',
			b: 'Tampa',
            d: 'Los Santos'
		},
		correctAnswer: 'd'
    },
    {
		question: "What is the name of the protagonist in God of War?",
		answers: {
			a: 'Ares',
			b: 'Athena',
            c: 'Kratos',
            d: 'Zues'
		},
		correctAnswer: 'c'
	}
];

//Timer

var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.finished();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Left: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
	}

	card.append("<button id='finish'>Finished</button>");
  },

  finished: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>Finished!</h2>");
    card.append("<h3>Correct: " + this.correct + "</h3>");
    card.append("<h3>Incorrect: " + this.incorrect + "</h3>");
  }
};

//Stuff to make the game work

$(document).on("click", "#start", function() {
	game.start();
  });
  
  $(document).on("click", "#finished", function() {
	game.finished();
  });