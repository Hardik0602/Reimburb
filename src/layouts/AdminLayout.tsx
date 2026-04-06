import { Outlet } from 'react-router-dom'
import NavBar from '../components/AdminNavBar'
const AdminLayout = () => {
    return (
        <div className='flex flex-col md:flex-row h-screen'>
            <NavBar />
            <main className='flex-1 overflow-scroll no-scrollbar'>
                <Outlet />
            </main>
        </div>
    )
}
export default AdminLayout