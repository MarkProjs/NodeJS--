document.addEventListener("DOMContentLoaded", () => {
    // Check Phone Format
    document.getElementById("phoneForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        let phoneResult = document.getElementById("phoneResult");
        phoneResult.textContent = "";
        let phone = document.getElementById("phoneInput").value;
        const res = await fetch(`/checkPhoneFormat?phone=${phone}`);
        let data = await res.json();
        phoneResult.textContent = `Phone Format: ${data.isValid}`;
    });
});