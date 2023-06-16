import React from 'react';

/** Определение типа пропсов, передаваемых компоненту TabSwitcher */
type Props = {
  children: React.ReactNode;
  /** Дети компонента являются узлами React */
  widthTabSwitcher: string,
/** Дополнительный параметр определяет ширину компонента и является string. */
};

/** Компонент TabSwitcher возвращает ненумерованный список с вложенными элементами children. 
 * Принимает параметр widthTabSwitcher, который определяет ширину компонента */
const TabSwitcher: React.FC<Props> = ({ children, widthTabSwitcher }) => {
  return (
    <ul 
      className="TabSwitcher"
      style={{width: `${widthTabSwitcher}`}}
    >
      {React.Children.map(children, (child) => {
        return <li className="sectionTabSwitcher">{child}</li>;
      })}
    </ul>
  );
};

export default TabSwitcher;
