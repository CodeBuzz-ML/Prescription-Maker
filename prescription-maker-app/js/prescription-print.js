document.addEventListener("DOMContentLoaded", () => {

    const data = JSON.parse(localStorage.getItem("prescription-data"));

    if (data) {
        document.getElementById("p_name").innerText = data.name;
        document.getElementById("p_age").innerText = data.age;
        document.getElementById("p_date").innerText = data.date;
        document.getElementById("p_weight").innerText = data.weight;
        document.getElementById("p_temp").innerText = data.temp;
        document.getElementById("p_throat").innerText = data.throat;

        document.getElementById("p_diag").innerText = data.diagnosis;
        document.getElementById("p_treat").innerText = data.treatment;
        document.getElementById("p_follow").innerText = data.follow;
        document.getElementById("p_advise").innerText = data.advise;
    }

    // auto-open print dialog
    setTimeout(() => {
        window.print();
    }, 500);
});
