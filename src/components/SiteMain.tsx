import TabSwitcher from './TabSwitcher';

/** Компонент SiteMain рендерит основную часть сайта */
export default function SiteMain() {
  return (
    <main>
    <div className='searchBlock'>
      <img 
        src={require('../img/yandex-logo.PNG')} 
        alt={'yandex-logo'} 
        style={{
          height: '50px',
          marginRight: '10px'
        }}
      />
      <div className='mainForm'>
      <TabSwitcher widthTabSwitcher={'600px'}>
        <h3>Видео</h3>
        <h3>Картинки</h3>
        <h3>Новости</h3>
        <h3>Карты</h3>
        <h3>Маркет</h3>
        <h3>Переводчик</h3>
        <h3>Эфир</h3>
        <h3>ещё</h3>
      </TabSwitcher>

      <form className='searchForm'>
        <label htmlFor='search'>
          <input type='search' id='search' className='inputPlace'></input>
          <p>Найдётся всё. Например, фаза луны сегодня</p>
        </label>
        <input type='button' value='Найти' className='searchButton'></input>
      </form>
      </div>

    </div>
  </main>
  )
}
