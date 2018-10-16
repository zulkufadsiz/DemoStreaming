
    $(document).ready(function(){
        var options = {
          valueNames: ['name']
        };
        var userList = new List('titles', options);
      });


   $('.has-spinner').click(function () {
        var btn = $(this);
        $(btn).buttonLoader('start');
        setTimeout(function () {
            $(btn).buttonLoader('stop');
        }, 3000);
    });
