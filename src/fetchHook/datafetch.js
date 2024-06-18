async function getData() {
  // const response = await fetch(`http://localhost:3000/data.json`);
  const response = await fetch("http://localhost:3000/data.json");

  return response.json();
}

export default getData;
