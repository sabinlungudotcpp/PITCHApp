import React, {useReducer} from 'react';

export default (reducer, actions, value) => {
    const Context = React.createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, value);
        const boundActions = {};

        for(let key in actions) { // For every key in the actions
            boundActions[key] = actions[key](dispatch);
        }

        return (<Context.Provider value = {{state, ...boundActions}}>
            {children}
        </Context.Provider>
        );
    };

    return {Context, Provider}; // Return the context and provider
};