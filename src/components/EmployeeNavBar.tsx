import React, { useState } from "react"
import { RiAddCircleLine, RiArrowRightLine, RiCameraLine, RiCheckLine, RiCloseLine, RiDashboardLine, RiFileListLine, RiMenuLine, RiTimeLine } from "react-icons/ri"
import { Link, useLocation } from "react-router-dom"
import Logo from "../assets/Logo"
type NavItem = {
  label: string
  to: string
  icon: React.ReactNode
  badge?: number // notification count
  badgeStyle?: string
}
type NavGroup = {
  group: string
  item: NavItem[]
}
const nav: NavGroup[] = [
  {
    group: 'Expenses',
    item: [
      { label: 'Dashboard', to: '/', icon: <RiDashboardLine /> },
      { label: 'Submit', to: '/submit', icon: <RiAddCircleLine /> },
      { label: 'History', to: '/history', icon: <RiFileListLine /> }
    ]
  },
  {
    group: 'Status',
    item: [
      { label: 'Pending', to: '/pending', icon: <RiTimeLine />, badge: 2, badgeStyle: 'bg-amber-500/10 text-amber-400' },
      { label: 'Approved', to: '/approved', icon: <RiCheckLine /> },
      { label: 'Rejected', to: '/rejected', icon: <RiCloseLine /> }
    ]
  }
]
const EmployeeNavBar = () => {
  const location = useLocation()
  const isActive = (to: string) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)
  const [mobileOpen, setMobileOpen] = useState(false)
  const Content = ({ onPress }: { onPress?: () => void }) => (
    <>
      <nav className="flex-1 p-3 overflow-y-auto no-scrollbar">
        {nav.map((group) => (
          <div
            key={group.group}
            className="mb-5">
            <p className="text-white/25 text-[9px] font-semibold px-2 mb-1.5">
              {group.group}
            </p>
            {group.item.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={onPress}
                className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] font-semibold mb-0.5 transition-all ${isActive(i.to) ? 'bg-[#7c6ff7]/10 text-[#a89ef7]' : 'text-white/50 hover:bg-white/5 hover:text-white/80'}`}>
                <span className='text-base'>
                  {i.icon}
                </span>
                {i.label}
                {isActive(i.to) && (
                  <RiArrowRightLine className="ml-auto opacity-60" />
                )}
                {(i.badge ?? 0) > 0 && !isActive(i.to) && (
                  <span className={`ml-auto text-[9px] font-mono font-medium px-1.5 py-0.5 rounded-full ${i.badgeStyle}`}>
                    {i.badge}
                  </span>
                )}
              </Link>
            )
            )}
          </div>
        ))}
        <div className="mx-1 mt-2 p-3 rounded-[10px] bg-white/3 border border-white/[0.07]">
          <p className="text-[11px] font-semibold text-white/60 mb-1">
            Scan a receipt
          </p>
          <p className="text-[10px] text-white/30 mb-2.5">
            Upload a photo
          </p>
          <Link
            to='/scan'
            onClick={onPress}
            className='flex items-center justify-center gap-1.5 w-full py-1.5 rounded-md bg-[#7c6ff7]/15 text-[#a89ef7] text-[11px] font-semibold hover:bg-[#7c6ff7]/22 transition-all'>
            <RiCameraLine className="text-sm" />
            OCR scan
          </Link>
        </div>
      </nav>
      <div className="border-t border-white/6 px-4 py-3.5 flex items-center justify-between">
        <div className="flex gap-2.5">
          <div className="w-8.5 h-8.5 rounded-[9px] bg-linear-to-br from-[#3C3489] to-[#a89ef7] flex items-center justify-center text-[12px] font-bold text-white">
            TH
          </div>
          <div className="flex-1">
            <p className="text-[12px] font-semibold text-white">
              Tom Holland
            </p>
            <p className="text-[10px] text-white/30 mt-0.5">
              Employee
            </p>
          </div>
        </div>
        <button className="text-[11px] font-mono text-white/30 hover:text-white/60 transition-colors">
          Logout
        </button>
      </div>
    </>
  )
  return (
    <>
      <aside className='hidden md:flex flex-col w-57.5 h-screen bg-[#111318] border-r border-white/6'>
        <div className="px-5 py-5.5 border-b border-white/6 flex flex-col items-center gap-2">
          <Logo size="md" color="#a89ef7" />
          <div className="inline-flex gap-1 items-center text-white/30 text-md font-semibold">
            <p>Company</p>
            <p>•</p>
            <p>Employee</p>
          </div>
        </div>
        <Content />
      </aside >
      <div className="md:hidden">
        <header className="flex items-center justify-between px-4 py-3 bg-[#111318] border-b border-white/6">
          <Logo size="sm" color="#a89ef7" />
          <button
            onClick={() => setMobileOpen(true)}
            className={`text-white/50 ${mobileOpen ? 'hidden' : ''}`}>
            <RiMenuLine size={30} />
          </button>
        </header>
        {mobileOpen && (
          <div
            className="fixed inset-0 z-1 bg-black/60"
            onClick={() => setMobileOpen(false)} />
        )}
        <div className={`fixed top-0 left-0 z-2 h-full w-65 bg-[#111318] border-r border-white/6 flex flex-col transition-transform duration-200 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between p-5 border-b border-white/6">
            <Logo size="sm" color="#a89ef7" />
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white/40">
              <RiCloseLine size={30} />
            </button>
          </div>
          <Content onPress={() => setMobileOpen(false)} />
        </div>
      </div>
    </>
  )
}
export default EmployeeNavBar