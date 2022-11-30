//I'm sorry
var asd=document.getElementById("teszt").children
        var hol=0
        function elore(){
            if(++hol+1>9)
                hol=0;
            asd[hol].scrollIntoView();
        }
        function hatra(){
            if(--hol<0)
                hol=8;
            asd[hol].scrollIntoView();   
        }