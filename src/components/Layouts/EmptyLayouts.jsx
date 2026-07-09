import React from "react";
import { Outlet, ScrollRestoration } from "react-router";

export default function EmptyLayouts() {
  return (
    <>
      <ScrollRestoration />
      <main className="flex-1 relative">
        <Outlet />
      </main>
    </>
  );
}
