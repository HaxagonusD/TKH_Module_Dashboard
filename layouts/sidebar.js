class SideBar {
  loadSideBar() {
    // Creata a new instance
    const userProfile = new UserProfile();

    // Invoke the method (component)
    userProfile.loadUserProfile();

    // Output loading status
    console.log("SideBar component is loaded...");
  }
}
export { SideBar };
