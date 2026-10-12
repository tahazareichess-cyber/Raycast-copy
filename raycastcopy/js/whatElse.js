function initWhatElse(){

    const whatElseData = [
    {
        text: "It can take notes.",
        image: "raycastcopy/img/raycast-notes.webp",
        title: "Raycast Notes",
        icon: "raycastcopy/img/todoist-icon.webp",
        desc: "A quick way to capture a thought while working on something else."
    },
    {
        text: "Track your flights.",
        image: "raycastcopy/img/flight-tracker.webp",
        title: "Flight Tracker",
        icon: "raycastcopy/img/notion-icon.webp",
        desc: "Enter any flight number into the search bar to get detailed tracking information."
    },
    {
        text: "Convert anything.",
        image: "raycastcopy/img/calculator.webp",
        title: "Calculator",
        icon: "raycastcopy/img/obsidian-icon.webp",
        desc: "Convert currencies or units, calculate time differences and much more."
    },
    {
        text: "Search files.",
        image: "raycastcopy/img/file-search.webp",
        title: "File Search",
        icon: "raycastcopy/img/jira-icon.webp",
        desc: "Quickly search for files or folders anywhere on your Mac."
    },
    {
        text: "Run scripts.",
        image: "raycastcopy/img/script-commands.webp",
        title: "Script Commands",
        icon: "raycastcopy/img/slack-icon.webp",
        desc: "Create scripts to automate everyday tasks and trigger them with a few keystrokes."
    },
    {
        text: "Manage your windows.",
        image: "raycastcopy/img/window-management.webp",
        title: "Window Management",
        icon: "raycastcopy/img/github-icon.webp",
        desc: "Resize, reorganize and move your focused window without touching your mouse."
    },
    {
        text: "Plan your day.",
        image: "raycastcopy/img/schedule.webp",
        title: "My Schedule",
        icon: "raycastcopy/img/spotify-icon.webp",
        desc: "Check your availability, block focus time or get an overview of your daily plan."
    },
    {
        text: "Remind you of stuff.",
        image: "raycastcopy/img/reminders.webp",
        title: "Apple Reminders",
        icon: "raycastcopy/img/ruler-icon.webp",
        desc: "Raycast connects to Apple's Reminders and lets you jot down to-dos."
    },
    {
        text: "Translate into any language.",
        image: "raycastcopy/img/translator.webp",
        title: "Translation",
        icon: "raycastcopy/img/pomodoro-icon.webp",
        desc: "Translate between any languages without leaving your keyboard."
    },
    {
        text: "Block distractions.",
        image: "raycastcopy/img/focus.webp",
        title: "Raycast Focus",
        icon: "raycastcopy/img/vscode-icon.webp",
        desc: "Stay in flow by blocking distracting apps and websites."
    },
    {
        text: "Find text in screenshots.",
        image: "raycastcopy/img/screenshot-search.webp",
        title: "Search Screenshots",
        icon: "raycastcopy/img/warp-icon.webp",
        desc: "Search for a screenshot using text that appears in the image."
    },
    {
        text: "Insert Emojis.",
        image: "raycastcopy/img/emoji-picker.webp",
        title: "Search Emojis and Symbols",
        icon: "raycastcopy/img/zoom-icon.webp",
        desc: "Search for emojis and symbols and paste them into any context."
    },
    {
        text: "And much, much more.",
        image: null,
        title: null,
        icon: null,
        desc: null
    }
];
const optionsContainer = document.querySelector(".whatElse-options");
const whatIcon = document.querySelector(".whatElse-icon");
const whatTitle = document.querySelector(".whatElse-title");
const whatDesc = document.querySelector(".whatElse-desc");
const whatImg = document.querySelector(".whatElse-main-img");
const whatBadge = document.querySelector(".whatElse-badge");

const optionElements = [];

whatElseData.forEach((data, index) => {
    const option = document.createElement("span");

    option.className = "whatElse-option";
    option.textContent = data.text;
    option.setAttribute("role", "button");
    option.setAttribute("tabindex", "0");
    option.setAttribute("aria-pressed", "false");

    option.addEventListener("click", () => {
        showWhatElse(index);
    });

    option.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            showWhatElse(index);
        }
    });

    optionsContainer.append(option);

    // Add a space between feature phrases
    if (index < whatElseData.length - 1) {
        optionsContainer.append(document.createTextNode(" "));
    }

    optionElements.push(option);
});

function showWhatElse(index) {
    const data = whatElseData[index];

    // Highlight the selected phrase
    optionElements.forEach((option, i) => {
        const isActive = i === index;

        option.classList.toggle("active", isActive);
        option.setAttribute("aria-pressed", String(isActive));
    });

    // Update the title and description
    whatTitle.textContent = data.title ?? "";
    whatDesc.textContent = data.desc ?? "";

    // Show or hide the badge
    whatBadge.hidden = !data.title || !data.icon;
    whatIcon.hidden = !data.icon;
    whatDesc.hidden = !data.desc;

    // Update the icon
    if (data.icon) {
        whatIcon.src = data.icon;
        whatIcon.alt = "";
    }

    // Update the preview image
    if (data.image) {
        whatImg.src = data.image;
        whatImg.alt = data.title ?? data.text;
    }
}

// Start with "Run scripts." selected, like your screenshot
showWhatElse(4);
}