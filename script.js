const form = document.getElementById("regForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const btn = document.getElementById("btn");
  btn.innerText = "⏳ Submitting...";
  btn.disabled = true;

  const data = {
    fullName: form.querySelector('[name="full-name"]').value,
    mobile: form.querySelector('[name="mobile"]').value,
    email: form.querySelector('[name="email"]').value,
    state: form.querySelector('[name="state"]').value,
    city: form.querySelector('[name="city"]').value,
    gender: form.querySelector('[name="gender"]:checked').value,
    age: form.querySelector('[name="age"]').value
  };

  fetch("https://script.google.com/macros/s/AKfycbwY-7YONTZIKYGBaDWLK3ta3tkM9lG-Y3FoaxzEhCcREeKf6QeSBRvcbzkrObt5wZ6h/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(() => {
    window.location.href = "thankyou.html";
  })
  .catch(() => {
    alert("Submission failed");
    btn.disabled = false;
  });
});
