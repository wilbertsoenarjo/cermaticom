import filter from "../utils/helpers/filter";
import sideNavigation from "../utils/helpers/side-navigation";
import cellPhoneCategory from "../utils/pages/cell-phone-category";
import home from "../utils/pages/home";
import computerTabletCategory from "../utils/pages/computer-tablet-category";

describe("Access eBay product", () => {
  beforeEach(() => {
    // Go to www.ebay.com
    cy.accessEbay();
  });

  it("Should be able to access product via category and apply multiple filters", () => {
    const desiredFilter = [
      { label: "Condition", option: "New" },
      { label: "Price", option: "Under IDR4,371,300" },
      { label: "Storage Capacity", option: "128 GB" },
    ];
    const appliedFilter = "filters applied";
    const mappedFilter = desiredFilter.map(
      (filter) => `${filter.label}: ${filter.option}`
    );

    // Navigate to Search by category > Electronics > Cell Phones & accessories
    home.shopByCategory.click();
    home.shopByCategoryMenu.should("be.visible").within(() => {
      home.cellPhonesCategory.click();
    });

    // After the page loads, click Cell Phones & Smartphones in the left hand side navigation section.
    cellPhoneCategory.cellPhoneTitle
      .should("be.visible")
      .and("have.text", "Cell Phones, Smart Watches & Accessories");
    sideNavigation.navigateToCategory("Cell Phones & Smartphones").click();

    // Now, click – All Filters (appears at the end of the filter drop downs)
    // (This test case is not doable since "All Filters" button doesn't exist.)

    // Add 3 filters - Condition, Price and Storage Capacity appearing in the pop-up and click apply.
    // Item Location filter is not available and switched to Storage Capacity.
    desiredFilter.forEach((filters) => {
      filter.applyFilter(filters.label, filters.option); // You need to use the `filter` helper object here
    });

    // Verify that the filter tags are applied.
    filter.filterBox(appliedFilter).click({ force: true });
    filter.filterMenu
      .should("be.visible")
      .and("contain.text", mappedFilter[0])
      .and("contain.text", mappedFilter[2])
      // This will fail the test since there is a bug.
      .and("contain.text", mappedFilter[1]);
  });

  it("Should be able to access product via search", () => {
    const searchInput = "macbook";

    // Type any search string in the search bar. For example: MacBook.
    home.searchBar.type(searchInput);
    home.searchBarMenu.should("be.visible").and("contain.text", searchInput);

    // Change the Search category. For example: Computers/Tablets & Networking and click Search.
    home.allCategories.click();
    home.allCategoriesDropdown.should("be.visible");
    home.allCategoriesOption.select("Computers/Tablets & Networking");
    home.searchButton.click();

    // Verify that the page loads completely.
    cy.url().should("include", searchInput);

    // Verify that the first result name matches with the search string.
    computerTabletCategory.resultList.should("be.visible").within(() => {
      computerTabletCategory.verifyFirstSearchResult(searchInput);
    });
  });
});
