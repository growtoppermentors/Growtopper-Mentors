import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Analytics() {
  const location = useLocation();
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;

  // Initialize scripts once on load
  useEffect(() => {
    // 1. Google Analytics Initialization
    if (gaId && !window.gtag) {
      const script = document.createElement('script');
      script.src =  'https://www.googletagmanager.com/gtag/js?id='  + gaId;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      // Config is handled in the route change effect to avoid duplicate initial pageviews
    }

    // 2. Meta Pixel Initialization
    if (pixelId && !window.fbq) {
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      window.fbq('init', pixelId);
    }
  }, [gaId, pixelId]);

  // Track page views on route change
  useEffect(() => {
    // Track Google Analytics Pageview
    if (gaId && window.gtag) {
      window.gtag('config', gaId, {
        page_path: location.pathname + location.search,
      });
    }
    
    // Track Meta Pixel Pageview
    if (pixelId && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location, gaId, pixelId]);

  return null;
}
