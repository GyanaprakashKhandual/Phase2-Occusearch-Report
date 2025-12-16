const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuToggle = document.getElementById("menuToggle");
const themeToggle = document.getElementById("themeToggle");
const sprintNameEl = document.getElementById("sprintName");
const reportNameEl = document.getElementById("reportName");
const separatorEl = document.getElementById("separator");
const contentArea = document.getElementById("contentArea");

function loadState() {
    const savedTheme = localStorage.getItem("theme") || "light";
    const savedSprint = localStorage.getItem("currentSprint");
    const savedReport = localStorage.getItem("currentReport");
    const savedReportName = localStorage.getItem("currentReportName");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    if (savedSprint && savedReport && savedReportName) {
        loadContent(savedReportName, savedReport, parseInt(savedSprint));
        openSprintInSidebar(parseInt(savedSprint));
    }
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

menuToggle.addEventListener("click", () => {
    const isClosed = sidebar.classList.contains("closed");
    if (isClosed) {
        sidebar.classList.remove("closed");
        overlay.classList.add("active");
    } else {
        sidebar.classList.add("closed");
        overlay.classList.remove("active");
    }
});

overlay.addEventListener("click", () => {
    sidebar.classList.add("closed");
    overlay.classList.remove("active");
});

function toggleSprint(sprintNum) {
    const sprint = document.getElementById(`sprint-${sprintNum}`);
    const otherSprintNum = sprintNum === 1 ? 2 : 1;
    const otherSprint = document.getElementById(`sprint-${otherSprintNum}`);

    sprint.classList.toggle("open");
    otherSprint.classList.remove("open");
}

function openSprintInSidebar(sprintNum) {
    const sprint = document.getElementById(`sprint-${sprintNum}`);
    const otherSprintNum = sprintNum === 1 ? 2 : 1;
    const otherSprint = document.getElementById(`sprint-${otherSprintNum}`);

    sprint.classList.add("open");
    sprint.querySelector(".sprint-header").classList.add("active");
    otherSprint.classList.remove("open");
    otherSprint.querySelector(".sprint-header").classList.remove("active");
}

function loadContent(reportName, reportType, sprintNum) {
    localStorage.setItem("currentSprint", sprintNum);
    localStorage.setItem("currentReport", reportType);
    localStorage.setItem("currentReportName", reportName);

    sprintNameEl.textContent = `Sprint ${sprintNum}`;
    reportNameEl.textContent = reportName;
    reportNameEl.style.display = "inline";
    separatorEl.style.display = "inline";

    document.querySelectorAll(".report-item").forEach((item) => {
        item.classList.remove("active");
    });
    if (event && event.target) {
        event.target.closest(".report-item").classList.add("active");
    }

    document.querySelectorAll(".sprint-header").forEach((header) => {
        header.classList.remove("active");
    });
    if (event && event.target) {
        event.target
            .closest(".sprint")
            .querySelector(".sprint-header")
            .classList.add("active");
    }

    const contentMap = {
        "bug-1": `
                    <div style="padding: 20px; background-color: var(--bg-light); border-radius: 8px;">
                        <h2 style="margin-bottom: 15px; color: var(--blue);">Sprint 1 - Bug Report</h2>
                        <p>This would load from <code>bug-sprint-1.html</code></p>
                        <p style="margin-top: 10px; font-size: 14px; color: #666;">Create bug-sprint-1.html file to display your bug reports here</p>
                    </div>
                `,
        "api-1": `
                    <div style="padding: 20px; background-color: var(--bg-light); border-radius: 8px;">
                        <h2 style="margin-bottom: 15px; color: var(--green);">Sprint 1 - API Test Report</h2>
                        <p>This would load from <code>api-sprint-1.html</code></p>
                        <p style="margin-top: 10px; font-size: 14px; color: #666;">Create api-sprint-1.html file to display your API test reports here</p>
                    </div>
                `,
        "performance-1": `
                    <div style="padding: 20px; background-color: var(--bg-light); border-radius: 8px;">
                        <h2 style="margin-bottom: 15px; color: var(--blue);">Sprint 1 - Performance Report</h2>
                        <p>This would load from <code>performance-sprint-1.html</code></p>
                        <p style="margin-top: 10px; font-size: 14px; color: #666;">Create performance-sprint-1.html file to display your performance reports here</p>
                    </div>
                `,
        "bug-2": `
                    <div style="padding: 20px; background-color: var(--bg-light); border-radius: 8px;">
                        <h2 style="margin-bottom: 15px; color: var(--blue);">Sprint 2 - Bug Report</h2>
                        <p>This would load from <code>bug-sprint-2.html</code></p>
                        <p style="margin-top: 10px; font-size: 14px; color: #666;">Create bug-sprint-2.html file to display your bug reports here</p>
                    </div>
                `,
        "api-2": `
                    <div style="padding: 20px; background-color: var(--bg-light); border-radius: 8px;">
                        <h2 style="margin-bottom: 15px; color: var(--green);">Sprint 2 - API Test Report</h2>
                        <p>This would load from <code>api-sprint-2.html</code></p>
                        <p style="margin-top: 10px; font-size: 14px; color: #666;">Create api-sprint-2.html file to display your API test reports here</p>
                    </div>
                `,
        "performance-2": `
                    <div style="padding: 20px; background-color: var(--bg-light); border-radius: 8px;">
                        <h2 style="margin-bottom: 15px; color: var(--blue);">Sprint 2 - Performance Report</h2>
                        <p>This would load from <code>performance-sprint-2.html</code></p>
                        <p style="margin-top: 10px; font-size: 14px; color: #666;">Create performance-sprint-2.html file to display your performance reports here</p>
                    </div>
                `,
    };

    contentArea.innerHTML = contentMap[`${reportType}-${sprintNum}`] || "<p>Content not found</p>";

    if (window.innerWidth <= 768) {
        sidebar.classList.add("closed");
        overlay.classList.remove("active");
    }
}

loadState();