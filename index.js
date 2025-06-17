const burgerBtn = document.querySelector('#burger-menu');
const navMobile = document.querySelector('.navbar-mobile');

burgerBtn.onclick = (event) => {
    event.stopPropagation();
    burgerBtn.classList.toggle('bx-x');
    navMobile.classList.toggle('navbar-mobile-active');
}

document.addEventListener('click', (event) => {
    const isClickInside = burgerBtn.contains(event.target) || navMobile.contains(event.target);

    if (!isClickInside) {
        burgerBtn.classList.remove('bx-x');
        navMobile.classList.remove('navbar-mobile-active');
    }
});


const modal = document.querySelector('.modal');
const modalMain = document.querySelector('.modal__main');
const modalCloseBtn = document.querySelector('.modal-close-btn');


function openModal() {
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

function fillModalContent(contentName) {
    const content = modalContents.find(item => item.name === contentName);
    if (!content) return;
  
    modal.querySelector('.modal-title').textContent = content.title;
    modal.querySelector('.modal-text').innerHTML = content.text;
  }

document.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn-to-modal')){

        openModal();

        const modalName = event.target.dataset.modal;
        if (modalName) {
            fillModalContent(modalName);
        }
    }
});

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', event => {
    const target = event.target;
    if(target == modal || target == modalCloseBtn){
        closeModal();
    }
})


const modalContents = [
    {
        name: 'contactInfo',
        title: 'Контактная информация',
        text: `
            <ul class="contact-info">
                <li class="contact-info-item"><i class='bx bx-map'></i><a href="https://www.google.com/maps/place/Khodynskiy+Bul'var,+2,+Moskva,+Russia,+125167/@55.7886442,37.5362964,17z/data=!3m1!4b1!4m6!3m5!1s0x46b549961baa7dc9:0x380560ea5d58f72!8m2!3d55.7886442!4d37.5388767!16s%2Fg%2F11fsst7k9z?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">Москва, Ходынский бульвар д. 2</a></li>
                <li class="contact-info-item"><i class='bx bx-phone'></i><a href="tel:+79263451036"> 8-926-345-10-36</a></li>
                <li class="contact-info-item"><i class='bx bx-envelope'></i><a href="mailto:10434@apmo.ru"> 10434@apmo.ru</a></li>
            </ul>
        `,
    },
    {
        name: 'aboutInfo',
        title: 'Информация обо мне',
        text: `
            <p>Немного информации обо мне, чтобы у Вам было проще принять решение о сотрудничестве или отказаться от него: 
            Первоначально получил классическое гуманитарное образование в Православном Свято-Тихоновском Гуманитарном Университете по направлениям "История" и "Теология", получив степень магистра истории. Далее изучал право, получив диплом юриста, после чего занялся частной адвокатской практикой.</p>
            <p>Я сpазу стaл aдвокaтoм и именнo пoэтoму у меня отсутствует прoфдефоpмация в виде нeдовepия к словaм клиeнта и зaвeдомaя пpошивкa в гoловe пo т.н. "обвинитeльному уклoну". Для мeня "пpeзумпция дoстовepноcти" свeдений, пoлученных от доверителя, не пустой звук поэтому я погружаюсь в стратегию защиты с головой, работая с полной отдачей. Если Вам нужны адвокаты с незапятнанной и надежной репутацией, которым можно довериться, то Вы обратились по адресу.</p>
            <p>Помогу оценить целесообразность обращения в судебные органы, защитить свои интересы в ходе судебного разбирательства. Моя деятельность направлена на оказание реальной юридической помощи, чего не сказать о многочисленных юридических фирмах, которые "раздувают" из Вашего обращения глобальную проблему.</p>
            <p>Не берусь за те дела, которые считаю безнадежными. Если Ваша проблема действительно не решаема или результат может быть неоднозначным, мой долг – честно сказать Вам об этом.</p>
        `,
    },
]


const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach(accordionItemHeader => {

    accordionItemHeader.addEventListener('click', event => {

        accordionItemHeader.classList.toggle('active');

        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains('active')){
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    })
})