const resetField = (
  name,
  lastname,
  email,
  phone,
  datestart,
  dateend,
  numroom
) => {
  (name.value = ""),
    (lastname.value = ""),
    (email.value = ""),
    (phone.value = ""),
    (datestart.value = ""),
    (dateend.value = ""),
    (numroom.value = "");
};

const verifiedField = (
  name,
  lastname,
  email,
  phone,
  datestart,
  dateend,
  numrooms
) => {
  if (
    !(
      name === "" ||
      lastname === "" ||
      email === "" ||
      phone === "" ||
      datestart === "" ||
      dateend === "" ||
      numroom === ""
    )
  ) {
    let user = new Guest(
      name,
      lastname,
      email,
      phone,
      datestart,
      dateend,
      numrooms
    );
    console.log(user.dataGuest);
  } else {
    alert("No puedes dejar campos vacios");
  }
};

export { resetField, verifiedField };
