"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";

export function ConnectButton() {
  const { ready, authenticated, login, logout, user } = usePrivy();
  const [isMiniPay, setIsMiniPay] = useState(false);

  useEffect(() => {
    // @ts-ignore
    if (window.ethereum?.isMiniPay) {
      setIsMiniPay(true);
    }
  }, []);

  if (!ready) {
    return (
      <button disabled className="px-4 py-2 rounded-md bg-gray-200 text-gray-500 text-sm font-medium">
        Loading...
      </button>
    );
  }

  if (authenticated) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">
          {user?.email ? user.email.address : user?.wallet?.address?.slice(0, 6) + '...'}
        </span>
        <button 
          onClick={logout}
          className="px-4 py-2 rounded-md bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition-colors"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={login}
      className="px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
    >
      {isMiniPay ? "Connect MiniPay" : "Log in"}
    </button>
  );
}
