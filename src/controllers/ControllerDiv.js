module.exports = {
    async div(req, res){
        const {number} = req.body;
        const divisores = [];

       // if(!Number.isInteger(number)){
       //     return res.status(400).json({ error: 'Valor Invalido'})        
       // }
        let isPrime = false;

        for (let i = 1; i <= number; i++){
            if(number % i == 0){
                divisores.push(i);
            }
        }
        if(divisores.length == 2 | number ==1  ){
            isPrime = true
        }
        
        return res.json({number : number, isPrime: isPrime, divisores : divisores});
    }
    
}