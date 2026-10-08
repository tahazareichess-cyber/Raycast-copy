function initproducts(){
    const buttons = document.querySelectorAll(".product-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");
        });
    });
    const productButtons = document.querySelectorAll(".product-btn");
const productCards = document.querySelectorAll(".product-card");
const productTexts = document.querySelectorAll(".product-p");

productButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Get the product this button belongs to
        const target = button.dataset.target;

        // Remove active from all buttons
        productButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Remove active from all images
        productCards.forEach(card => {
            card.classList.remove("active");
        });

        // Remove active from all descriptions
        productTexts.forEach(text => {
            text.classList.remove("active");
        });

        // Activate clicked button
        button.classList.add("active");

        // Find matching image
        const activeCard = document.querySelector(
            `.product-card[data-product="${target}"]`
        );

        // Find matching paragraph
        const activeText = document.querySelector(
            `.product-p[data-product="${target}"]`
        );

        // Show them
        if (activeCard) {
            activeCard.classList.add("active");
        }

        if (activeText) {
            activeText.classList.add("active");
        }
    });

});
};