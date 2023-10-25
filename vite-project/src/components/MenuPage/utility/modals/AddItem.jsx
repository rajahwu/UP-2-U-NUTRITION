import { useState } from "react"

export function AddItem() {
    // const [name, setName] = useState("")
    // const [category, setCatagory] = useState("")
    // const [image, setImage] = useState("")
    // const [ingredients, setIngrediants] = useState([])
    // const [nutrition, setNutrition] = useState([])
    // const [price, setPrice] = useState(4)
    // const [errors, setErrors] = useState([])


    async function handleSubmit (e) {
        e.preventDefault();

        // setErrors([]);
        // const newMenuItem = {
        //     name,
        //     category,
        //     image,
        //     ingredients,
        //     nutrition,
        //     price,
        // }
        // //make database call here
        // //handle errors here
        // if(errors.length){
        //     //do the thing
        // }
        // //do something on success
        // console.log(newMenuItem)
    }

    return(
        <div className="add-modal">Test
            {/* <form className="add-item-form" onSubmit={handleSubmit}>
            <label htmlFor="item-name">Item Name</label>
                <input
                    id="item-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name must be between 3 and 25 charaters"
                    minLength="3"
                    maxLength="25"
                    required />
                <label htmlFor="item-name">Item Name</label>
            </form> */}


            {/* <form className="add-item-form" onSubmit={handleSubmit}>

                <label htmlFor="item-name">Item Name</label>
                <input
                    id="item-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name must be between 3 and 25 charaters"
                    minLength="3"
                    maxLength="25"
                    required />
                <label htmlFor="item-name">Item Name</label>
                <input
                    id="item-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name must be between 3 and 25 charaters"
                    minLength="3"
                    maxLength="25"
                    required />

            </form> */}

        </div>
    )
}
