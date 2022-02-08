import React from 'react'
//import {useSelector} from 'react-redux'
//import {RootState} from './redux/store'

import {useAppSelector} from './redux/hooks/useAppSelector'



const App = () =>{

  //const user = useSelector((state: RootState) => state.user)

  const user = useAppSelector(state => state.user);


  return(
    <div>
      Meu nome é {user.name} e tenho {user.age} anos <br />
      tema: ...
      <hr />

    <input type="text" name="" value={user.name} id="" />
    <hr />
    <button>Switch theme</button>

    </div>
  )
}

export default App;