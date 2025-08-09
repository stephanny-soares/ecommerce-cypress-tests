describe('Product Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add a product to the cart successfully', () => {
    // 1. Navigate to products page or homepage with products listed
    cy.get('.product-image-wrapper').first().click();

    // 2. Add product to cart
    cy.get('.btn.btn-default.add-to-cart').click();

    // 3. Verify modal/pop-up or cart update
    cy.get('.modal-content').should('be.visible')
      .and('contain.text', 'Product added');

    // 4. Close modal or go to cart
    cy.get('.modal-content .close-modal').click();

    // 5. Open cart page
    cy.get('a[href="/view_cart"]').click();

    // 6. Verify product is listed in cart
    cy.get('.cart_info').should('contain.text', 'Your Product Name');
  });
});