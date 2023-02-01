//Greetings
let date = new Date();
let hourNow = date.getHours();
let $greetings = $('#greetings');
if(hourNow > 0 && hourNow < 12 ) {
    $greetings.text("GOOD MORNING" );
}else if (hourNow >= 12 && hourNow < 16) {
    $greetings.text("GOOD AFTERNOON" );
}else if (hourNow >= 16 && hourNow < 24) {
    $greetings.text("GOOD EVENING" );
}else {
    $greetings.text("WELCOME");
}

//Time box
setInterval(function () {
   const today = new Date();
   const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   let $time = $('#time');
   $time.text(time);
},1000)

$(function () {
    //Adding list
    let $addBtn = $('#addbtn');
    let $showForm = $('#showForm');
    let $list = $('ul');
    let $displayBefore = $('.displayBefore');
    $showForm.hide();
    $addBtn.on('click', function () {
       $showForm.show();
      $displayBefore.css("height", "180px");
       $(this).hide(); 
    });

    $showForm.on('submit', function (e) {
        e.preventDefault();
        let $addtask = $('input:text').val();
        if ($addtask == '') {
            fasle;
        }else {
        $displayBefore.fadeOut(200);
        $('ul').append('<li class = "list">' + '<input type="radio"> ' + $addtask + '</li>');
        $('li:last').hide().fadeIn(1600)
        $('input:text').val('');
        };
       counter();
    });

    //Counter Function
    function counter() {
        let items = $('li[class != complete]').length;
        let $counter = $('#counter').text(items);

        if (items < 1 || items == 1) {
            $counter.text(items + ' task');
        }else {
            $counter.text(items + ' tasks');
        };
    };
    counter();

    //Taking list down and removing it
    $list.on('click', 'li', function () {
        var $this = $(this);
        $this.remove();
        $this.addClass('complete');
        item = $this.text();
        $list.append('<li class="complete">' + item  + '</li>');
        $showForm.hide();
        $addBtn.show();
        $('.complete').on('click', function () {
           $(this).remove();
        });
        counter();
    });
})

//Starter page
$(function () {
    let $infoEffect = $('.info');
    $infoEffect.hide().fadeIn(2000);
 });