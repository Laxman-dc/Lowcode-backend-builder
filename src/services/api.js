export const getData = async () => {
  try {
    const response = await fetch("/api/endpoint");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
