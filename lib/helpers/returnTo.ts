export const RETURN_TO_KEY = "returnTo";

export const setReturnTo = (url: string) => {
  try {
    sessionStorage.setItem(RETURN_TO_KEY, url);
  } catch {}
};

export const getReturnTo = () => {
  try {
    return sessionStorage.getItem(RETURN_TO_KEY);
  } catch {
    return null;
  }
};

export const consumeReturnTo = () => {
  const url = getReturnTo();
  if (!url) return null;
  try {
    sessionStorage.removeItem(RETURN_TO_KEY);
  } catch {}
  return url;
};
