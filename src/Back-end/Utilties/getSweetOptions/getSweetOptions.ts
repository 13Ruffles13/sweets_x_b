export function getSweetOptions(): HTMLElement[] {
  const domQuerySelector = document.getElementsByClassName(
    "sweetImageContainer",
  );
  const domQuerySelectorArray = Array.from(domQuerySelector) as HTMLElement[];
  return domQuerySelectorArray;
}
