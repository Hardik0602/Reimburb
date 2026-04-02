import { Outlet } from 'react-router-dom'
import NavBar from '../components/EmployeeNavBar'
const EmployeeLayout = () => {
    return (
        <div className='flex flex-col md:flex-row max-h-screen gap-x-2'>
            <NavBar />
            <main className='flex-1 overflow-scroll no-scrollbar'>
                <Outlet />
            </main>
        </div>
    )
}
export default EmployeeLayout