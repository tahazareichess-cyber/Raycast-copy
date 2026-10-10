const components = [
    ["navbar", "raycastcopy/html/navbar.html"],
    ["hero", "raycastcopy/html/hero.html"],
    ["products", "raycastcopy/html/products.html"],
    ["saveTime", "raycastcopy/html/saveTime.html"],
    ["extension", "raycastcopy/html/extension.html"],
    ["aiAgent", "raycastcopy/html/aiAgent.html"],
    ["professionals", "raycastcopy/html/professionals.html"],
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
    initPro();
}

loadPage();