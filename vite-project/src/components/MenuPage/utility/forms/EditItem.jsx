import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { useModal } from '../../../../context/Modal';


const EditItem = ({ menu_item }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { closeModal } = useModal()
    // const { id } = useParams()
    const menuItemObj = useSelector(state => state.menuReducer)
    const user = useSelector(state => state.session.user)
    // const menuItem = menuItemObj[id]

    const [name, setName] = useState(menu_item?.name || "");
    const [category, setCategory] = useState(menu_item?.category || "");
    const [price, setPrice] = useState(menu_item?.price || "");
    const [image, setImage] = useState(menu_item?.image || "")
    const [nutrient, setNutrient] = useState(menu_item?.nutrient || "")
    const [weight, setWeight] = useState(menu_item?.weight || "")
    const [percentage, setPercentage] = useState(menu_item?.percentage || "")
    const [ingredient, setIngredient] = useState(menu_item?.ingredient || "")

    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState('');

    useEffect(() => {
        const error = {}

        if (!name) error.name = "Name is required"
        if (!category) error.category = "Name is required"
        if (!price) error.price = "Name is required"
        if (!image) error.image = "Name is required"
        if (!nutrient) error.nutrient = "Name is required"
        if (!weight) error.weight = "Name is required"
        if (!percentage) error.percentage = "Name is required"
        if (!ingredient) error.ingredient = "Name is required"
        setErrors(error)
    }, [name, category, price, image, weight, percentage, ingredient])

    const submitForm = async (e) => {
        e.preventDefault()

        const newMenuItem = new FormData()
        newMenuItem.append("name", name)
        newMenuItem.append('image', image)
        newMenuItem.append('category', category)
        newMenuItem.append('price', price)
        newMenuItem.append('ingredient_name', ingredient)
        newMenuItem.append('nutrient', nutrient)
        newMenuItem.append('weight', weight)
        newMenuItem.append('percentage', percentage)

        if (!Object.values(errors).length) {
            const data = await dispatch()
        }

    }

    return (
        <div className="edit-modal">
            {menu_item && (
                <div>
                    <p>{menu_item.name}</p>
                    <p>{menu_item.category}</p>
                    <p>{menu_item.id}</p>
                </div>
            )}
        </div>
    )
}

export default EditItem
