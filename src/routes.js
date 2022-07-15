import {Route, Routes, Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Auth from './pages/Auth'
import Form from './pages/Form'
import ListRequest from './pages/ListRequest'
import Main from './pages/Main'
import Map from './pages/Map'
import MyProfile from './pages/MyProfile'
import Profile from './pages/Profile'
import Registr from './pages/Registr'
import Settings from './pages/Settings'
import MapCustomer from './pages/MapCustomer'

export default function Isroutes() {
    const isAuth = useSelector(state => state.AuthReducer)
    const isExecutor = useSelector(state => state.executorReducer)

    if(isAuth) {
        if(isExecutor == 'Я исполнитель') {
            return (
                <Routes>
                    <Route path='/request' element={<Map/>} />
                    <Route path='/profile' element={<MyProfile/>} />
                    <Route path='/settings' element={<Settings/>} />
                    <Route path='*' element={<Navigate to='/request'/>}/>
                </Routes>
            )
        } else {
            return (
                <Routes>
                    <Route path='/request' element={<MapCustomer/>} />
                    <Route path='/form' element={<Form/>} />
                    <Route path='/profile' element={<MyProfile/>} />
                    <Route path='/user/:id' element={<Profile/>} />
                    <Route path='/settings' element={<Settings/>} />
                    <Route path='/response' element={<ListRequest />}/>
                    <Route path='*' element={<Navigate to='/request'/>}/>
                </Routes>
            )
        }
        
    } else {
        return (
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/auth' element={<Auth />}/>
                <Route path='/reg' element={<Registr />}/>
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        )
        
    }
}