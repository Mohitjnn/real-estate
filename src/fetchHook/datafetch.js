// fetchHook/datafetch.js

async function getData(propertyData) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(propertyData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null or handle the error as needed
  }
}

export default getData;

export async function localData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/data.json`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching local data:", error);
    return null; // Return null or handle the error as needed
  }
}
