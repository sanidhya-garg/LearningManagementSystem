"use client"

import React, { useEffect } from 'react';

const TelegramWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute('data-telegram-discussion', "unipacecoding");
    script.setAttribute('data-comments-limit', "50");
    script.setAttribute('data-colorful', "1");
    script.setAttribute('data-color', "1976D2");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="telegram-widget" />;
};

export default TelegramWidget;
