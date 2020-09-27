const callToast = (messages) => {
  const toast = document.getElementById("toast");
  const messageid = document.getElementById("message");
  messageid.innerText = messages;
  toast.classList.add("showtoast");
  setTimeout(() => {
    toast.classList.remove("showtoast");
  }, 2000);
};

export { callToast };
