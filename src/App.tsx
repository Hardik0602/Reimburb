import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import EmployeeLayout from './layouts/EmployeeLayout'
import ManagerLayout from './layouts/ManagerLayout'
import AdminLayout from './layouts/AdminLayout'
import EmployeeDashboard from './pages/employee/Dashboard'
import Approved from './pages/employee/Approved'
import History from './pages/employee/History'
import Pending from './pages/employee/Pending'
import Rejected from './pages/employee/Rejected'
import Submit from './pages/employee/Submit'
import AdminProfile from './pages/admin/Profile'
import ManagerProfile from './pages/manager/Profile'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/login' element={<Login />} />
      <Route
        path='/'
        element={
          <EmployeeLayout />
        }>
        <Route index element={<EmployeeDashboard />} />
        <Route path='approved' element={<Approved />} />
        <Route path='history' element={<History />} />
        <Route path='pending' element={<Pending />} />
        <Route path='rejected' element={<Rejected />} />
        <Route path='submit' element={<Submit />} />
      </Route>
      <Route
        path='/admin'
        element={
          <AdminLayout />
        }>
        <Route index element={<AdminProfile />} />
        <Route path='dummy' element={<Login />} />
      </Route>
      <Route
        path='/manager'
        element={
          <ManagerLayout />
        }>
        <Route index element={<ManagerProfile />} />
        <Route path='dummy' element={<Login />} />
      </Route>
    </>
  )
)
export default function App() {
  return <RouterProvider router={router} />
}