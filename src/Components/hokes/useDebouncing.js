

export default function useDebouncing(cb, delay = 2000) {
  let timerId;
  return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
          cb(...args);
      }, delay)
  }
}
