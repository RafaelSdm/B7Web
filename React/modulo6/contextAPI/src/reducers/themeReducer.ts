import {reducerActionType} from '../types/reducerAction'

export type ThemeType = {
    status: 'dark' | 'light';
}

export const themeInitialState: ThemeType = {
    status:'light'

}

export const themeReducer = (state: ThemeType, action: reducerActionType ) =>{

    switch(action.type){
        case 'CHANGE_STATUS':
            return {...state, name: action.payload.status};
        break;

        
    }

    return state;

}