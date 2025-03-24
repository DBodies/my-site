import emailjs from "emailjs-com";
import iziToast from "izitoast";
import i18next from "i18next";

export function sendMessageToEmail() {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // emailjs.sendForm("service_k5hgu9n", "template_rwqdscw", this, "PWgT1DM4RP6JfgjgI")
        emailjs.sendForm("service_v64hjbr", "template_dsit18g", this, "iIrOnQPlhWq2JRKpi")
            .then((response) => {
                if (response && response.status === 200) {
                    iziToast.show({
                        title: i18next.language === "ua" ? "Дякую" : "Success",
                        message: i18next.language === "ua" ? "Ваше повiдомлення надiслано!" : "Your message has been sent!",
                        position: "topCenter",
                        timeout: 5000,
                    });
                } else {
                    iziToast.show({
                        title: i18next.language === "ua" ? "Помилка" : "Error",
                        message: i18next.language === "ua" ? "Повiдомлення не надicлано" : "Sending went wrong",
                        position: "topCenter",
                        timeout: 5000,
                    });
                }
            })
            .catch((error) => {
                console.log("Failed...", error);
                iziToast.error({
                    title: i18next.language === "ua" ? "Помилка" : "Error",
                    message: i18next.language === "ua" ? "Повiдомлення не надicлано" : "Sending went wrong",
                    position: "topCenter",
                    timeout: 5000,
                });
            });

        this.reset(); // Очищаем форму после отправки
    });
}


// service_yomwbu2
// template_i7l8zjo
// lD41kOe9na7NQa9RS 