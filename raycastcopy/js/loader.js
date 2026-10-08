const components = [
    ["navbar", "html/navbar.html"],
    ["hero", "html/hero.html"],
    ["products", "html/products.html"],
    ["saveTime","html/saveTime.html"],
    ["extension", "html/extension.html"],
];

async function loadComponent(id, file) {
    const container = document.getElementById(id);

    if (!container) {
        console.error(`Container #${id} was not found`);
        return;
    }

    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to load: ${file}`);
        }

        container.innerHTML = await response.text();

    } catch (error) {
        console.error(error);
    }
}

async function loadPage() {
    await Promise.all(
        components.map(([id, file]) => {
            return loadComponent(id, file);
        })
    );

    initNavbar();
    initproducts();
    initExtention();
}

loadPage();