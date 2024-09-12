export default async function fetchData(path) {
  const url = `http://127.0.0.1:8000/api/${path}/`;
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}
