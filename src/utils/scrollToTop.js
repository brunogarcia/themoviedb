import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Util that will scroll the window up on every navigation
 *
 * @returns {null} - This util returns null
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
