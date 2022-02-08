import React from 'react'
//import {useSelector} from 'react-redux'
//import {RootState} from './redux/store'
import {useDispatch} from 'react-redux'
import {useAppSelector} from './redux/hooks/useAppSelector'
import {setName, setAge} from './redux/reducers/userReducer'
import {setThemeStatus} from './redux/reducers/themeReducer'


const App = () =>{

  //const user = useSelector((state: RootState) => state.user)

  const user = useAppSelector(state => state.user);
  const dispatch = useDispatch();
  const theme = useAppSelector(state => state.theme)

  const switchTheme = (newTheme: string) => dispatch(setThemeStatus(newTheme));


  

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
      dispatch(setName(e.target.value))
  }


  const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) =>{

    dispatch(setAge(parseInt(e.target.value)))

  }


  const handleSwitchTheme = () =>{
    switchTheme(theme.status === 'light' ? 'dark' : 'light');
  }

  return(
    <div>
      Meu nome é {user.name} e tenho {user.age} anos <br />
      tema: {theme.status}
      <hr />

    <input type="text" name="" value={user.name} id="" onChange={handleNameInput} />
    <input type="number" name="" value={user.age} onChange={handleChangeAge} id="" />
    <hr />
    <button onClick={handleSwitchTheme}>Switch theme</button>

    </div>
  )
}

export default App;