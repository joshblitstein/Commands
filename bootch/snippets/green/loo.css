    function handleSubmit(e){
        e.preventDefault()
            let data = {}
            data.title = titleRef.current.value
            data.products = []
            
            let arrOne = document.querySelectorAll('.layer1 ')
            for(let x=0; x< arrOne.length; x++){
                let prodObj = {}
                let arrTwo = arrOne[x].parentNode.parentNode.querySelectorAll('.layer2')
                 
                  prodObj.text = arrOne[x].value
                  console.log(arrOne[x].nextElementSibling.type)
                  if(arrOne[x].nextElementSibling.type === undefined){
                    prodObj.file = 'notAFile'
                    console.log('beens')
                  }
                  //console.log(arrTwo)
                  prodObj.layerTwo = []
                for(let i=0; i< arrTwo.length; i++){
                    let layerTwoObj = {}
                    
                    layerTwoObj.text =arrTwo[i].value
                    if(arrTwo[i].nextElementSibling.type === undefined){
                        layerTwoObj.file = 'notAFile'
                        console.log('beens')
                      }
                   
                    prodObj.layerTwo.push(layerTwoObj)
                    layerTwoObj.layerThree = []
                    let arrThree = arrTwo[i].parentNode.parentNode.querySelectorAll('.layer3')
                    for(let j=0; j< arrThree.length;j++ ){
                        let layerThreeObj = {}
                        layerThreeObj.text = arrThree[j].value
                        if(arrThree[j].nextElementSibling.type === undefined){
                            layerThreeObj.file = 'notAFile'
                            console.log('beens')
                          }
                        layerTwoObj.layerThree.push(layerThreeObj)
                    }
                }

                 data.products.push(prodObj)
            }
            console.log(data)
            
          /*   db.collection('testdata').doc('menu').set(
                data
            )  */
            
            db.collection('Menu').doc('menu-item: '+data.title).set(
                data
            ) 

                 
            
       // console.log(data)
         
    }