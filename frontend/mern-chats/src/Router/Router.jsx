import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main'
import ChatPage from '../page/ChatPage/ChatPage'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<ChatPage></ChatPage>
            }
        ]
    }
])










export default router