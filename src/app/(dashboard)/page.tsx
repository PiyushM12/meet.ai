import { auth } from '@/lib/auth';
import { HomeView } from '@/module/home/ui/views/home-view';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const Page = async (): Promise<JSX.Element> => {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });

  if (!session) {
    redirect('/auth/sign-in');
  }

  // TODO: Add personalization to HomeView based on session.user
  return <HomeView />;
};

export default Page;
