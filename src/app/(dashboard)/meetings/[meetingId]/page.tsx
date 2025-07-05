import { auth } from "@/lib/auth";
import {
  MeetingIdView,
  MeetingIdViewError,
  MeetingIdViewLoading,
} from "@/module/agents/ui/views/meeting-id-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

/**
 * Route props passed to the page including dynamic meetingId param
 */
interface Props {
  params: Promise<{
    meetingId: string;
  }>;
}

/**
 * Handles server-side auth check, data prefetching, and rendering
 * of meeting detail view with Suspense + ErrorBoundary
 */
const Page = async ({ params }: Props) => {
  const { meetingId } = await params;

  const requestHeaders = await headers();
  const session = await auth.api.getSession({
    headers: requestHeaders,
  });

  if (!session) {
    redirect("/auth/sign-in");
  }

  const queryClient = getQueryClient();

   
  void queryClient.prefetchQuery(
    trpc.meetings.getOne.queryOptions({ id: meetingId })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MeetingFallbacks id={meetingId} />
    </HydrationBoundary>
  );
};

/**
 * Wraps the meeting view with Suspense and ErrorBoundary fallback UI
 */
const MeetingFallbacks = ({ id }: { id: string }) => (
  <Suspense fallback={<MeetingIdViewLoading />}>
    <ErrorBoundary fallback={<MeetingIdViewError />}>
      <MeetingIdView meetingId={id} />
    </ErrorBoundary>
  </Suspense>
);

// Useful for debugging in React DevTools
Page.displayName = "MeetingIdPage";

export default Page;
