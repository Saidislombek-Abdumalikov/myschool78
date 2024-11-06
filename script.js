function changeLanguage(language) {
    if (language === "uz") {
        document.getElementById("school-name").textContent = "78-Sonli Maktab Namangan, Davlatobod";
        document.getElementById("about-title").textContent = "Biz haqimizda";
        document.getElementById("about-text").textContent = "Davlatobodda joylashgan Namangan 78-sonli umumiy o'rta ta'lim maktabiga xush kelibsiz...";
        document.getElementById("news-title").textContent = "So'nggi yangiliklar";
        document.getElementById("news-item-title-1").textContent = "Ilmiy dastur ishga tushirildi";
        document.getElementById("news-item-text-1").textContent = "Biz yangi ilmiy dasturini e'lon qilamiz, u o'quvchilarni STEM yo'nalishida faol ishtirok etishga undaydi.";
        document.getElementById("contact-title").textContent = "Biz bilan bog'laning";
        document.getElementById("address").textContent = "Manzil: Davlatobod, Namangan";
        document.getElementById("email").textContent = "Email: saidislomabdumalikov1234@gmail.com";
        document.getElementById("phone").textContent = "Telefon: +998-94-948-0542";
    }
    else if (language === "ru") {
        // Add Russian translations
    }
    else if (language === "en") {
        // Add English translations
    }
}
