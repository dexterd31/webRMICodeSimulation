exports.Operation = (req, res) => {

    const { numero1, numero2, operacion } = req.body

    let resultado
    
    if(operacion ==='suma'){
        resultado = Number(numero1) + Number(numero2)
    }else if (operacion === 'resta'){
        resultado = Number(numero1) - Number(numero2)
    }else if (operacion === 'mul'){
        resultado = Number(numero1) * Number(numero2)
    }else if (operacion === 'div'){
        resultado = Number(numero1) / Number(numero2)
    }else if (!operacion){
        resultado = '0, por favor, ingresa una opcion dentro de la lista.'
    }
    
    res.render('layout', {
        namePage: 'Unipanamericana Results',
        resultado
    })


}