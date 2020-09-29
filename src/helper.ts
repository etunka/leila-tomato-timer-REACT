// add zero pad
export function padDuration(duration: number) {
    return duration.toString().padStart(2, "0");
}

export function calculateMinutes(time: number) {
  return Math.floor(time / 60);
}
export function calculateSeconds(time: number) {
  return time % 60;
}

export function saveToLocalStorage(name: string, value: string) {
  localStorage.setItem(name, value);
}

export function getFromLocalStorage(name: string) {
  return localStorage.getItem(name);
}
