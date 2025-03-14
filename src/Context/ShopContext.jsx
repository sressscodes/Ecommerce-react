import React, { createContext, ShopContext } from "react"; /*6.9k (gzipped: 2.7k)*/
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
    const contextValue = {all_product}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
} 

export default ShopContextProvider;