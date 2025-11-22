// Read data from URL parameters
const params = new URLSearchParams(window.location.search);

document.getElementById("p_name").innerText = params.get("name") || "";
document.getElementById("p_age_sex").innerText = params.get("age_sex") || "";
document.getElementById("p_date").innerText = params.get("date") || "";
document.getElementById("p_weight").innerText = params.get("weight") || "";
document.getElementById("p_temp").innerText = params.get("temp") || "";
document.getElementById("p_throat").innerText = params.get("throat") || "";

document.getElementById("p_diagnosis").innerText = params.get("diagnosis") || "";
document.getElementById("p_treatment").innerText = params.get("treatment") || "";
document.getElementById("p_followup").innerText = params.get("followup") || "";
document.getElementById("p_advise").innerText = params.get("advise") || "";

// Auto print
window.onload = () => {
    window.print();
};
