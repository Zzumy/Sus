//I'm sorry
var places=document.getElementsByClassName("rooms")[0].children
        var hol=0
        function elore(){
            if(++hol+1>9)
                hol=0;
            places[hol].scrollIntoView();
        }
        function hatra(){
            if(--hol<0)
                hol=8;
            places[hol].scrollIntoView();   
        }