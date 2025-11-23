document.getElementById("printBtn").addEventListener("click", () => {

    // Save to localStorage for print page
    localStorage.setItem("pname", document.getElementById("pname").value);
    localStorage.setItem("age", document.getElementById("age").value);
    localStorage.setItem("date", document.getElementById("date").value);
    localStorage.setItem("weight", document.getElementById("weight").value);
    localStorage.setItem("temp", document.getElementById("temp").value);
    localStorage.setItem("throat", document.getElementById("throat").value);
    localStorage.setItem("consultation", document.getElementById("consultation").value);
    localStorage.setItem("vaccination", document.getElementById("vaccination").value);

    // Grand Total
    const grandTotal = consultation + vaccination;
    localStorage.setItem("grandTotal", grandTotal.toFixed(2));




    // Open print page
    window.location.href = "invoice-print.html";
});
