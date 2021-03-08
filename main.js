$(document).ready(function () {
    let holder = $('#holder');
    let current = 1;
    let loop;
    loop = setInterval(next,4000);
    function next () {
        current++;
        if(current===6) {
            current = 1;
        };
        holder.append('<img src="images/'+current+'.jpg")></img>');
        holder.animate ({
            marginLeft: '-=1000'
        },1500)
    }
});