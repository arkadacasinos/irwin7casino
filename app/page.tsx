'use client'

import { useState } from 'react'

const hashtags = [
  '#irwincasino',
  '#ирвинказино',
  '#irwincasinoофициальный',
  '#ирвинказиноофициальныйсайт',
  '#irwincasinoзеркало',
  '#ирвинказинозеркало',
  '#irwincasinoиграть',
  '#ирвинказиноиграть',
  '#irwincasinoонлайн',
  '#ирвинказиноонлайн',
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="irwin_header">
        <nav className="irwin_navbar" aria-label="Основная навигация">
          <a className="irwin_logo" href="#top" aria-label="Irwin Casino - главная">Irwin Casino</a>
          <button
            className="irwin_menu_toggle"
            type="button"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
          <div className={menuOpen ? 'irwin_menu_open' : 'irwin_menu'}>
            <a href="#about" onClick={() => setMenuOpen(false)}>О платформе</a>
            <a href="#games" onClick={() => setMenuOpen(false)}>Игры</a>
            <a href="#access" onClick={() => setMenuOpen(false)}>Доступ</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="irwin_hero" aria-labelledby="hero-title">
          <p style={{ color: 'var(--irwin-accent)', fontWeight: 600, marginBottom: '0.75rem' }}>ОНЛАЙН-КАЗИНО НОВОГО ФОРМАТА</p>
          <h1 id="hero-title" className="irwin_hero_title">Irwin Casino — официальный сайт для игры онлайн</h1>
          <p className="irwin_hero_subtitle">Понятный путь к любимым играм, спокойная навигация и всё необходимое для комфортного старта в одном месте.</p>
          <a className="irwin_cta_btn" href="#about">Узнать больше</a>
          <img className="irwin_hero_image" src="/irwin-casino-art.png" alt="Игровой стол с картами и фишками в Irwin Casino" />
        </section>

        <article className="irwin_content">
          <section id="about" className="irwin_section" aria-labelledby="about-title">
            <h2 id="about-title" className="irwin_section_h2">Irwin Casino официальный сайт: с чего начать</h2>
            <p>Irwin Casino — это онлайн-платформа для тех, кто ценит ясные правила, удобный интерфейс и быстрый доступ с телефона. Здесь не нужно тратить время на сложные настройки: Irwin Casino официальный сайт логично организован, поэтому новый игрок быстро находит регистрацию, каталог развлечений и раздел с поддержкой.</p>
            <p>Если вы ищете «irwin casino официальный» или «ирвин казино официальный сайт», обращайте внимание на адрес страницы и защищённое соединение. Правильный ресурс открывается по безопасному протоколу, корректно отображается на смартфоне и не просит устанавливать неизвестные файлы. Такой подход помогает отличить официальный портал от случайных копий.</p>
            <div className="irwin_text_block">
              <strong>Важно:</strong> азартные развлечения подходят только совершеннолетним. Играйте ответственно, заранее определяйте бюджет и воспринимайте ставки как форму досуга, а не как способ решить финансовые вопросы.
            </div>
          </section>

          <section id="games" className="irwin_section" aria-labelledby="games-title">
            <h2 id="games-title" className="irwin_section_h2">Ирвин казино играть: выбор игр онлайн</h2>
            <p>Запрос «ирвин казино играть» обычно означает желание быстро перейти к знакомым форматам без лишних переходов. В каталоге можно выбрать слоты, карточные игры и другие онлайн-развлечения, ориентируясь на описание, тематику и размер ставки. Перед началом полезно открыть правила конкретной игры: так вы заранее поймёте механику бонусных раундов, линий выплат и дополнительных функций.</p>
            <p>Irwin casino играть удобно как на большом экране, так и в мобильном браузере. Адаптивная верстка сохраняет крупные кнопки и читаемые подписи, а короткие подсказки помогают сориентироваться без постоянного обращения к поддержке. Начинайте с демо-режима, если он доступен, и переходите к игре на реальные средства только после знакомства с условиями.</p>
            <div className="irwin_features">
              <section className="irwin_feature_card" aria-labelledby="feature-one">
                <h3 id="feature-one">Игры для коротких сессий</h3>
                <p>Подберите формат, который подходит вашему ритму. Быстрый запуск и понятные правила позволяют сделать паузу в любой момент.</p>
              </section>
              <section className="irwin_feature_card" aria-labelledby="feature-two">
                <h3 id="feature-two">Доступ с любого экрана</h3>
                <p>Ирвин казино онлайн открывается в современном браузере без тяжёлых программ. Интерфейс рассчитан прежде всего на мобильный сценарий.</p>
              </section>
            </div>
          </section>

          <section id="access" className="irwin_section" aria-labelledby="access-title">
            <h2 id="access-title" className="irwin_section_h2">Ирвин казино зеркало: безопасный альтернативный вход</h2>
            <p>Иногда основной адрес временно недоступен из-за технических работ или особенностей сети. В такой ситуации пользователи ищут «irwin casino зеркало», «ирвин казино зеркало рабочее» или «irвин casino официальный сайт». Зеркало — это альтернативный адрес той же платформы, а не новый игровой сервис. Его задача — сохранить привычный аккаунт, интерфейс и настройки.</p>
            <p>Перед переходом на ирвин казино зеркало проверьте домен, наличие защищённого соединения и совпадение фирменного оформления. Не вводите логин и пароль на странице с подозрительными окнами, агрессивными обещаниями или просьбой сообщить код из SMS. Надёжный вариант не требует от вас отключать защиту браузера и не предлагает скачать неизвестное приложение.</p>
            <p>Запрос «ирвин казино онлайн» также часто связан с поиском быстрого входа с телефона. Добавьте проверенный адрес в закладки, чтобы не искать его заново, и используйте только собственные данные для входа. Если доступ всё ещё не открывается, обратитесь в службу поддержки через официальный раздел платформы.</p>
          </section>

          <section id="faq" className="irwin_section" aria-labelledby="faq-title">
            <h2 id="faq-title" className="irwin_section_h2">Частые вопросы об Irwin Casino</h2>
            <h3>Как найти Irwin Casino официальный сайт?</h3>
            <p>Проверяйте точность написания домена, защищённое соединение и актуальность страницы. В поиске встречаются запросы «irwin casino официальный» и «ирвин казино официальный сайт», но ориентироваться стоит на официальный адрес, а не только на заголовок результата.</p>
            <h3>Что делать, если нужен ирвин казино зеркало?</h3>
            <p>Используйте только ссылку из проверенного источника или официальной поддержки. Рабочее зеркало должно вести на привычную платформу, сохранять безопасное соединение и не запрашивать лишние сведения.</p>
            <h3>Можно ли играть в Irwin casino с телефона?</h3>
            <p>Да, мобильный браузер подходит для сценария «irwin casino играть». Откройте страницу в актуальной версии Safari или Chrome, проверьте стабильность соединения и не забывайте о разумных лимитах.</p>
          </section>
        </article>
      </main>

      <footer className="irwin_footer">
        <div className="irwin_footer_content">
          <h2 style={{ marginTop: 0, fontSize: '1.5rem' }}>Irwin Casino — играйте осознанно</h2>
          <p>Информация на странице предназначена для совершеннолетних пользователей и носит справочный характер. Ответственная игра начинается с контроля времени и бюджета.</p>
          <div className="irwin_hashtags" aria-label="Ключевые фразы сайта">
            {hashtags.map((tag) => <span className="irwin_hashtag" key={tag}>{tag}</span>)}
          </div>
          <p className="irwin_footer_text">© 2026 Irwin Casino. Все права защищены.</p>
        </div>
      </footer>
    </>
  )
}
