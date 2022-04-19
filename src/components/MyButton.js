const MyButton = ({ type, onClick, text }) => {
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

  return (
    <button
      // className은 문자열로 나눠져야 한다.
      className={['MyButton', `MyButton_${btnType}`].join(' ')}
      //? className={`MyButton MyButton_${btnType}`} 이렇게 해도 되지 않나?
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: 'default',
};

export default MyButton;
