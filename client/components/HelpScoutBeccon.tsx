import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
const BEACON_ID = import.meta.env.VITE_HELP_SCOUT_BEACON_ID;
export default function HelpScoutBeacon() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Inject the HelpScout Beacon script into the page
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `!function(e,t,n){
  function a(){
    var e=t.getElementsByTagName("script")[0],
        n=t.createElement("script");
    n.type="text/javascript";
    n.async=!0;
    n.src="https://beacon-v2.helpscout.net";
    e.parentNode.insertBefore(n,e);
  }
  if(e.Beacon=n=function(t,n,a){
    e.Beacon.readyQueue.push({method:t,options:n,data:a});
  }, n.readyQueue=[],"complete"===t.readyState) return a();
  e.attachEvent ? e.attachEvent("onload",a) : e.addEventListener("load",a,!1);
}(window,document,window.Beacon||function(){});`;

    document.body.appendChild(script);
    // Wait until Beacon is available, then init
    const interval = setInterval(() => {
      if (window.Beacon) {
        window.Beacon("init", BEACON_ID);
        window.Beacon("config", {
          display: {
            style: "manual",
            position: "bottom-right",
            offset: { horizontal: 20, vertical: 20 },
          },
        });
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);
  const handleClick = () => {
    if (window.Beacon) {
      if (isOpen) {
        window.Beacon("close");
      } else {
        window.Beacon("open");
      }
      setIsOpen(!isOpen);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-[9999] bg-[#AB322C] hover:bg-[#9B1B2A] text-white rounded-full p-3 shadow-lg transition-all duration-200 flex items-center justify-center"
      style={{ minWidth: "60px", height: "60px" }}
    >
      <MessageCircle size={24} />
    </button>
  );
}
