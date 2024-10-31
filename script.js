document.addEventListener("DOMContentLoaded", function() {
    const promotionTypeSelect = document.getElementById("promotion-type");
    const basicDiscountSection = document.getElementById("basic-discount-section");
    const discountTypeSelect = document.getElementById("discount-type");
    const discountValueSection = document.getElementById("discount-value-section");
    const discountApplicationSelect = document.getElementById("discount-application");
    const discountApplicationSection = document.getElementById("discount-application-section");
    const lineItemTypeSection = document.getElementById("line-item-type-section");
    const specificProductsSection = document.getElementById("specific-products-options");
    const categoriesSection = document.getElementById("categories-options");

    // Show basic discount section if selected
    promotionTypeSelect.addEventListener("change", function() {
        if (promotionTypeSelect.value === "basic-discount") {
            basicDiscountSection.classList.remove("hidden");
            resetSections(); // Reset all inner sections initially
        } else {
            basicDiscountSection.classList.add("hidden");
            resetSections();
        }
    });

    // Show discount value section if discount type is selected
    discountTypeSelect.addEventListener("change", function() {
        if (discountTypeSelect.value) {
            discountValueSection.classList.remove("hidden");
        } else {
            discountValueSection.classList.add("hidden");
            discountApplicationSection.classList.add("hidden");
            lineItemTypeSection.classList.add("hidden");
            resetSections();
        }
    });

    // Show discount application section once a discount value is entered
    document.getElementById("basic-discount-value").addEventListener("input", function() {
        if (this.value) {
            discountApplicationSection.classList.remove("hidden");
        } else {
            discountApplicationSection.classList.add("hidden");
            lineItemTypeSection.classList.add("hidden");
            resetSections();
        }
    });

    // Show line item type section based on discount application selection
    discountApplicationSelect.addEventListener("change", function() {
        if (discountApplicationSelect.value === "line-items") {
            lineItemTypeSection.classList.remove("hidden");
        } else {
            lineItemTypeSection.classList.add("hidden");
            specificProductsSection.classList.add("hidden");
            categoriesSection.classList.add("hidden");
        }
    });

    // Show specific products or categories based on line item type selection
    document.getElementById("line-item-type").addEventListener("change", function() {
        if (this.value === "products") {
            specificProductsSection.classList.remove("hidden");
            categoriesSection.classList.add("hidden");
        } else if (this.value === "categories") {
            categoriesSection.classList.remove("hidden");
            specificProductsSection.classList.add("hidden");
        } else {
            specificProductsSection.classList.add("hidden");
            categoriesSection.classList.add("hidden");
        }
    });

    function resetSections() {
        discountValueSection.classList.add("hidden");
        discountApplicationSection.classList.add("hidden");
        lineItemTypeSection.classList.add("hidden");
        specificProductsSection.classList.add("hidden");
        categoriesSection.classList.add("hidden");
    }
});
