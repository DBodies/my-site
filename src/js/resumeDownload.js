import i18next from "i18next";

export function setupResume() {
    const resumeLink = document.querySelector(".resumeLinkDownload");

    function updateResumeLink() {
        const currentLang = i18next.language;
        const resumePath = currentLang === "ua" ? "/src/resume/Денис Ковалевський Резюме.pdf" : "/src/resume/Denis Kovalevskiy CV.pdf";

        resumeLink.setAttribute("href", resumePath);
    }


    i18next.on("languageChanged", updateResumeLink);
    
    updateResumeLink();
}
