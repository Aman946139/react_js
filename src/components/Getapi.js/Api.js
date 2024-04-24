import React from 'react'

const Api = () => {
    const data = [
        {
           
            name: "aman",
            price: "200"
        },
        {
           
            name: "aman",
            price: "200"
        },
        {
           
            name: "aman",
            price: "200"
        },
        {
           
            name: "aman",
            price: "200"
        },
        {
           
            name: "aman",
            price: "200"
        },
        {
           
            name: "aman",
            price: "200"
        },
        

        


    ]



    return (
        <div className='row'>
            {

                data.map((aman) => {
                    return (
                        <div className='col-lg-3 col-sm-12 mt-5 ms-4'>
                            
                            
                            <h1>{aman.img}
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf5rh8j_bGOxNciISYXIhaW3ebEH1yzLCFQmt9jWLK2Q&s"></img></h1>
                            <h1>{aman.name}</h1>
                            <h1>{aman.price}</h1>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Api