const nav = document.querySelector("nav");
const header = document.querySelector("header");
const themeButton = document.getElementById("theme-toggle");

const githubStatus = document.getElementById("github-status");
const githubData = document.getElementById("github-data");
const githubAvatar = document.getElementById("github-avatar");
const githubName = document.getElementById("github-name");
const githubUsername = document.getElementById("github-username");
const githubBio = document.getElementById("github-bio");
const githubRepos = document.getElementById("github-repos");
const githubFollowers = document.getElementById("github-followers");
const githubFollowing = document.getElementById("github-following");
const githubLink = document.getElementById("github-link");


// Mobile Navigation


function createMobileMenu() {
    const navButton = document.createElement("button");

    navButton.textContent = "☰ Menu";
    navButton.classList.add("menu-button");
    navButton.type = "button";

    header.insertBefore(navButton, nav);

    navButton.addEventListener("click", function () {
        nav.classList.toggle("show");
    });

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("show");
        });
    });
}



function applyTheme(theme) {
    const darkModeEnabled = theme === "dark";

    document.body.classList.toggle("dark-mode", darkModeEnabled);

    if (darkModeEnabled) {
        themeButton.textContent = "☀️ Light Mode";
        themeButton.setAttribute("aria-pressed", "true");
    } else {
        themeButton.textContent = "🌙 Dark Mode";
        themeButton.setAttribute("aria-pressed", "false");
    }
}


function loadSavedTheme() {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
        applyTheme("dark");
    } else {
        applyTheme("light");
    }
}


function toggleTheme() {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    const selectedTheme = isDarkMode ? "dark" : "light";

    localStorage.setItem("portfolio-theme", selectedTheme);

    applyTheme(selectedTheme);
}


async function fetchGitHubProfile() {
    const username = "DenisNjoroge121";

    githubStatus.textContent = "Loading GitHub profile...";
    githubData.hidden = true;

    try {
        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
            throw new Error("GitHub profile could not be loaded.");
        }

        const profile = await response.json();

        displayGitHubProfile(profile);

    } catch (error) {
        githubStatus.textContent =
            "Unable to load GitHub profile. Please check your internet connection and try again.";
    }
}


// Display GitHub Data


function displayGitHubProfile(profile) {
    githubAvatar.src = profile.avatar_url;
    githubAvatar.alt = `Profile picture of ${profile.login}`;

    githubName.textContent = profile.name || profile.login;

    githubUsername.textContent = `@${profile.login}`;

    githubBio.textContent =
        profile.bio || "No GitHub bio is available.";

    githubRepos.textContent = profile.public_repos;

    githubFollowers.textContent = profile.followers;

    githubFollowing.textContent = profile.following;

    githubLink.href = profile.html_url;

    githubData.hidden = false;

    githubStatus.textContent = "";
}



// Initialize Portfolio


function initializePortfolio() {
    createMobileMenu();

    loadSavedTheme();

    themeButton.addEventListener("click", toggleTheme);

    fetchGitHubProfile();
}

initializePortfolio();
