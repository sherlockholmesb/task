var num=prompt("eded daxil edin")
if(num>99&& num<1000){ 
    var teklik=num%10;
    var onluq=((num-teklik)%100)/10;
    var b=(onluq*10)+teklik;
    var yuzluk=(num-b)/100
    
    if(teklik==onluq&& teklik==yuzluk && yuzluk==onluq)
    {
        alert("beraberdir")

    }
    else{
        alert("beraber deyil")
    }

}
else{
    alert("3 reqemli eded daxil edin")
}





var letter=prompt("herf daxil edin")
switch(letter){
    case "a":
        alert("Azerbaycan dili sechildi")

        break;
        case("r"):
        alert("Rus dili sechildi")
        break;
        default:
            alert("sehvdir")

}