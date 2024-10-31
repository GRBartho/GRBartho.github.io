let catsJson;

async function getData() {
  const url = "https://cataas.com/api/cats";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    catsJson = json;
    console.log(catsJson);
    displayCats(catsJson);
  } catch (error) {
    console.error(error.message);
  }
}

function filterCats() {
  const filterValue = document.getElementById("filter").value.toLowerCase();
  let filteredCats = catsJson.filter(
    (cat) =>
      cat.tags &&
      cat.tags.some((tag) => tag.toLowerCase().includes(filterValue))
  );
  console.log(filteredCats);
  displayCats(filteredCats);
}

function displayCats(cats) {
  const catsContainer = document.getElementById("catsContainer");

  if (!catsContainer) {
    console.error("Cats container not found.");
    return;
  }

  catsContainer.innerHTML = "";

  if (cats.length === 0) {
    catsContainer.innerHTML = "<p>No cats found.</p>";
    return;
  }

  cats.forEach((cat) => {
    const catElement = document.createElement("div");
    catElement.classList.add("cat");

    catElement.innerHTML = `
      <h3>${cat.tags.join(", ")}</h3>
      <img class="img" src="${
        "https://cataas.com/cat/" + cat.tags.join(",")
      }" alt="${cat.tags.join(", ")}" />
  `;

    catsContainer.appendChild(catElement);
  });
}
getData();
