function bilangan(num){
    if(num==1) 
    return 'bukan bilangan prima';
    for(i=2;i<num;i++) 
    {
    if(num % i==0) 
    return 'bukan bilangan prima';
    }
    return 'bilangan prima';
    }
    console.log(bilangan(97)); //can input any number user want