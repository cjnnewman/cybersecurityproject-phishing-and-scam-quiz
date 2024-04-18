'use client';

import { signOut } from 'next-auth/react';

export default function Logout() {
  return (
    <button id="logout_button" className="button"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </button>
  );
}
