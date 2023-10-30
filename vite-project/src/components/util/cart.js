import { addToCart } from "../../store/cart";

export function handleAddToCart(item) {
    return addToCart(item)
}