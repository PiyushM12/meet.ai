import { auth } from '@/lib/auth'
import { HomeView } from '@/module/auth/ui/views/home/ui/views/home-view'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async () => {
  const session = await auth.api.getSession({
    headers:await headers()
  });
  if(!session){
    redirect("/auth/sign-in");
  }
  return (
   <HomeView/>
  )
}

export default Page
