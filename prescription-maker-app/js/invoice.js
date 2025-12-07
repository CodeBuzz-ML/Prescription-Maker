function updateTotal() {
    let v = parseFloat(document.getElementById("vaccine").value) || 0;
    let c = parseFloat(document.getElementById("consult").value) || 0;
    document.getElementById("total").value = v + c;
}

document.getElementById("vaccine").addEventListener("input", updateTotal);
document.getElementById("consult").addEventListener("input", updateTotal);

document.getElementById("printBtn").addEventListener("click", () => {

    // Save fields
    localStorage.setItem("pname", document.getElementById("pname").value);
    localStorage.setItem("age", document.getElementById("age").value);
    localStorage.setItem("date", document.getElementById("date").value);
    localStorage.setItem("weight", document.getElementById("weight").value);
    localStorage.setItem("temp", document.getElementById("temp").value);
    localStorage.setItem("throat", document.getElementById("throat").value);

    localStorage.setItem("vaccine", document.getElementById("vaccine").value);
    localStorage.setItem("consult", document.getElementById("consult").value);
    localStorage.setItem("total", document.getElementById("total").value);

    // Redirect to print page
    window.location.href = "invoice-print.html";
});
