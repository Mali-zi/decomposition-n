import RowList from './RowList';
import TabSwitcher from './TabSwitcher';

/** Компонент SiteHeader рендерит верхнюю часть сайта */
export default function SiteHeader() {
  return (
    <header>
    <nav>
      <TabSwitcher widthTabSwitcher={'500px'}>
        <h3><a href="#">Сейчас в СМИ</a></h3>
        <h3><a href="#">В Германии</a></h3>
        <h3><a href="#">Рекомендуем</a></h3>
        <div>
          Дата и время
        </div>
      </TabSwitcher>
    </nav>
    <div className='mainHeader'>
      
      <div className='leftHeader'>
        <RowList icons={<img src={require('../img/news.PNG')} 
            style={{
              width: '15px',
              marginRight: '10px'
            }}
            alt={'icon'}
          />}
        >
          <a href="#">Пляжи Сочи закрыли из-за дождей</a> 
          <a href="#">Число отравившихся шаурмой в Братске превысило 60 человек</a>
          <a href="#">В Крыму за ночь и утро сбили и заглушили девять беспилотников</a>
          <a href="#">Силуанов: KPI — чтобы пессимисты вернулись в Россию</a>
          <a href="#">Египет подал заявку на вступление в БРИКС</a>
        </RowList>
        <TabSwitcher widthTabSwitcher={'500px'}>
          <h4>$ 84,61 +0,31</h4>
          <h4>€ 91,39 +0,45</h4>
          <h4>НЕФТЬ 75,72 +0,89</h4>
        </TabSwitcher>
      </div>

      <div className='rightHeader'> 
        <img src={require('../img/uch.PNG')} 
            style={{
              width: '100px',
              marginRight: '10px'
            }}
            alt={'icon'}
          />
        <h3>Работа над ошибками</h3>
        <p><a href="#">Смотрите на Яндексе и запоминайте</a></p>
      </div>
          
    </div>

  </header>
  )
}
