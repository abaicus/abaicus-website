export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export function estimateReadingTime(text) {
  const textLength = text.split(" ").length;
  return Math.ceil(textLength / 200);
}

export function generateArray(length) {
  return Array.from(Array(length).keys());
}