import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () => {
  // Query String
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const mode = searchParams.get('mode');
  // console.log('id : ', id, ' mode : ', mode);
  // Navigate
  const navigate = useNavigate();

  return (
    <div className='Edit'>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지입니다.</p>
      <button onClick={() => setSearchParams({ who: 'chan' })}>
        QS 바꾸기
      </button>
      <button onClick={() => navigate('/')}>Home으로 가기</button>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default Edit;
