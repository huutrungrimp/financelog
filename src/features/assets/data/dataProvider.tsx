import { createContext, useContext } from "react";
import { AppContextProps } from "../../../interface";

export const getCovidData = async () => {
    const response = await fetch("https://covid19.up.railway.app/ontario/demography");
    const data = await response.json();
    return data
}


export const dataContext = createContext<AppContextProps | null>(null);

export const DataProvider = dataContext.Provider;
export const BackendUrlConsumer = dataContext.Consumer;

export const useData = () => useContext(dataContext);