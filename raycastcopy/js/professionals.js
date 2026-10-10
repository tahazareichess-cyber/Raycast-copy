function initPro(){

    
const proCardsContainer = document.querySelector(".professionals-cards");
const proFavoriteContainer = document.querySelector(".professionals-favorite");
const proQuotesContainer = document.querySelector(".professionals-quotes");
if (!proCardsContainer || !proFavoriteContainer || !proQuotesContainer) {
    console.error("Professionals section containers not found.");
    return;
    }

    proCardsContainer.replaceChildren();
    proFavoriteContainer.replaceChildren();
    proQuotesContainer.replaceChildren();

const professionalsData = [
    {
        name: "Andreas",
        tag: "@avstrom",
        image: "raycastcopy/img/avstorm.webp",
        desc: "Designer and iconographer",
                topText: "Top Extension:",
                topExtension: {
                    image: "raycastcopy/img/image-modifications-icon.webp",
                    title: "Image Modification",
                    description: "Image Modification on your fingertips. Trust me, you will love it."
                },

                bottomText: "Favorite Feature:",
                favoriteFeature: {
                    image: "raycastcopy/img/image-modifications-icon.webp",
                    title: "Emoji Picker",
                    description: "So much faster and better than the native macOS picker.",
                },
                quote: "Raycast simply replaces so many tools at once and the whole experience feels like it was made by Apple itself.",
            },
            {
        name: "Koen Bok",
        tag: "@Koenbok",
        image: "raycastcopy/img/koen.webp",
        desc: "founder, framer",
                topText: "Favorite Feature:",
                topExtension: {
                    image: "raycastcopy/img/notion-icon.webp",
                    title: "Clipboard History",
                    description: "Included clipboard history is better than Dutch cheese."
                },

                bottomText: "Top Extension:",
                favoriteFeature: {
                    image: "raycastcopy/img/ruler-icon.webp",
                    title: "AI Chat",
                    description: "Having AI integrated in the OS is the future that Raycast enables today.",
                },
                quote: "Raycast is the best looking launcher with unmatched speed and control.",
            },
            {
        name: "Guillermo Raunch",
        tag: "@rauchg",
        image: "raycastcopy/img/guillermo.webp",
        desc: "ceo , vercel",
                topText: "Favorite Feature:",
                topExtension: {
                    image: "raycastcopy/img/slack-icon.webp",
                    title: "AI Chat",
                    description: "Realtime knowledge, anywhere in your OS."
                },

                bottomText: "Top Extension:",
                favoriteFeature: {
                    image: "raycastcopy/img/notion-icon.webp",
                    title: "Notion Search",
                    description:'I forked the Notion Search extension so I can easily paste "tokenized" doc links into Slack.',
                },
                quote: "Raycast is incrementally turning my Mac into an AI-native operating system and I’m so here for it.",
            },
            {
        name: "Adam Withcroft",
        tag: "@rAdamWithcroft",
        image: "raycastcopy/img/AdamWhitcroft.webp",
        desc: "Designer , owner",
                topText: "Top Extension:",
                topExtension: {
                    image: "raycastcopy/img/color-picker-icon.webp",
                    title: "Hide Files",
                    description: "When I want to get rid of the clutter on my desktop for a quick demo or screenshot, this handy little extension makes it so much quicker than going into terminal."
                },

                bottomText: "Favorite Hotkey:",
                favoriteFeature: {
                    image: "raycastcopy/img/notion-icon.webp",
                    title: "",
                    description:'For Clipboard History because I use it too much.',
                },
                quote: "I’ll admit to being a relative latecomer to Raycast, but I can’t imagine going back to just using Spotlight. I love it because it builds on the very familiar paradigm of Spotlight, but just does everything better.",
            },
            {
        name: "Steven Tay",
        tag: "@steventay",
        image: "raycastcopy/img/steventey.webp",
        desc: "Founder ,Dub",
                topText: "Favorite Feature:",
                topExtension: {
                    image: "raycastcopy/img/zoom-icon.webp",
                    title: "Emoji Picker",
                    description: "So much faster than the native Mac Keyboard emoji shortcut!"
                },

                bottomText: "Top Extension:",
                favoriteFeature: {
                    image: "raycastcopy/img/pomodoro-icon.webp",
                    title: "Dub.co",
                    description:'It allows you to quickly shorten a link and access all your shortened links – directly inside Raycast 😄.',
                },
                quote: "Raycast is an absolute gamechanger for my day-to-day workflow. From nifty lookups like “time in Malaysia” to quickly accessing snippets like “my company’s EIN” – Raycast truly nails the little details when it comes to supercharging our productivity.",
            },
        ];

        // creating the person
        function setActiveProfessional(activeIndex) {
            proCardsContainer
                .querySelectorAll(".professionalsCardContainer")
                .forEach(card => {
                    card.classList.toggle(
                        "active",
                        Number(card.dataset.index) === activeIndex
                    );
                });

            proFavoriteContainer
                .querySelectorAll(".proFavoriteTop, .proFavoriteBottom")
                .forEach(item => {
                    item.classList.toggle(
                        "active",
                        Number(item.dataset.index) === activeIndex
                    );
                });

            proQuotesContainer
                .querySelectorAll(".proQuote")
                .forEach(quote => {
                    quote.classList.toggle(
                        "active",
                        Number(quote.dataset.index) === activeIndex
                    );
                });
        }
        professionalsData.forEach((data, index) => {
            const proDiv = document.createElement("div");
            const proImgDiv = document.createElement("div");
            const proTextTop = document.createElement("div")
            const proInfo = document.createElement("div");
            const proImage = document.createElement("img")
            const proname = document.createElement("p");
            const proTag = document.createElement("p");
            const proDesc = document.createElement("p");
            proDiv.classList.add("professionalsCardContainer");
            proDiv.dataset.index = index;

            proDiv.addEventListener("click", () => {
    const cards = [
        ...proCardsContainer.querySelectorAll(
            ".professionalsCardContainer"
        )
    ];

    // 1. Remember the current positions
    const oldPositions = new Map(
        cards.map(card => [
            card,
            card.getBoundingClientRect()
        ])
    );

    const selectedIndex = Number(proDiv.dataset.index);
    const totalCards = cards.length;

    // 2. Reorder the cards
    cards.forEach(card => {
        const cardIndex = Number(card.dataset.index);

        card.style.order =
            (cardIndex - selectedIndex + totalCards + 1) % totalCards;
    });

    // Update the active card, favorites, and quote
    setActiveProfessional(selectedIndex);

    // 3. Animate from the old positions to the new ones
    cards.forEach(card => {
        const oldPosition = oldPositions.get(card);
        const newPosition = card.getBoundingClientRect();

        const moveX = oldPosition.left - newPosition.left;
        const moveY = oldPosition.top - newPosition.top;

        card.animate(
            [
                {
                    translate: `${moveX}px ${moveY}px`
                },
                {
                    translate: "0px 0px"
                }
            ],
            {
                duration: 500,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)"
            }
        );
    });
});
            proImgDiv.classList.add("professionalsImageContainer");
            proInfo.classList.add("professionalsInfoContainer");
            proTextTop.classList.add("professionalsTopText");
            proImage.classList.add("professionalsImage");
            proname.classList.add("professionalsName");
            proTag.classList.add("professionalsTag");
            proDesc.classList.add("professionalsDesc");
            proImage.src = data.image;
            proImage.alt = data.name;
            proname.textContent = data.name;
            proTag.textContent = data.tag;
            proDesc.textContent = data.desc;

            proDiv.append(proImgDiv, proInfo);
            proImgDiv.append(proImage);
            proTextTop.append(proname,proTag);
            proInfo.append(proTextTop,proDesc);
            proCardsContainer.append(proDiv);

            // bottom 
            
            const proFavoriteTop = document.createElement("div");
            const proFavoriteBottom = document.createElement("div");
            const proFavoriteTopInfo = document.createElement("div");
            const proFavoriteBottomInfo = document.createElement("div");
            const proFavoriteTopTitle = document.createElement("div");
            const proFavoriteBottomTitle = document.createElement("div");
            const proFavoriteTopText = document.createElement("h4");
            const proFavoriteBottomText = document.createElement("h4");
            const titleImageTop = document.createElement("img");
            const titleImageBottom = document.createElement("img");
            const titleTextTop = document.createElement("p");
            const titleTextBottom = document.createElement("p");
            const proTopDesc = document.createElement("p");
            const proBottomDesc = document.createElement("p");
            const proQuote = document.createElement("h2");

            proFavoriteTop.classList.add("proFavoriteTop");
            proFavoriteBottom.classList.add("proFavoriteBottom");
            proFavoriteTopInfo.classList.add("proFavoriteTopInfo");
            proFavoriteBottomInfo.classList.add("proFavoriteBottomInfo");
            proFavoriteTopTitle.classList.add("proFavoriteTopTitle");
            proFavoriteBottomTitle.classList.add("proFavoriteBottomTitle");
            proFavoriteTopText.classList.add("proFavoriteTopText");
            proFavoriteBottomText.classList.add("proFavoriteBottomText");
            titleImageTop.classList.add("titleImageTop");
            titleImageBottom.classList.add("titleImageBottom");
            titleTextTop.classList.add("titleTextTop");
            titleTextBottom.classList.add("titleTextBottom");
            proTopDesc.classList.add("proTopDesc");
            proBottomDesc.classList.add("proBottomDesc");
            proQuote.classList.add("proQuote");



            proFavoriteTop.dataset.index = index;
            proFavoriteBottom.dataset.index = index;
            proQuote.dataset.index = index;



            proFavoriteTopText.textContent = data.topText;
            proFavoriteBottomText.textContent = data.bottomText;
            titleImageTop.src = data.topExtension.image;
            titleImageBottom.src = data.favoriteFeature.image;
            titleTextTop.textContent = data.topExtension.title;
            titleTextBottom.textContent = data.favoriteFeature.title;
            proTopDesc.textContent = data.topExtension.description;
            proBottomDesc.textContent = data.favoriteFeature.description;
            proQuote.textContent = data.quote;

            proFavoriteContainer.append(proFavoriteTop,proFavoriteBottom);
            proFavoriteTop.append(proFavoriteTopText,proFavoriteTopInfo);
            proFavoriteTopInfo.append(proFavoriteTopTitle,proTopDesc);
            proFavoriteTopTitle.append(titleImageTop,titleTextTop);
            
            proFavoriteBottom.append(proFavoriteBottomText,proFavoriteBottomInfo);
            proFavoriteBottomInfo.append(proFavoriteBottomTitle,proBottomDesc);
            proFavoriteBottomTitle.append(titleImageBottom,titleTextBottom);

            proQuotesContainer.append(proQuote)
            setActiveProfessional(
                Math.floor(professionalsData.length / 2)
            );
        });

    }