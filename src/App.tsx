// TypeScript React component
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
import Home from "./pages/Home"

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);  

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

    return (
      <>
        {isLoading ? <Spinner /> : <Home />}
      </>
    );
}

export default App
