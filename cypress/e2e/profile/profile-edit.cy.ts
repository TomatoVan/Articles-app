let profileId: string;

describe('to profile page', () => {
    beforeEach(() => {
        cy.visit('profile');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`/profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('profile page loaded', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('to edit profile', () => {
        const newName = 'newName';
        const newLastname = 'newLastname';
        cy.updateProfile(newName, newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
    });
});
