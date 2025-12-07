const isLoggedIn = () => {
  return !!localStorage.getItem("currentUser");
};
