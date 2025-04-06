import { getAdmin } from '@/app/actions/admin'
import NotFound from '@/app/not-found';
import Header from '@/components/Header';
import React from 'react'
import AdminSidebar from './_components/sidebar';

const AdminLayout = async ({children}) => {
  const admin = await getAdmin();

  if(!admin.authorized ) return NotFound()
  return (
    <div className='h-full'>
      <Header isAdminPage={true} />
      <div className="flex h-full w-56 flex-col top-20 fixed inset-y-0 z-50">
        <AdminSidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  )
}

export default AdminLayout