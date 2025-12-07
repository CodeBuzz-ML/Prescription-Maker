// Hide UI elements and print clean invoice page
window.onload = function () {
    // Hide elements that should not appear in print
    const hideDuringPrint = document.querySelectorAll('.no-print');
    hideDuringPrint.forEach(el => el.style.display = 'none');

    // Automatically trigger browser print
    window.print();

    // Restore hidden elements AFTER printing
    window.onafterprint = function () {
        hideDuringPrint.forEach(el => el.style.display = '');
    };
};
