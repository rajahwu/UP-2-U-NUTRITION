import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { useModal } from '../../../../context/Modal';
import { editMenuItemThunk, getAllMenuItemThunk } from '../../../../store/menus';
import './AddItem.css'
import { update } from 'lodash';
import LoadingScreen from '../../../LoadingScreen';

const EditItem = ({ menu_item }) => {
    // console.log('MENU ITEM:', menu_item)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { closeModal } = useModal()
    const menuItemObj = useSelector(state => state.menuReducer)
    const user = useSelector(state => state.session.user)


    const [name, setName] = useState(menu_item?.name || "");
    const [category, setCategory] = useState(menu_item?.category || "");
    const [price, setPrice] = useState(menu_item?.price || "");
    const [image, setImage] = useState(menu_item?.image || "")
    const [ingredients, setIngredients] = useState(
        menu_item?.ingredients.map(ingredient => ingredient.ingredient_name).join(',') || ''
    );
    const [nutrientEntries, setNutrientEntries] = useState(
        menu_item?.nutritions || [{ nutrient: '', weight: '' }]
    );
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState('');

    useEffect(() => {

        const error = {};

        const integerRegex = /^\d+$/;

        if (!name) error.name = 'Description is required';
        if (name.trim().length < 5)
            error.name = 'Minimum of 2 characters is required';
        if (ingredients.trim().length < 2)
            error.ingredients = 'Mininum of 2 characters only';
        if (!category) error.category = 'Exercise is required';
        if (category.trim().length < 2)
            error.category = 'Minimum of 2 characters is required';
        if (category.trim().length > 200)
            error.category = 'Maximum of 200 characters only';
        if (!price) error.price = 'Reps is required';
        if (!integerRegex.test(price))
            error.price = 'Please enter a valid integer for Price';

        setErrors(error);
    }, [name, ingredients, category, price]);

    const addNutrientEntry = () => {
        setNutrientEntries([...nutrientEntries, { nutrient: '', weight: '' }]);
    };

    const removeNutrientEntry = (index) => {
        const updatedEntries = [...nutrientEntries];
        updatedEntries.splice(index, 1);
        setNutrientEntries(updatedEntries);
    };

    const handleNutrientChange = (e, index) => {
        const updatedEntries = [...nutrientEntries];
        updatedEntries[index].nutrient = e.target.value;
        setNutrientEntries(updatedEntries);
    };

    const handleWeightChange = (e, index) => {
        const updatedEntries = [...nutrientEntries];
        updatedEntries[index].weight = e.target.value;
        setNutrientEntries(updatedEntries);
    };



    async function handleSubmit(e) {
        e.preventDefault();


        const updatedMenuItem = new FormData()
        // console.log("===============image", image)
        updatedMenuItem.append("name", name)
        updatedMenuItem.append('image', image)
        updatedMenuItem.append('category', category)
        // console.log(typeof price)
        updatedMenuItem.append('price', price)
        updatedMenuItem.append('ingredient_name', ingredients)
        // console.log('AFTER:', updatedMenuItem)



        // console.log("========", nutrientEntries)
        const nutrientArray = [];
        const weightArray = [];
        // const percentageArray = [];

        nutrientEntries.forEach((entry) => {
            nutrientArray.push(entry.nutrient);
            weightArray.push(entry.weight);
        });

        if (nutrientArray.length > 0) {
            // Append nutrient data only if there are selected nutrients
            updatedMenuItem.append(`nutrient`, nutrientArray);
            updatedMenuItem.append(`weight`, weightArray);
        }



        if (!Object.keys(errors).length) {
            setIsLoading(true)
            const result = await dispatch(editMenuItemThunk(menu_item.id, updatedMenuItem));



            if (!result.errors) {
                closeModal();
                navigate('/menu');
            } else {
            }
        }
    }

    return (

        <div className="edit-item-form">
            {isLoading ? (
                <div className='loading-screen'>
                    <LoadingScreen />
                </div>
            ) : (<form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <h1 id="form-title">EDIT FORM</h1>
                <div className="flex-col flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Image
                        </label>
                        {typeof image === 'object' ? null : <img id="edit-image-preview" src={image} alt="Preview" />}
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="file"
                            accept='image/*'
                            filename={image && image.name}
                            placeholder="Image..."
                            onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Category
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Category..." value={category}
                            onChange={(e) => setCategory(e.target.value)} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Price
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Price..." value={price}
                            onChange={(e) => setPrice(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Ingredient
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="ingredients"
                            placeholder="Separated by ',' without spacing"
                            type="text"
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                        />
                        <p className="text-gray-600 text-xs italic">For example: Milk,Egg,Sugar</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            Nutritient Fields
                        </label>
                        {nutrientEntries.map((entry, index) => (<div key={index} className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={entry.nutrient} onChange={(e) => handleNutrientChange(e, index)}>
                                <option value="">Select Nutrient</option>
                                <option value="Calories">Calories</option>
                                <option value="Fat">Fat</option>
                                <option value="Carb">Carb</option>
                                <option value="Sugar">Sugar</option>
                                <option value="Protein">Protein</option>
                                <option value="Caffeine">Caffeine</option>
                                <option value="Vitamins & Minerals">Vitamins & Minerals</option>

                            </select>
                            <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 ${entry.nutrient ? 'hide-svg' : ''}`}>
                                <svg className="fill-current w-4 w-6 mb-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                            {entry.nutrient && (
                                <div>
                                    <input
                                        className="appearance-none mt-4 block w-full bg-gray-200 text-gray-700 border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        placeholder="Weight..."
                                        type="text"
                                        value={entry.weight}
                                        onChange={(e) => handleWeightChange(e, index)}
                                    />

                                </div>
                            )}
                            <button className="red-btn-add" type="button" onClick={() => removeNutrientEntry(index)}>Remove</button>
                        </div>))}
                        <button className="green-btn-add" type="button" onClick={addNutrientEntry}>Add Nutrient Field</button>
                    </div>
                </div>
                <button className="blue-btn-add" type="submit">Submit</button>
            </form >)}

        </div >
    );
};

export default EditItem
