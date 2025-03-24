import { langSwitcher } from "./js/languageSwitcher";
import { setupResume } from "./js/resumeDownload";
import { notification } from "./js/izitoast";
import { sendMessageToEmail } from "./js/sendMessage";


window.addEventListener('DOMContentLoaded', async () => {
    langSwitcher();
    setupResume()
    notification()
    sendMessageToEmail()
});
