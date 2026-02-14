"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { copy } from "@/lib/copy";

async function unsubscribe(id: string | null, email: string | null) {
  const params = id
    ? `id=${encodeURIComponent(id)}`
    : `email=${encodeURIComponent(email!)}`;

  const res = await fetch(`/api/newsletter/unsubscribe?${params}`);
  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message ?? "Unsubscribe failed");
  }

  try {
    localStorage.removeItem("newsletter-subscribed");
  } catch {}

  return data;
}

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const email = searchParams.get("email");
  const hasParams = !!id || !!email;

  const { isPending, isSuccess, isError } = useQuery({
    queryKey: ["unsubscribe", id, email],
    queryFn: () => unsubscribe(id, email),
    enabled: hasParams,
    staleTime: Infinity,
    gcTime: 0,
  });

  const showLoading = hasParams && isPending;
  const showError = !hasParams || isError;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center bg-[#0a0a0a] border border-[#333333] rounded-2xl p-12">
        {showLoading && (
          <>
            <Loader2 className="h-8 w-8 animate-spin text-teal-400 mx-auto mb-4" />
            <p className="text-[#a0a0a0]">{copy.unsubscribe.loading}</p>
          </>
        )}

        {isSuccess && (
          <>
            <h1 className="text-2xl font-bold uppercase tracking-wide mb-4">
              {copy.unsubscribe.success.title}
            </h1>
            <p className="text-[#a0a0a0]">
              {copy.unsubscribe.success.description}
            </p>
          </>
        )}

        {showError && (
          <>
            <h1 className="text-2xl font-bold uppercase tracking-wide mb-4">
              {copy.unsubscribe.error.title}
            </h1>
            <p className="text-[#a0a0a0]">
              {copy.unsubscribe.error.description}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-teal-400" />
        </div>
      }
    >
      <UnsubscribeContent />
    </Suspense>
  );
}
