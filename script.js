let today = new Date();
let hours = today.getHours();
let greeting = $('#greeting');
let hideBtn, showBtn
hideBtn = $('.hideBtn');
showBtn = $('#showBtn')

if (hours > 0 && hours < 12) {
    greeting.append('Good Morning!')
} else if (hours > 11 && hours < 16) {
    greeting.append('Good Afternoon!')
}else {  
    greeting.append('Good Evening!') 
}

  const settings = {
    "url": "https://stoic-quotes.com/api/quote",
    "method": "GET"
  }

  hideBtn.hide();

$('#showBtn').on('click', function () {
    showBtn.text('New quote').hide().fadeIn(200);
    $.ajax(settings)
    .done(function (data) {
        var quotesMsg = "";
            quotesMsg += '<div class = "item-details">' +
            '<p>' + '"' + data.text + '"' +'</p>' + 
            '<h5>"' + data.author + '"</h5>';
           $('#showQuotes').empty();
           showBtn.fadeOut(500);
           hideBtn.fadeIn(500);

        $('.hideBtn').on('click', function () {
            showBtn.fadeIn(500)
            hideBtn.fadeOut(500);
            $('#showQuotes').empty();
        })

       $('#showQuotes').empty() 
       $('#showQuotes').append(quotesMsg)
    })
    .fail(function () {
        $('#showQuotes').empty();
        $('#showQuotes').append("Something went wrong. Try again!");
        showBtn.text('Try Again!').hide().fadeIn(500);
    })
})
