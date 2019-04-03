import routerEvents from 'next-router-events';
import NProgress from 'nprogress';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';

export const withNProgress = () => {
  let timer;
  NProgress.configure({ showSpinner: false });

  // when a route change start run a timeout to init the progress bar
  routerEvents.on('routeChangeStart', () => {
    timer = setTimeout(NProgress.start, 100);
  });

  // when completed finish the progress bar and clear the timeout
  routerEvents.on('routeChangeComplete', () => {
    NProgress.done();
    clearTimeout(timer);
  });

  // when errored finish the progress bar and clear the timeout
  routerEvents.on('routeChangeError', () => {
    NProgress.done();
    clearTimeout(timer);
  });

  return (Page) => Page;
};

export const withBodyScroll = (Page) => {
  // when a route change starts, remove body scroll
  routerEvents.on('routeChangeStart', () => {
    clearAllBodyScrollLocks();
  });
  return Page;
};
