import RowList from './RowList';

/** Компонент SiteFooter рендерит нижнюю часть сайта */
export default function SiteFooter() {
  return (
    <footer>
      <img 
        src={require('../img/movie.PNG')} 
        alt={'weather'} 
        style={{
          height: '90px',
        }}
      />

      <div className='SiteFooter'>
        <RowList icons={<></>}>
          <h3>Погода</h3>
          <div className='weather'>
            <div>
              <img 
                src={require('../img/weather.PNG')} 
                alt={'weather'} 
                style={{
                  height: '50px',
                  marginRight: '10px',
                }}
              />
            </div>
            <div>
              Утром +17, 
              <p>днём +20</p>
            </div>
          </div>
        </RowList>

        <RowList icons={<></>}>
          <h3>Посещаемое</h3>
          <p>Недвижимость - о сталинках</p>
          <p>Маркет - люстры и светильники</p>
          <p>Авто.ру - привод 4х4 до 500 000</p>
        </RowList>

        <RowList icons={<></>}>
          <h3>Карта Германии</h3>
          <p>Расписания</p>
        </RowList>

        <RowList icons={<></>}>
          <h3>Телепрограмма</h3>
          <p>10:35 Лесник. "Охота", 1-я серия</p>
          <p>13:00 Сегодня</p>
          <p>14:00 Место встречи</p>
        </RowList>

        <RowList icons={<></>}>
          <h3>Эфир</h3>
          <p>Управление как искусство</p>
          <p>Ночь. Мир в это время</p>
          <p>Андрей Возн...</p>
        </RowList>
    </div>
  </footer>
  )
}
