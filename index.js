const burgerBtn = document.querySelector('#burger-menu');
const navMobile = document.querySelector('.navbar-mobile');
const overlay = document.querySelector('.main-overlay');

function toggleMenu(open) {
  burgerBtn.classList.toggle('bx-x', open);
  navMobile.classList.toggle('navbar-mobile-active', open);

  if (open) {
    overlay.style.cssText = `
      visibility: visible;
      opacity: 1;
      transition: all 0.5s ease;
      pointer-events: none;
      background-color: hsla(0, 0%, 0%, 0.700);
      position: fixed;
      inset: 0;
    `;
  } else {
    overlay.style.cssText = ``;
  }
}

burgerBtn.onclick = (event) => {
  event.stopPropagation();
  const isMenuOpen = navMobile.classList.contains('navbar-mobile-active');
  toggleMenu(!isMenuOpen);
};

document.addEventListener('click', (event) => {
  const isClickInside = burgerBtn.contains(event.target) || navMobile.contains(event.target);
  if (!isClickInside) {
    toggleMenu(false);
  }
});

document.querySelectorAll('.navbar-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    toggleMenu(false);
  });
});


const modal = document.querySelector('.modal');
const modalMain = document.querySelector('.modal__main');
const modalContent = document.querySelector('.modal-content');
const modalCloseBtn = document.querySelector('.modal-close-btn');



function openModal() {
    document.body.classList.add('modal-open');
    modalContent.scrollTop = 0;
    modal.classList.add('active');
}

function closeModal() {
    document.body.classList.remove('modal-open');
    modal.classList.remove('active');
    document.querySelector('.main-overlay').style.cssText = ``;
}

function fillModalContent(contentName) {
    const content = modalContents.find(item => item.name === contentName);
    if (!content) return;
  
    modal.querySelector('.modal-title').textContent = content.title;
    modal.querySelector('.modal-text').innerHTML = content.text;
  }

document.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn-to-modal')){

        event.preventDefault();

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
                <li class="contact-info-item"><i class='bx bx-phone'></i><a href="tel:+79263451036"> 8-926-345-10-36</a></li>
                <li class="contact-info-item">
                    <i class='bx bxl-whatsapp' ></i>
                    <a href="https://wa.me/79263451036" target="_blank" class="link-icon">Перейти в Whatsapp</a>
                </li>        
                <li class="contact-info-item">
                    <i class='bx bxl-telegram' ></i>
                    <a href="https://t.me/ADVOKAT_BORISOV_MOSCOW" target="_blank" class="link-icon">Перейти в Telegram</a>
                </li>        
                <li class="contact-info-item"><i class='bx bx-envelope'></i><a href="mailto:10434@apmo.ru"> 10434@apmo.ru</a></li>
                <li class="contact-info-item"><i class='bx bx-location'></i><a href="https://www.google.com/maps/place/Khodynskiy+Bul'var,+2,+Moskva,+Russia,+125167/@55.7886442,37.5362964,17z/data=!3m1!4b1!4m6!3m5!1s0x46b549961baa7dc9:0x380560ea5d58f72!8m2!3d55.7886442!4d37.5388767!16s%2Fg%2F11fsst7k9z?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">МКА "Адвокаты Куприяновы и партнеры".
                г. Москва, метро ЦСКА, Ходынский бульвар, дом 2, секция "Г", 2 этаж, офис Г-011, домофон 4011</a></li>
            </ul>
        `,
    },
    {
        name: 'aboutInfo',
        title: 'Информация обо мне',
        text: `
        <p class="info-text-p">Немного информации обо мне, чтобы Вам было проще принять решение о сотрудничестве:</p>
        
        <p class="info-text-p">Первоначально обучался по классической гуманитарной системе в Православном Свято-Тихоновском Гуманитарном Университете по направлениям "История" и "Теология", получив степень магистра истории. Далее изучал право, и, уже будучи дипломированным юристом, занялся частной адвокатской практикой.
        </p>
        
        <p class="info-text-p">В отличии от многих коллег, пришедших в адвокатуру после работы в следственных органах и привыкших смотреть на окружающих с позиции обвинения, я сpазу же после обучения стaл защитником, и именнo пoэтoму у меня отсутствует прoфдефоpмация в виде нeдовepия к словaм клиeнта и зaвeдомaя установка в гoловe пo т.н. "обвинитeльному уклoну".
        </p>
        
        <p class="info-text-p">Для мeня "пpeзумпция дoстовepноcти" свeдений, пoлученных от доверителя, не пустой звук, поэтому я погружаюсь в стратегию защиты с головой, работая с полной отдачей. Если Вам нужен адвокат с незапятнанной и надежной репутацией, которому можно довериться, то Вы обратились по адресу.
        </p>
        
        <p class="info-text-p">Помогу оценить целесообразность обращения в судебные органы, защитить Ваши интересы в ходе судебного разбирательства. Моя деятельность направлена на оказание реальной юридической помощи, чего не сказать о многочисленных юридических фирмах, которые "раздувают" из Вашего обращения глобальную проблему.
        </p>
        
        <p class="info-text-p">Не берусь за те дела, которые считаю безнадежными. Если Ваша проблема действительно нерешаема или результат может быть неоднозначным, мой долг – честно сказать Вам об этом.</p>
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



document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const token = "7251102638:AAGN0D8wn8a9UVKPzfRoK6OWvcrYSqzEUZg";
  const chatId = "1048105536";

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const contactMethod = document.getElementById("contact-method").value;
  const message = document.getElementById("message").value;

  const text = `
🔔 Новая заявка с сайта:

👤 Имя: ${name}
📞 Телефон: ${phone}
✉️ Email: ${email}
📬 Предпочтительный способ связи: ${contactMethod}
📝 Комментарий:
${message}
  `;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
    }),
  })
    .then(response => {
      if (response.ok) {
        alert("Заявка успешно отправлена!");
        document.getElementById("contact-form").reset();
      } else {
        alert("Ошибка при отправке. Попробуйте позже.");
      }
    })
    .catch(error => {
      console.error("Ошибка:", error);
      alert("Ошибка соединения.");
    });
});






const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRaHFLDow1NpupZSxECA2UMpPM9awtTN6zYRIxVqe6PCbSUrpTUHqzAtTchyNbO6ytMZkbxnB6SKSWq/pub?output=csv';

async function loadNews() {
  try {
    const timestamp = Date.now();
    const response = await fetch(`${csvUrl}&t=${timestamp}`);
    const csvText = await response.text();
    const news = parseCSV(csvText);
    displayNews(news);
  } catch (error) {
    document.getElementById('news-container').innerText = 'Ошибка загрузки новостей';
    console.error('Ошибка при загрузке CSV:', error);
  }
}

function parseCSV(csvText) {
  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  return parsed.data;
}

function displayNews(news) {
  const container = document.getElementById('news-container');
  container.innerHTML = '';

  const maxVisible = 5;

  news.forEach((item, index) => {
    modalContents.push({
      name: `news-${index}`,
      title: item.title,
      text: item.text.replace(/\n/g, '<br>')
    });

    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    if (index >= maxVisible) {
      newsItem.classList.add('hidden-news');
      newsItem.style.display = 'none';
    }

    newsItem.innerHTML = `
      <div class="news-item-container">
        <h3 class="news-item-title">${item.title}</h3>
        <small class="news-item-date">${item.date}</small>
      </div> 
      <a href="#" class="btn btn-to-modal" data-modal="news-${index}">Читать</a>
    `;

    container.appendChild(newsItem);
  });

  if (news.length > maxVisible) {
    const showMoreBtn = document.createElement('button');
    showMoreBtn.textContent = 'Показать все';
    showMoreBtn.classList.add('show-more-btn');

    let expanded = false;

    showMoreBtn.onclick = () => {
      const hiddenItems = container.querySelectorAll('.hidden-news');
      hiddenItems.forEach(item => {
        item.style.display = expanded ? 'none' : 'flex';
      });

      showMoreBtn.textContent = expanded ? 'Показать все' : 'Скрыть';
      expanded = !expanded;
    };

    container.appendChild(showMoreBtn);
  }
}
loadNews();







// function displayNews(news) {
//   const container = document.getElementById('news-container');
//   container.innerHTML = '';

//   news.forEach((item) => {

//     const newsItem = document.createElement('div');
//     newsItem.classList.add('news-item');

//     newsItem.innerHTML = `
//       <h3 class="news-item-title">${item.title}</h3>
//       <small class="news-item-date">${item.date}</small>
//       <p class="news-item-text">${item.text.replace(/\n/g, '<br>')}</p>
//     `;

//     container.appendChild(newsItem);
//     console.log(modalContents)
//   });
// }
// loadNews();