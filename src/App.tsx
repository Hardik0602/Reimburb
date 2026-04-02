import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import EmployeeLayout from './layouts/EmployeeLayout'
import ManagerLayout from './layouts/ManagerLayout'
import AdminLayout from './layouts/AdminLayout'
import EmployeeProfile from './pages/employee/Profile'
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
        <Route index element={<EmployeeProfile />} />
        <Route path='dummy' element={<Login />} />
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