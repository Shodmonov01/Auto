import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <hr />
        <div className="footerContent flex-class">
          <div className="footerTexts">
            <img src="/logo.svg" alt="Error" />
            <div className="socailMediaImg flex-class">
              <img src="/wk.svg" className="wk" alt="Error" />
              <img src="/whatsapp.svg" alt="Error" />
              <img src="/instagramm.svg" alt="Error" />
            </div>
            <p>
              © 1-й автоброкер <br /> Внесём качественные изменения в Вашу
              жизнь!
            </p>
          </div>
          <div className="footerLinks grid-class">
            <ul>
              <li>
                <h2>Компания</h2>
              </li>
              <li><a href="#">Каталог</a></li>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Новости</a></li>
              <li><a href="#">Контакты</a></li>
              <li><a href="#">Избранные</a></li>
            </ul>
            <ul>
              <li>
                <h2>Aтомобили</h2>
              </li>
              <li><a href="#">Из Европы</a></li>
              <li><a href="#">Из США</a></li>
              <li><a href="#">Из ОАЭ</a></li>
              <li><a href="#">Из Китая</a></li>
              <li><a href="#">Из Кореи</a></li>
            </ul>
            <ul>
              <li>
                <h2>Марки</h2>
              </li>
              <li><a href="#">Audi</a></li>
              <li><a href="#">Aston Martin</a></li>
              <li><a href="#">Acura</a></li>
              <li><a href="#">Alfa Romeo</a></li>
              <li><a href="#">Avatr</a></li>
            </ul>
            <ul>
              <li><a href="#">BMW</a></li>
              <li><a href="#">Baic</a></li>
              <li><a href="#">BYD</a></li>
              <li><a href="#">Bently</a></li>
              <li><a href="#">Chery</a></li>
            </ul>
            <ul>
              <li><a href="#">Chery</a></li>
              <li><a href="#">Cadilac</a></li>
              <li><a href="#">Changan</a></li>
              <li><a href="#">Chevrolet</a></li>
              <li><a href="#">Citroen</a></li>
            </ul>
            <ul>
              <li><a href="#">Daewoo</a></li>
              <li><a href="#">Datsun</a></li>
              <li><a href="#">Dodge</a></li>
              <li><a href="#">EXEED</a></li>
              <li><a href="#">Ferrari</a></li>
            </ul>
            <ul>
              <li><a href="#">Fiat</a></li>
              <li><a href="#">Ford</a></li>
              <li><a href="#">GAC</a></li>
              <li><a href="#">Geely</a></li>
              <li><a href="#">Genesis</a></li>
            </ul>
          </div>
        </div>
        <div className="footerBottom flex-class">
          <p>Политика конфиденциальности</p>
          <p>Сделано в UserTech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
