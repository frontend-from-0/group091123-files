import './styles.css';

export const HeadingL = ({title, bold}) => {

  return (
    <h2 className={bold ? 'bold' : ''}>{title}</h2>
  );
}