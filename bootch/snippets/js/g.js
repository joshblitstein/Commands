    function addProduct(){
        let num = products.length + 1
        let arr =[]
        for(let x=0; x < num; x++){
            arr.push('')
        }
        
        setProducts(arr)
    }
