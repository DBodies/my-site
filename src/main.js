import { langSwitcher } from "./js/languageSwitcher";
import { setupResume } from "./js/resumeDownload";
import { notification } from "./js/izitoast";
import { sendMessageToEmail } from "./js/sendMessage";

import "izitoast/dist/css/iziToast.min.css";


window.addEventListener('DOMContentLoaded', async () => {
    async function loadComponent(id, file) {
        await fetch(file)
            .then(response => response.text())
            .then(html => {
                document.getElementById(id).innerHTML = html;
            })
            .catch(err => console.log('Ошибка загрузки', err));
    }

    await loadComponent('header', './src/components/header.html');
    await loadComponent('firstSection', './src/components/firstSection.html');
    await loadComponent('secondSection', './src/components/secondSection.html');
    await loadComponent('thirdSection', './src/components/thirdSection.html');
    await loadComponent('fourthSection', './src/components/fourthSection.html');
    await loadComponent('fifthSection', './src/components/fifthSection.html');
    await loadComponent('sixthSection', './src/components/sixthSection.html');
    await loadComponent('footer', './src/components/footer.html');

    langSwitcher();
    setupResume()
    notification()
    sendMessageToEmail()
});
