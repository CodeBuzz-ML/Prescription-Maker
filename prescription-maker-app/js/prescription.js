document.getElementById("printBtn").addEventListener("click", () => {

    const data = {
        name: document.getElementById("p_name").value,
        age: document.getElementById("p_age").value,
        date: document.getElementById("p_date").value,
        weight: document.getElementById("p_weight").value,
        temp: document.getElementById("p_temp").value,
        throat: document.getElementById("p_throat").value,

        diagnosis: document.getElementById("diagnosis").value,
        treatment: document.getElementById("treatment").value,
        follow: document.getElementById("followup").value,
        advise: document.getElementById("advise").value
    };

    localStorage.setItem("prescription-data", JSON.stringify(data));

    window.open("../html/prescription-print.html", "_blank");
});
