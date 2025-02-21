import React, {useContext, createContext, useReducer, Children} from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({initialState, reducer, Children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {Children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext)
