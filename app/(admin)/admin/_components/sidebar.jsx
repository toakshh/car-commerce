'use client'
import { cn } from '@/lib/utils';
import { Calendar, Car, Cog, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'



// Navigation items
const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
    },
    {
      label: "Cars",
      icon: Car,
      href: "/admin/cars",
    },
    {
      label: "Test Drives",
      icon: Calendar,
      href: "/admin/test-drives",
    },
    {
      label: "Settings",
      icon: Cog,
      href: "/admin/settings",
    },
  ];

const AdminSidebar = () => {

    const pathname = usePathname()
  return (
    <>
        {/* Desktop sidebar */}
        <div className='hidden md:flex flex-col gap-4 h-full overflow-y-auto shadow-sm bg-white border-r'>
            {routes?.map((route) => (
                <Link 
                    href={route.href}
                    key={route.href}
                    className={cn("flex items-center gap-x-2 h-12 text-slate-800 text-sm font-medium pl-6 hover:text-slate-600 hover:bg-slate-100/50 transition-colors", pathname === route.href ? "text-white bg-gray-900 hover:bg-blue-300 hover:text-gray-700" : "" )}
                >
                    <route.icon className="mr-2 h-5 w-5" />
                    {route.label}
                </Link>
            ))}         
        </div>

        {/* Mobile sidebar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t flex justify-around items-center h-16">
        {routes?.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex flex-col items-center mx-2 justify-center text-slate-700 text-xs font-medium transition-all",
              pathname === route.href ? "text-white bg-gray-800 rounded-sm" : "",
              "py-1 flex-1"
            )}
          >
            <route.icon
              className={cn(
                "h-6 w-6 mb-1",
                pathname === route.href ? "text-white bg-gray-800 rounded-sm" : "text-slate-700"
              )}
            />
            {route.label}
          </Link>
        ))}
        </div>
    </>
  )
}

export default AdminSidebar