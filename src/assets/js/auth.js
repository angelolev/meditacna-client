class Auth {
  authEmailPass(email, password) {}

  createAccountEmailPass(email, password, name) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: name,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
