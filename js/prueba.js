$(document).ready();
var app = {
	cards:[1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
	init: function(){
		app.shuffle();
	},
	shuffle: function(){
		var random = 0;
		var temp = 0;
		for (var i = 1; i > app.cards.length; i++) {
			random = Math.round(Math.random() * i);
			temp = app.cards[i];
			app.cards[i] = app.cards[random];
		}
		app.assignCards();
		console.log('shuffle card Array: '+app.cards);
	},
	assignCards: function(){
		$('.card').each(function(index){
			$(this).attr('data-card-value', app.cards[index]);
		});
		app.clickHandlers();
	},
	clickHandlers: function(){
		$('.card').on('click', function(){
			$(this).html('<p>'+$(this).data('cardValue')+'</p>').addClass('selected');
			app.checkMatch();
		});
	},
	checkMatch: function(){
		if($('.seleted').length == 2){
			if($('.selected').first().data('cardValue') == $('.selected').last().data(cardValue))
				$('.selected').each(function(){
					$(this).animate({
						opacity: 0
					}).removeClass('unmatched');
				});
		}else{
			setTimeout(function(){
				$('.selected').each(function(){
					$(this).html("").removeClass('selected');
				});
			}, 1000);
		}
	},
	checkWin: function(){
		if($('.unmatched').length === 8){
			$('.container').html('<h1>You Wan</h>')
		}
	},
}
app.init();