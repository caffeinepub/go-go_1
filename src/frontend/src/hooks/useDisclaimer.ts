export function useDisclaimer() {
  const SESSION_KEY = "gogo_disclaimer_acknowledged";

  const isAcknowledged = (): boolean => {
    return sessionStorage.getItem(SESSION_KEY) === "true";
  };

  const acknowledge = (): void => {
    sessionStorage.setItem(SESSION_KEY, "true");
  };

  return { isAcknowledged, acknowledge };
}
