import { createContext, useState } from "react";

export const ShoppingCartContext = createContext(null);

export function ShoppingCartProvider({ children }) {
	const [cartProducts, setCartProducts] = useState([]);

	const getProductInCart = (product) => {
		return cartProducts.find(
			(prod) =>
				prod["id"] === product["id"] && prod["size"] == product["size"]
		);
	};

	const addProductToCart = (product) => {
		const productInCart = getProductInCart(product);

		if (productInCart) {
			setCartProducts(
				cartProducts.map((prod) =>
					prod["id"] === product["id"]
						? { ...prod, quantity: prod["quantity"] + 1 }
						: prod
				)
			);
		} else {
			setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
		}
	};

	const removeProductFromCart = (product) => {
		const productInCart = getProductInCart(product);

		if (productInCart && productInCart["quantity"] === 1) {
			setCartProducts(
				cartProducts.filter(
					(prod) =>
						prod["id"] !== product["id"] &&
						prod["size"] !== product["size"]
				)
			);
		} else {
			setCartProducts(
				cartProducts.map((prod) =>
					prod["id"] === product["id"] &&
					prod["size"] &&
					product["size"]
						? { ...prod, quantity: prod["quantity"] - 1 }
						: prod
				)
			);
		}
	};

	const clearCartProducts = () => {
		setCartProducts([]);
	};

	return (
		<ShoppingCartContext.Provider
			value={{
				cartProducts,
				setCartProducts,
				getProductInCart,
				addProductToCart,
				removeProductFromCart,
				clearCartProducts,
			}}>
			{children}
		</ShoppingCartContext.Provider>
	);
}
