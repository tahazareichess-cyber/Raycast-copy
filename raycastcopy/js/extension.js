function initExtention(){
const productivity = document.getElementById('productivity');
const engineering = document.getElementById('engineering');
const design = document.getElementById('design');
const writing = document.getElementById('writing');
const exCards = document.querySelector('.extension-cards');
const nextEx = document.getElementById('nextButton');
const prevEx = document.getElementById('prevButton');
const exampleCard = document.querySelector('.extension-card-more');
const slider = document.querySelector('.extension-slider');
const tabs = document.querySelectorAll('.extension-tabs button');

let position = 0;

nextEx.addEventListener('click', () => {
    const step = exampleCard.offsetWidth + 30;
    const maxPosition = exCards.scrollWidth - slider.clientWidth;

    position += step;

    if (position > maxPosition) {
        position = maxPosition;
    }

    exCards.style.transform = `translateX(-${position}px)`;
});

prevEx.addEventListener('click', () => {
    const step = exampleCard.offsetWidth + 30;

    position -= step;

    if (position < 0) {
        position = 0;
    }

    exCards.style.transform = `translateX(-${position}px)`;
});
const exCard = {
        productivityCard :[
        {
            image:"img/linear-icon.webp",
            title:"Linear",
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: "Create , search and modify your issuse Without leaving your keyboard",
            background: 'img/linear background.png',
        },
        {
            image:'img/google-translate-icon.webp',
            title:'Google Translate',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'Use Google Translate to effortlessly Translate into multiple languages',
            background: 'img/googletranslate background.png',
        },
        {
            image:"img/spotify-icon.webp",
            title:'Spotify',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'search for music and podcasts, brows your library, and control play back',
            background:'img/spotify background.png',
        },
        {
            image:"img/arc-icon.webp",
            title:'Arc',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'Navigate your open tabs or search through your browser history',
            background:'img/arc background.png',         
        },
        {
            image:'img/tiny-png-icon.webp',
            title:'Tiny png',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: "Compress the selected images in finder with Tiny png ",
            background: 'img/tinyPng background.png',
        },
        {
            image:'img/1password-icon.webp',
            title:'1Password',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:"Esily grab any password or ceredenital from your 1password vaults",
            background:"img/onePassword background.png",
        },
        {
            image:'img/jira-icon.webp',
            title:'JIRA',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'Manage your JIRA issues and sprints without leaving your keyboard',
            background:'img/JIRA background.png',
        },
        {
            image:'img/slack-icon.webp',
            title:'Slack',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'send your presence, se unread messages and search your chats',
            background:'img/slack backgorund.png',
        },
        {
            image:'img/zoom-icon.webp',
            title:'Zoom',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'see your upcoming calls and jump stright from them to raycast',
            background:'img/zoom backgorund.png',
        },
        {
            image:'img/timers-icon.webp',
            title:'Timers',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'start stopwatches and timers to keep track of your daily tasks',
            background: 'img/timer background.png',
        },
        {
            image:'img/pomodoro-icon.webp',
            title:'Pomodoro',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'control pomodoro timers and see the current interval in the menu bar',
            background: 'img/pomodoro background.png',
        },
        {
            image:'img/notion-icon.webp',
            title:'Notion',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'The fastes way to search and create notion pages',
            background: 'img/notion background.png',
        },
        {
            image:'img/todoist-icon.webp',
            title:'Todo list',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Check your todo list tasks and quickly create a new one ',
            background: 'img/todoList backgorund.png',
        },
        {
            image:'img/google-search-icon.webp',
            title: 'Google search',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Need to know something fast ? google it from raycast ',
            background: 'img/googleSearch background.png',
        },
        {
            image: 'img/obsidian-icon.webp',
            title: 'Obsidian',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Capture information , manage tasks and pin notes to your menu bar',
            background: 'img/obsidian background.png',
        },
        {
            image: 'img/google-chrome-icon.webp',
            title: 'Google Chrome',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Search open tabs bookmarks and history in google chrome',
            background: 'img/GoogleChrome background.png',
        },
        {
            image: 'img/cleanshotx-icon.webp',
            title: 'Clean Shot X',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Trigger cleanshotX screen capture right from your keyboard',
            background:'img/CleanShotX background.png',
        }
    ],
    engineering:[
        {
            image:"img/linear-icon.webp",
            title:"Linear",
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: "Create , search and modify your issuse Without leaving your keyboard",
            background: 'img/linear background.png', 
        },
        {
            image:'img/kill-process-icon.webp',
            title: "Kill process",
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'see a list of all running prosesses and kill off any misbehaving one',
            background:'img/KillProsses background.png',
        },
        {
            image:'img/color-picker-icon.webp',
            title: 'Color Picker',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Pick and save colors from anywhere and access them from the menu bar',
            background: 'img/colorPicker background.png',
        },
        {
            image:'img/vscode-icon.webp',
            title: 'visual stodio code',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',   
            desc: 'search and open recent projects, handle extensions and commads' ,
            background: 'img/Vscode background.png',
        },
        {
            image: 'img/github-icon.webp',
            title: 'Git Hub',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>', 
            desc: 'work with issues, pull requests and see your notification in the menu bar',
            background: 'img/gitHub background.png',
        },
        {
            image:'img/tailwind-icon.webp',
            title: 'Tailwind css',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>', 
            desc: 'Search and insert Tailwind utilities or hop straight into the documentation.',
            background: 'img/tailWind background.png',
        },
        {
            image: 'img/format-json-icon.webp',
            title: 'Format JSON',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Quickly parse or format some JSON straight from your clipboard.',
            background: 'img/formatJson backgorund.png',
        },
        {
            image: 'img/warp-icon.webp',
            title: 'Wrap',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Navigate Warp tabs and windows and launch configurations.',
            background: 'img/Wrap background.png',
        }
    ],
    design:[
        {
            image:'img/color-picker-icon.webp',
            title: 'Color Picker',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Pick and save colors from anywhere and access them from the menu bar',
            background: 'img/colorPicker background.png',
        },
        {
            image:'img/tiny-png-icon.webp',
            title:'Tiny png',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: "Compress the selected images in finder with Tiny png ",
            background: 'img/tinyPng background.png',
        },
        {
            image:'img/lorem-ipsum-icon.webp',
            title: 'lorem',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Generate placeholder content and copy it to your clipboard.',
            background: 'img/Lorem background.png',
        },
        {
            image: 'img/image-modifications-icon.webp',
            title: 'Image Modification',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Filter, transform and convert images from your selection or clipboard.',
            background: 'img/imageModification background.png',
        },
        {
            image:'img/ruler-icon.webp',
            title: 'Ruler',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Measure on-screen distances by drawing lines between points.',
            background: 'img/ruler background.png',
        },
        {
            image: 'img/figma-file-search-icon.webp',
            title: 'Figma File Search',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'Quickly open a Figma file from anywhere on your Mac.',
            background: 'img/FigmaFileSearch background.png',
        }

    ],
    writing:[
        {
            image:'img/google-translate-icon.webp',
            title:'Google Translate',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'Use Google Translate to effortlessly Translate into multiple languages',
            background: 'img/googletranslate background.png',
        },
        {
           image:"img/arc-icon.webp",
            title:'Arc',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'Navigate your open tabs or search through your browser history',
            background:'img/arc background.png',  
        },
        {
            image:'img/notion-icon.webp',
            title:'Notion',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'The fastes way to search and create notion pages',
            background: 'img/notion background.png',
        },
        {
           image:'img/todoist-icon.webp',
            title:'Todo list',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Check your todo list tasks and quickly create a new one ',
            background: 'img/todoList backgorund.png', 
        },
        {
            image:'img/google-search-icon.webp',
            title: 'Google search',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Need to know something fast ? google it from raycast ',
            background: 'img/googleSearch background.png',
        },
        {
            image: 'img/obsidian-icon.webp',
            title: 'Obsidian',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Capture information , manage tasks and pin notes to your menu bar',
            background: 'img/obsidian background.png',
        },
        {
            image: 'img/google-chrome-icon.webp',
            title: 'Google Chrome',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Search open tabs bookmarks and history in google chrome',
            background: 'img/GoogleChrome background.png',
        },
        {
            image:'img/lorem-ipsum-icon.webp',
            title: 'lorem',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Generate placeholder content and copy it to your clipboard.',
            background: 'img/Lorem background.png',
        }
    ]
};


function showCards(cards) {

    exCards.querySelectorAll(".extension-card").forEach(card => {
        card.remove();
    });

    position = 0;
    exCards.style.transform = 'translateX(0)';

    cards.forEach(card => {

        const article = document.createElement("article");
        const divTop = document.createElement("div");
        const divHead = document.createElement("div");
        const divlogo = document.createElement("div");
        const image = document.createElement("img");
        const logoName = document.createElement("h3");
        const arrow = document.createElement("span");
        const description = document.createElement("p");

        article.classList.add("extension-card");
        divTop.classList.add("extension-div-top");
        divHead.classList.add("extension-head");
        divlogo.classList.add("extension-logo");
        image.classList.add("extension-image");
        logoName.classList.add("extension-name");
        arrow.classList.add("extension-arrow");
        description.classList.add("extension-desc");

        article.style.backgroundImage = `url("${card.background}")`;
        image.src = card.image;
        logoName.textContent = card.title;
        arrow.innerHTML = card.icon;
        description.textContent = card.desc;

        divlogo.append(image, logoName);
        divHead.append(divlogo, arrow);
        divTop.append(divHead, description);
        article.append(divTop);
        exCards.append(article);
    });
}
productivity.addEventListener('click', () => {
    showCards(exCard.productivityCard);
});

engineering.addEventListener('click', () => {
    showCards(exCard.engineering);
});

design.addEventListener('click', () => {
    showCards(exCard.design);
});

writing.addEventListener('click', () => {
    showCards(exCard.writing);
});

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        tab.classList.add('active');
    });
});
productivity.click();






}