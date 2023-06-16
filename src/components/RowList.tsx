import React from 'react';

/** Определение типа пропсов, передаваемых компоненту RowList */
type Props = {
  children: React.ReactNode;
  /** Дети компонента являются узлами React */
  icons: React.ReactNode;
/** Дополнительный параметр также являются узлами React. 
 * В него передаюся иконки. */
};

/** Компонент RowList возвращает ненумерованный список с вложенными элементами children и icons*/
const RowList: React.FC<Props> = ({ children, icons }) => {
  return (
    <ul className="RowList">
      {React.Children.map(children, (child) => {
        return (
          <li className="Row">
            {icons}
            {child}
          </li>
        )
      })}
    </ul>
  );
};

export default RowList;