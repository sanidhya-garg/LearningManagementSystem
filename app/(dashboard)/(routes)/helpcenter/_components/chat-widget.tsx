"use client"

import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/662d598aa0c6737bd131ba04/1hsgibi06';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    const scriptNode = document.getElementsByTagName('script')[0];
    scriptNode.parentNode.insertBefore(script, scriptNode);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatWidget;
