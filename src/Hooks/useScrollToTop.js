import { useEffect } from "react";
import { useLocation } from "react-router";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
};
export default useScrollToTop;
