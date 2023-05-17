const number_cardinality = (n) =>{

    if(n % 10 === 0){
      return "zero";
    }
    else if(n % 10 === 5){
       return "five";
    }
    else if(n % 2 === 0 && n % 10 !== 0){
       return "even";
    }
    else if(n % 2 !== 0 && n % 10 !== 5){
       return "odd";
    }

}

console.log(number_cardinality());
