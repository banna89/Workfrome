function handleSubmit() {
  const btn = document.getElementById("btn");
  btn.innerHTML = "⏳ Submitting...";
  btn.disabled = true;

  setTimeout(() => {
    window.location.href = "thankyou.html";
  }, 1200);
}