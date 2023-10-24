import { useState } from "react"

export function AddItem() {
    const [name, setName] = useState("")
    const [category, setCatagory] = useState("")
    const [image, setImage] = useState("")
    const [ingredients, setIngrediants] = useState([])
    const [nutrition, setNutrition] = useState([])
    const [price, setPrice] = useState(4)


    return(
        <div className="add-modal">
            Test

        </div>
    )
}
