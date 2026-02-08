"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    if (!email) {
      setStatus("error");
      return;
    }

    fetch(`/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.success ? "success" : "error");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [email]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center bg-[#0a0a0a] border border-[#333333] rounded-2xl p-12">
        {status === "loading" && (
          <>
            <Loader2 className="h-8 w-8 animate-spin text-teal-400 mx-auto mb-4" />
            <p className="text-[#a0a0a0]">Processing your request...</p>
          </>
        )}

        {status === "success" && (
          <>
            <h1 className="text-2xl font-bold uppercase tracking-wide mb-4">
              Unsubscribed
            </h1>
            <p className="text-[#a0a0a0]">
              You&apos;ve been removed from our mailing list. You won&apos;t
              receive any more emails from us.
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <h1 className="text-2xl font-bold uppercase tracking-wide mb-4">
              Something went wrong
            </h1>
            <p className="text-[#a0a0a0]">
              We couldn&apos;t process your unsubscribe request. Please try
              again or contact us directly.
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
