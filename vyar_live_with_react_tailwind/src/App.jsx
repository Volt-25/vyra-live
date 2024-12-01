import React, { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
function App() {
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    const loader = setTimeout(() => {
      isLoading(false);
    }, 2500);
    return ()=>clearInterval(loader); 
  }, []);
  return loading ? (
    <Loader/>
  ) : (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">App</div>
  );
}

export default App;
