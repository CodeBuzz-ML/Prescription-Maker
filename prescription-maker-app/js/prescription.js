document.getElementById("printBtn").addEventListener("click", () => {

    // Save to localStorage for print page
    localStorage.setItem("pname", document.getElementById("pname").value);
    localStorage.setItem("age", document.getElementById("age").value);
    localStorage.setItem("date", document.getElementById("date").value);
    localStorage.setItem("weight", document.getElementById("weight").value);
    localStorage.setItem("temp", document.getElementById("temp").value);
    localStorage.setItem("throat", document.getElementById("throat").value);
    localStorage.setItem("diagnosis", document.getElementById("diagnosis").value);
    localStorage.setItem("treatment", document.getElementById("treatment").value);
    localStorage.setItem("followup", document.getElementById("followup").value);
    localStorage.setItem("advise", document.getElementById("advise").value);

    // Open print page
    window.location.href = "prescription-print.html";
});
