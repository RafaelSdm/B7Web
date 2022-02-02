import {Home} from '../pages/home'
import {About}  from '../pages/about'
import {AboutRafael} from '../pages/aboutRafael'
import {AboutJose} from '../pages/aboutJose'
import {NotFound} from '../pages/NotFound'
import {AboutItem} from '../pages/aboutItem'
import {RequireAuth} from '../RequireAuth'

import {Route, Routes, useRoutes} from 'react-router-dom'


export const MainRoutes = () =>{

  /*
    return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<RequireAuth><About/></RequireAuth>}/>
        <Route path="/about/rafael" element={<AboutRafael/>}/>
        <Route path="/about/jose" element={<AboutJose/>}/>
        <Route path="/about/:slug" element={<AboutItem/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    )
  */

    return useRoutes([
      {path:'/', element:<Home/>},
      {path: '/about', element: <RequireAuth><About/></RequireAuth>},
      {path: '/about/:slug', element: <AboutItem/> },
      {path: '*', element: <NotFound/>}
    ])
}