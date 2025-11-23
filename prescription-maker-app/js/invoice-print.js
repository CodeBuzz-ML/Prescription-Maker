window.onload = () => {
    document.getElementById("pname").innerText = localStorage.getItem("pname");
    document.getElementById("age").innerText = localStorage.getItem("age");
    document.getElementById("date").innerText = localStorage.getItem("date");
    document.getElementById("weight").innerText = localStorage.getItem("weight");
    document.getElementById("temp").innerText = localStorage.getItem("temp");
    document.getElementById("throat").innerText = localStorage.getItem("throat");
    document.getElementById("consultation").innerText = localStorage.getItem("diagnosis");
    document.getElementById("vaccination").innerText = localStorage.getItem("treatment");
    document.getElementById("gtotal").innerText = localStorage.getItem("grandTotal");

    // Print automatically
    window.print();
};
