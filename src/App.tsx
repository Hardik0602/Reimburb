import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import EmployeeLayout from './layouts/EmployeeLayout'
import ManagerLayout from './layouts/ManagerLayout'
import AdminLayout from './layouts/AdminLayout'
import EDashboard from './pages/employee/Dashboard'
import EApproved from './pages/employee/Approved'
import History from './pages/employee/History'
import EPending from './pages/employee/Pending'
import ERejected from './pages/employee/Rejected'
import Submit from './pages/employee/Submit'
import MDashboard from './pages/manager/Dashboard'
import Team from './pages/manager/Team'
import MExpenses from './pages/manager/Expenses'
import MPending from './pages/manager/Pending'
import MApproved from './pages/manager/Approved'
import MRejected from './pages/manager/Rejected'
import ADashboard from './pages/admin/Dashboard'
import AExpenses from './pages/admin/Expenses'
import APending from './pages/admin/Pending'
import AApproved from './pages/admin/Approved'
import ARejected from './pages/admin/Rejected'
import Users from './pages/admin/Users'
import Rules from './pages/admin/Rules'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/login' element={<Login />} />
      <Route
        path='/'
        element={
          <EmployeeLayout />
        }>
        <Route index element={<EDashboard />} />
        <Route path='approved' element={<EApproved />} />
        <Route path='history' element={<History />} />
        <Route path='pending' element={<EPending />} />
        <Route path='rejected' element={<ERejected />} />
        <Route path='submit' element={<Submit />} />
      </Route>
      <Route
        path='/manager'
        element={
          <ManagerLayout />
        }>
        <Route index element={<MDashboard />} />
        <Route path='team' element={<Team />} />
        <Route path='expenses' element={<MExpenses />} />
        <Route path='pending' element={<MPending />} />
        <Route path='approved' element={<MApproved />} />
        <Route path='rejected' element={<MRejected />} />
      </Route>
      <Route
        path='/admin'
        element={
          <AdminLayout />
        }>
        <Route index element={<ADashboard />} />
        <Route path='expenses' element={<MExpenses />} />
        <Route path='pending' element={<APending />} />
        <Route path='expenses' element={<AExpenses />} />
        <Route path='approved' element={<AApproved />} />
        <Route path='rejected' element={<ARejected />} />
        <Route path='users' element={<Users />} />
        <Route path='rules' element={<Rules />} />
      </Route>
    </>
  )
)
export default function App() {
  return <RouterProvider router={router} />
}