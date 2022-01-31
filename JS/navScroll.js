window.onscroll = function() {scrollFunction();
    function scrollFunction() {
        if (document.body.scrollTop > 360 || document.documentElement.scrollTop > 360) {
            document.getElementById("navbar").style.top ="0";
        } else {
            document.getElementById("navbar").style.top = "-50px"
        }
    }
}