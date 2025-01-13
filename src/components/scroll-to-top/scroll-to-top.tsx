import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';

export default function ScrollToTop() {
  const pathName = useLocation().pathname;

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathName]);

  return null;
}
