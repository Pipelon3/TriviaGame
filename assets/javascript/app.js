//Stuff to make the game work

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        var output = [];
        car answers;
        for(car i=0; i<questions.length; i++){
            answers = [];
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                        +'<input type="radio" name="question'+i+'" value='letter+'"> '
                        + letter + ':'
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                +'<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer){
		
	}

	
	showQuestions(questions, quizContainer);

	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

//Questions

var myQuestions = [
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
    }
    {
		question: "Pikachu belongs to which game series?",
		answers: {
			a: 'Pokempon',
			b: 'The Witcher',
            c: 'Metroid',
            d: 'Fallout'
		},
		correctAnswer: 'a'
    }
    {
		question: "What city does GTA 5 take place in?",
		answers: {
            c: 'Los Gatos',
			a: 'Salt Lake City',
			b: 'Tampa',
            d: 'Los Santos'
		},
		correctAnswer: 'd'
    }
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