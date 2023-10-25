import { useState } from "react"

export function AddItem() {
    const [name, setName] = useState("")
    const [category, setCatagory] = useState("")
    const [image, setImage] = useState("")
    const [ingredients, setIngrediants] = useState([])
    const [nutrition, setNutrition] = useState([])
    const [price, setPrice] = useState(4)
    const [errors, setErrors] = useState([])


    async function handleSubmit (e) {
        e.preventDefault();

        setErrors([]);
        const newMenuItem = {
            name,
            category,
            image,
            ingredients,
            nutrition,
            price,
        }
        //make database call here
        //handle errors here
        if(errors.length){
            //do the thing
        }
        //do something on success
        console.log(newMenuItem)
    }

    return(
        <div className="w-full max-w-lg m-auto">


             <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col m-auto space-y-6 mb-4 " onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-3">

                <label htmlFor="item-name">Item Name:</label>
                <input
                    className="bg-gray-100 rounded text-center h-10 txt-lg"
                    id="item-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name must be between 3 and 25 charaters"
                    minLength="3"
                    maxLength="25"
                    required />
                </div>

            </form>

        </div>
    )
}
