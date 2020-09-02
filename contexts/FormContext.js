import React, {createContext} from 'react';
import {useLocalStorageReducer} from "../hooks/useLocalStorageReducer";
import formReducer from "../reducers/form.reducer"
const defaultForm = {};
export const FormContext = createContext();
export const DispatchContext = createContext();

export function GlobalFormProvider(props) {
    const [form, dispatch] = useLocalStorageReducer("form", defaultForm, formReducer);
    console.log('dispatch', dispatch)
    return (
        <FormContext.Provider value={form}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </FormContext.Provider>
    )
}
