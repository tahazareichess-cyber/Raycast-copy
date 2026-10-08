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
            image:"raycastcopy/img/linear-icon.webp",
            title:"Linear",
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: "Create , search and modify your issuse Without leaving your keyboard",
            background: 'raycastcopy/img/linear background.png',
        },
        {
            image:'raycastcopy/img/google-translate-icon.webp',
            title:'Google Translate',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'Use Google Translate to effortlessly Translate into multiple languages',
            background: 'raycastcopy/img/googletranslate background.png',
        },
        {
            image:"raycastcopy/img/spotify-icon.webp",
            title:'Spotify',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'search for music and podcasts, brows your library, and control play back',
            background:'raycastcopy/img/spotify background.png',
        },
        {
            image:"raycastcopy/img/arc-icon.webp",
            title:'Arc',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'Navigate your open tabs or search through your browser history',
            background:'raycastcopy/img/arc background.png',         
        },
        {
            image:'raycastcopy/img/tiny-png-icon.webp',
            title:'Tiny png',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: "Compress the selected images in finder with Tiny png ",
            background: 'raycastcopy/img/tinyPng background.png',
        },
        {
            image:'raycastcopy/img/1password-icon.webp',
            title:'1Password',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:"Esily grab any password or ceredenital from your 1password vaults",
            background:"raycastcopy/img/onePassword background.png",
        },
        {
            image:'raycastcopy/img/jira-icon.webp',
            title:'JIRA',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'Manage your JIRA issues and sprints without leaving your keyboard',
            background:'raycastcopy/img/JIRA background.png',
        },
        {
            image:'raycastcopy/img/slack-icon.webp',
            title:'Slack',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'send your presence, se unread messages and search your chats',
            background:'raycastcopy/img/slack backgorund.png',
        },
        {
            image:'raycastcopy/img/zoom-icon.webp',
            title:'Zoom',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'see your upcoming calls and jump stright from them to raycast',
            background:'raycastcopy/img/zoom backgorund.png',
        },
        {
            image:'raycastcopy/img/timers-icon.webp',
            title:'Timers',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'start stopwatches and timers to keep track of your daily tasks',
            background: 'raycastcopy/img/timer background.png',
        },
        {
            image:'raycastcopy/img/pomodoro-icon.webp',
            title:'Pomodoro',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'control pomodoro timers and see the current interval in the menu bar',
            background: 'raycastcopy/img/pomodoro background.png',
        },
        {
            image:'raycastcopy/img/notion-icon.webp',
            title:'Notion',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'The fastes way to search and create notion pages',
            background: 'raycastcopy/img/notion background.png',
        },
        {
            image:'raycastcopy/img/todoist-icon.webp',
            title:'Todo list',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Check your todo list tasks and quickly create a new one ',
            background: 'raycastcopy/img/todoList backgorund.png',
        },
        {
            image:'raycastcopy/img/google-search-icon.webp',
            title: 'Google search',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Need to know something fast ? google it from raycast ',
            background: 'raycastcopy/img/googleSearch background.png',
        },
        {
            image: 'raycastcopy/img/obsidian-icon.webp',
            title: 'Obsidian',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Capture information , manage tasks and pin notes to your menu bar',
            background: 'raycastcopy/img/obsidian background.png',
        },
        {
            image: 'raycastcopy/img/google-chrome-icon.webp',
            title: 'Google Chrome',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Search open tabs bookmarks and history in google chrome',
            background: 'raycastcopy/img/GoogleChrome background.png',
        },
        {
            image: 'raycastcopy/img/cleanshotx-icon.webp',
            title: 'Clean Shot X',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Trigger cleanshotX screen capture right from your keyboard',
            background:'raycastcopy/img/CleanShotX background.png',
        }
    ],
    engineering:[
        {
            image:"raycastcopy/img/linear-icon.webp",
            title:"Linear",
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: "Create , search and modify your issuse Without leaving your keyboard",
            background: 'raycastcopy/img/linear background.png', 
        },
        {
            image:'raycastcopy/img/kill-process-icon.webp',
            title: "Kill process",
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'see a list of all running prosesses and kill off any misbehaving one',
            background:'raycastcopy/img/KillProsses background.png',
        },
        {
            image:'raycastcopy/img/color-picker-icon.webp',
            title: 'Color Picker',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Pick and save colors from anywhere and access them from the menu bar',
            background: 'raycastcopy/img/colorPicker background.png',
        },
        {
            image:'raycastcopy/img/vscode-icon.webp',
            title: 'visual stodio code',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',   
            desc: 'search and open recent projects, handle extensions and commads' ,
            background: 'raycastcopy/img/Vscode background.png',
        },
        {
            image: 'raycastcopy/img/github-icon.webp',
            title: 'Git Hub',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>', 
            desc: 'work with issues, pull requests and see your notification in the menu bar',
            background: 'raycastcopy/img/gitHub background.png',
        },
        {
            image:'raycastcopy/img/tailwind-icon.webp',
            title: 'Tailwind css',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>', 
            desc: 'Search and insert Tailwind utilities or hop straight into the documentation.',
            background: 'raycastcopy/img/tailWind background.png',
        },
        {
            image: 'raycastcopy/img/format-json-icon.webp',
            title: 'Format JSON',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Quickly parse or format some JSON straight from your clipboard.',
            background: 'raycastcopy/img/formatJson backgorund.png',
        },
        {
            image: 'raycastcopy/img/warp-icon.webp',
            title: 'Wrap',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Navigate Warp tabs and windows and launch configurations.',
            background: 'raycastcopy/img/Wrap background.png',
        }
    ],
    design:[
        {
            image:'raycastcopy/img/color-picker-icon.webp',
            title: 'Color Picker',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Pick and save colors from anywhere and access them from the menu bar',
            background: 'raycastcopy/img/colorPicker background.png',
        },
        {
            image:'raycastcopy/img/tiny-png-icon.webp',
            title:'Tiny png',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: "Compress the selected images in finder with Tiny png ",
            background: 'raycastcopy/img/tinyPng background.png',
        },
        {
            image:'raycastcopy/img/lorem-ipsum-icon.webp',
            title: 'lorem',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Generate placeholder content and copy it to your clipboard.',
            background: 'raycastcopy/img/Lorem background.png',
        },
        {
            image: 'raycastcopy/img/image-modifications-icon.webp',
            title: 'Image Modification',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Filter, transform and convert images from your selection or clipboard.',
            background: 'raycastcopy/img/imageModification background.png',
        },
        {
            image:'raycastcopy/img/ruler-icon.webp',
            title: 'Ruler',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Measure on-screen distances by drawing lines between points.',
            background: 'raycastcopy/img/ruler background.png',
        },
        {
            image: 'raycastcopy/img/figma-file-search-icon.webp',
            title: 'Figma File Search',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'Quickly open a Figma file from anywhere on your Mac.',
            background: 'raycastcopy/img/FigmaFileSearch background.png',
        }

    ],
    writing:[
        {
            image:'raycastcopy/img/google-translate-icon.webp',
            title:'Google Translate',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'Use Google Translate to effortlessly Translate into multiple languages',
            background: 'raycastcopy/img/googletranslate background.png',
        },
        {
           image:"raycastcopy/img/arc-icon.webp",
            title:'Arc',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'Navigate your open tabs or search through your browser history',
            background:'raycastcopy/img/arc background.png',  
        },
        {
            image:'raycastcopy/img/notion-icon.webp',
            title:'Notion',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc:'The fastes way to search and create notion pages',
            background: 'raycastcopy/img/notion background.png',
        },
        {
           image:'raycastcopy/img/todoist-icon.webp',
            title:'Todo list',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Check your todo list tasks and quickly create a new one ',
            background: 'raycastcopy/img/todoList backgorund.png', 
        },
        {
            image:'raycastcopy/img/google-search-icon.webp',
            title: 'Google search',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Need to know something fast ? google it from raycast ',
            background: 'raycastcopy/img/googleSearch background.png',
        },
        {
            image: 'raycastcopy/img/obsidian-icon.webp',
            title: 'Obsidian',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Capture information , manage tasks and pin notes to your menu bar',
            background: 'raycastcopy/img/obsidian background.png',
        },
        {
            image: 'raycastcopy/img/google-chrome-icon.webp',
            title: 'Google Chrome',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Search open tabs bookmarks and history in google chrome',
            background: 'raycastcopy/img/GoogleChrome background.png',
        },
        {
            image:'raycastcopy/img/lorem-ipsum-icon.webp',
            title: 'lorem',
            icon: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
            desc: 'Generate placeholder content and copy it to your clipboard.',
            background: 'raycastcopy/img/Lorem background.png',
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