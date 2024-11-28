export async function fetchData (url:string, query:string) {
  const response = await fetch(`${url}${query}`);
  if (!response.ok) {
    throw Error(`An error occured when fetching data from ${url}.`)
  }
  return await response.json();
}

export const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;