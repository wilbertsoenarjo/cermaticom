class SideNavigation {
  navigateToCategory(category: string) {
    return cy
      .get("[class='textual-display brw-category-nav__link']")
      .contains(category);
  }
}

export default new SideNavigation();
