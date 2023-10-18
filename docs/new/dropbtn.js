window.onload = function transform(){
    var btn = document.getElementById("tbtnbox")
    document.querySelector('.dropbtn').onclick = function(){
        if(this.className.match('dropbtn_clicked')) {
            this.className = 'dropbtn'; //transform the dropbutton
            btn.style.visibility = "hidden"; //hide and show another element (tbtnbox)
        }
        else {
            this.className = 'dropbtn dropbtn_clicked';
            btn.style.visibility = "visible";
            
        }
    };
};