function taboada(){
    var num = window.document.getElementById('numero')
    var limite = window.document.getElementById('limite')
    if(num.value.length == 0 || limite.value.length == 0){
        window.alert('Digite Um Numero')

    }else{

    var n = Number(num.value)
    var l = Number(limite.value)
    
    var x = 0
    var r = ''
    var res = window.document.getElementById('resposta')
    
    r = n * l
    res.innerHTML = `A tabuada do ${n} é:`

    do{
        r = n * x
        res.innerHTML += (`<br>${x} x ${n} = ${r}`)
        x++
            
    }while(x <= l)

    }
}