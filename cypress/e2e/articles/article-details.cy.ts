let currentArticleId = '';
describe('to article details page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    // Add new article - test everything - delete article
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('article details page loaded', () => {
        cy.getByTestId('ArticlesDetails.Info').should('exist');
    });
    it('article details recommendations list loaded', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('article details comments list', () => {
        cy.getByTestId('ArticlesDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('article details rating', () => {
        cy.getByTestId('ArticlesDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(3, 'feedback test');
        cy.get('[data-selected=true]').should('have.length', 3);
    });
});
