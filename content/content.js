const body = document.getElementsByTagName('body')[0];

const header = document.createElement('header');
header.className = 'hero';
body.append(header);

const divContainer = document.createElement('div');
divContainer.className = 'container';
header.append(divContainer);

const divCont = document.createElement('div');
divCont.className = 'hero-header';
divContainer.append(divCont);

const img = document.createElement('img');
img.className = 'logo';
img.src = "img/logo.svg";
img.alt = "logo";
divCont.append(img);

const divSocial = document.createElement('div');
divSocial.className = 'social-links';
divCont.append(divSocial);

const aLinc = document.createElement('a');
aLinc.className = 'social-link';
aLinc.href = 'https://github.com/kpotapovich';
divSocial.append(aLinc);

const imgSocial = document.createElement("img");
imgSocial.src = "img/social/github.svg";
imgSocial.alt = "github";
aLinc.append(imgSocial);

const aCin = document.createElement('a');
aCin.className = 'social-link';
aCin.href = "https://twitter.com/CatKristinka";
divSocial.append(aCin);

const imgCin = document.createElement('img');
imgCin.src = "img/social/twitter.svg";
imgCin.alt = "twitter";
aCin.append(imgCin);

const aLink = document.createElement('a');
aLink.className = 'social-link';
aLink.href = "https://www.instagram.com/maestro_tomei/";
divSocial.append(aLink);

const imgAl = document.createElement('img');
imgAl.src = "img/social/instagram.svg";
imgAl.alt = "instagram";
aLink.append(imgAl);

const aLin = document.createElement('a');
aLin.className = 'social-link';
aLin.href = "https://www.facebook.com/MaestroTomei";
divSocial.append(aLin);

const imgA = document.createElement('img');
imgA.src = "img/social/facebook.svg";
imgA.alt = "fb";
aLin.append(imgA);

const divContent = document.createElement('div');
divContent.className = "hero-content";
divContainer.append(divContent);

const divText = document.createElement('div');
divText.className = 'hero-text';
divContent.append(divText);

const spanHero = document.createElement('span');
spanHero.className = 'hero-subtitle wow fadeInRight';
// spanHero.data-wow-delay = '0.2s';
spanHero.innerHTML = 'Фрилансер';
divText.append(spanHero);

const hTitle = document.createElement('h1');
hTitle.className = 'hero-title wow fadeInRight';
hTitle.innerHTML = 'Кристина Потапович';
divText.append(hTitle);

const pDiscription = document.createElement('p');
pDiscription.className = 'hero-discription wow fadeInRight';
pDiscription.innerHTML = 'Разрабатываю сайты для малого и среднего бизнеса. У меня можно заказать дизайн и верстку небольшого сайта или интернет-магазина';
divText.append(pDiscription);

const buttonHero = document.createElement('button');
buttonHero.className = 'button hero-button wow fadeInRight';
buttonHero.innerHTML = 'Бесплатная консультация';
divText.append(buttonHero);

const divAvatar = document.createElement('div');
divAvatar.className = 'hero-avatar wow fadeIn';
divContent.append(divAvatar);

const main = document.createElement('main');
body.append(main);

const section = document.createElement('section');
section.className = 'features';
main.append(section);

const divConta = document.createElement('div');
divConta.className = 'container';
section.append(divConta);

const sectionTitle = document.createElement('h2');
sectionTitle.className = 'section-title';
sectionTitle.innerHTML = 'Со мной удобно работать';
divConta.append(sectionTitle);

const divBlock = document.createElement('div');
divBlock.className = 'features-block';
divConta.append(divBlock);

const divItem = document.createElement('div');
divItem.className = 'features-item';
divBlock.append(divItem);

const divOffer = document.createElement('img');
divOffer.className = 'features-image';
divOffer.src = 'img/features/offer-img.svg';
divOffer.alt = 'По договору';
divItem.append(divOffer);

const h3Text = document.createElement('h3');
h3Text.className = 'features-title';
h3Text.innerHTML = 'По договору';
divItem.append(h3Text);

const pText = document.createElement('p');
pText.className = 'features-text';
pText.innerHTML = 'Предоставлю все документы для бухгалтерии: договоры, счета и акты. Работаю как ИП без НДС.'
divItem.append(pText);
