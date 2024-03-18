import React, { useEffect, useRef } from 'react';

const AlertsComponent = () => {
  const twitterTimelineContainerRef = useRef(null);

  useEffect(() => {
    const loadTwitterScript = () => {
      window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {};
        if (d.getElementById(id)) return t; 
        js = d.createElement(s); js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = []; 
        t.ready = function(f) {
          t._e.push(f);
        };

        return t;
      }(document, "script", "twitter-wjs"));
    };

    loadTwitterScript();

    const embedTwitterTimeline = () => {
      const twitterTimelineHTML = `
        <a class="twitter-timeline" data-lang="en" data-width="700" data-height="700" href="https://twitter.com/TempleAlert?ref_src=twsrc%5Etfw">Tweets by TempleAlert</a>`;
        
      if (twitterTimelineContainerRef.current) {
        twitterTimelineContainerRef.current.innerHTML = twitterTimelineHTML;
        window.twttr && window.twttr.ready(() => {
          window.twttr.widgets.load(twitterTimelineContainerRef.current);
        });
      }
    };

    embedTwitterTimeline();

    // Cleanup code
    return () => {
      if (twitterTimelineContainerRef.current) {
        twitterTimelineContainerRef.current.innerHTML = '';
      }
    };
  }, []);  //run once

  return (
    <div>
      <h1>Alerts</h1>
      <div ref={twitterTimelineContainerRef}></div>
    </div>
  );
};

export default AlertsComponent;
