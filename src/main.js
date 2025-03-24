import { langSwitcher } from "/src/js/languageSwitcher";
import { setupResume } from "/src/js/resumeDownload";
import { notification } from "/src/js/izitoast";
import { sendMessageToEmail } from "/src/js/sendMessage";


window.addEventListener('DOMContentLoaded', async () => {
    langSwitcher();
    setupResume()
    notification()
    sendMessageToEmail()
});
