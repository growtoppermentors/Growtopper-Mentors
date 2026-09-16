import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Analytics() {
  const location = useLocation();
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;

  // Initialize scripts once on load
  useEffect(() => {
    let initialized = false;

    const initAnalytics = () => {
      if (initialized) return;
      initialized = true;

      // 1. Google Analytics Initialization
      if (gaId && !window.gtag) {
        const script = document.createElement('script');
        script.src =  'https://www.googletagmanager.com/gtag/js?id='  + gaId;
        script.defer = true; // Use defer instead of async
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        
        window.gtag('config', gaId, {
          page_path: window.location.pathname + window.location.search,
        });
      }

      // 2. Meta Pixel Initialization
      if (pixelId && !window.fbq) {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.defer=!0; // Defer
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        window.fbq('init', pixelId);
        window.fbq('track', 'PageView');
      }
    };

    // Delay analytics to prioritize main thread for LCP/FCP
    const timer = setTimeout(initAnalytics, 3500);

    // Or load on interaction
    const events = ['scroll', 'mousemove', 'touchstart', 'click', 'keydown'];
    const handleInteraction = () => {
      initAnalytics();
      events.forEach(e => window.removeEventListener(e, handleInteraction));
    };

    events.forEach(e => window.addEventListener(e, handleInteraction, { once: true, passive: true }));

    return () => {
      clearTimeout(timer);
      events.forEach(e => window.removeEventListener(e, handleInteraction));
    };
  }, [gaId, pixelId]);

  // Track page views on route change (only if initialized)
  useEffect(() => {
    if (gaId && window.gtag) {
      window.gtag('config', gaId, {
        page_path: location.pathname + location.search,
      });
    }
    
    if (pixelId && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location, gaId, pixelId]);

  return null;
}
