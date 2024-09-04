function Clock(){
    var months=["Jan" , "Feb", "Ma", "Apr", "Mei", "Jun", "Jul", "Aug", "Okt", "Nov", "Dec"];
    var days=["Zo","Ma", "Di","Wo","Do","Vr","Za"];

    var td= new Date();
    document.getElementById('date').innerHTML=(days[td.getDay()]+" "
    +td.getDate()+" "+ months[td.getMonth()]+" "+ td.getFullYear()+ "|");

    var H=td.getHours();
    var M=td.getMinutes();
    var S=td.getSeconds();

    H = H<10? '0'+H:H;
    M = M<10? '0'+M:M;
    S = S<10? '0'+S:S;
    
    document.getElementById('hours').innerHTML=(H)
    document.getElementById('minutes').innerHTML=(M)
    document.getElementById('seconds').innerHTML=(S)
    
}var inter = setInterval(Clock, 400);


