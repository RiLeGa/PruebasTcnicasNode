const range_vision = (n) =>{

    let num = n.toString()

    let valor = 0

    for (let i = 0; i < num.length; i++) {

        let digito = parseInt(num[i])

        let rangoDeVision = digito

        let sumDeValores = 0


        for (let j = i + 1; j < i + rangoDeVision || j < num.length ; j++) {
            sumDeValores += parseInt(num[j])
            console.log(sumDeValores)
        }
        for (let k = i - 1; k > i - rangoDeVision || k >= 0; k--) {
            sumDeValores += parseInt(num[k])
        }
       
        return sumDeValores


    }
}


console.log(range_vision(57145));


       