"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { copy } from "@/lib/copy";

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const email = searchParams.get("email");
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    if (!id && !email) {
      setStatus("error");
      return;
    }

    const params = id
      ? `id=${encodeURIComponent(id)}`
      : `email=${encodeURIComponent(email!)}`;

    fetch(`/api/newsletter/unsubscribe?${params}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.success ? "success" : "error");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [id, email]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center bg-[#0a0a0a] border border-[#333333] rounded-2xl p-12">
        {status === "loading" && (
          <>
            <Loader2 className="h-8 w-8 animate-spin text-teal-400 mx-auto mb-4" />
            <p className="text-[#a0a0a0]">{copy.unsubscribe.loading}</p>
          </>
        )}

        {status === "success" && (
          <>
            <h1 className="text-2xl font-bold uppercase tracking-wide mb-4">
              {copy.unsubscribe.success.title}
            </h1>
            <p className="text-[#a0a0a0]">
              {copy.unsubscribe.success.description}
            </p>
          </>
        )}

        {status === "error" && (
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
