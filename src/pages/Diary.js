import { useParams } from 'react-router-dom';

const Diary = () => {
  // Path Variable
  const { id } = useParams();
  console.log(id);

  return (
    <div className='Diary'>
      <h1>Diary</h1>
      <p>이곳은 일기 상세 페이지입니다.</p>
    </div>
  );
};

export default Diary;
