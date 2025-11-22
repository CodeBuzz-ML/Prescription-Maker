window.onload = () => {
    document.getElementById("pname").innerText = localStorage.getItem("pname");
    document.getElementById("age").innerText = localStorage.getItem("age");
    document.getElementById("date").innerText = localStorage.getItem("date");
    document.getElementById("weight").innerText = localStorage.getItem("weight");
    document.getElementById("temp").innerText = localStorage.getItem("temp");
    document.getElementById("throat").innerText = localStorage.getItem("throat");
    document.getElementById("diagnosis").innerText = localStorage.getItem("diagnosis");
    document.getElementById("treatment").innerText = localStorage.getItem("treatment");
    document.getElementById("followup").innerText = localStorage.getItem("followup");
    document.getElementById("advise").innerText = localStorage.getItem("advise");

    // Print automatically
    window.print();
};
