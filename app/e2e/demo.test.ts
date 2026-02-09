import { Selector } from 'testcafe';

fixture `Hero Section - D.A Aviação`
    .page `http://localhost:5173`; // Sua porta do Vite

test('Deve verificar se o título da Hero Section está visível', async t => {
    // Selecionando pelo texto ou por uma classe Tailwind
    const mainTitle = Selector('h1').withText('D.A Aviação');
    const ctaButton = Selector('button').withAttribute('class', /bg-blue-600/);

    await t
        .expect(mainTitle.exists).ok()
        .click(ctaButton)
        // No Svelte 5, as mudanças de estado são reativas, o TestCafé aguarda automaticamente
        .expect(Selector('.modal-contato').exists).ok();
});
