export function trimUrl(url: string) {
  const parts = url.split('/');
  const id = parts.slice(2).toString();
  return id;
}