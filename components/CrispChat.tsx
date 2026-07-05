'use client';

import { useEffect } from 'react';

const CRISP_WEBSITE_ID = '5119c64f-c260-4ff0-9843-bd067de50290';

declare global {
  interface Window {
    $crisp?: unknown[];
    CRISP_WEBSITE_ID?: string;
  }
}

export function CrispChat() {
  useEffect(() => {
    if (document.getElementById('crisp-chat-script')) return;

    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

    const script = document.createElement('script');
    script.id = 'crisp-chat-script';
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
}
