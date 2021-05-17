window.onload = function transform(){
    document.querySelector('.dropbtn').onclick = function(){
        if(this.className.match('dropbtn_clicked')) {
            this.className = 'dropbtn'; //transform the dropbutton
            document.getElementById("tbtnbox").style.visibility = "hidden"; //hide and show another element (tbtnbox)
        }
        else {
            this.className = 'dropbtn dropbtn_clicked';
            document.getElementById("tbtnbox").style.visibility = "visible";
            
        }
    };
};