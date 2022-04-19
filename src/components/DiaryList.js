import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControlMenu from './ControlMenu';
import DiaryItem from './DiaryItem';
import MyButton from './MyButton';

const optionListByTime = [
  { value: 'latest', name: '최신 순' },
  { value: 'oldest', name: '오래된 순' },
];

const optionListByEmotion = [
  { value: 'all', name: '전부 다' },
  { value: 'good', name: '좋은 감정만' },
  { value: 'bad', name: '안좋은 감정만' },
];

const DiaryList = ({ diaryList }) => {
  const [sortByTime, setSortByTime] = useState('latest');
  const [filterByEmotion, setFilterByEmotion] = useState('all');

  const navigate = useNavigate();

  const getProcessedDiaryList = () => {
    //- filter의 콜백함수 : True만 남긴다.
    const filterCallBack = (it) => {
      if (filterByEmotion === 'good') {
        return parseInt(it.emotion) >= 3;
      }
      if (filterByEmotion === 'bad') {
        return parseInt(it.emotion) < 3;
      }
    };

    //- sort의 비교함수 : b - a -> 내림차순, a - b -> 오름차순
    const compare = (a, b) => {
      if (sortByTime === 'latest') {
        //- 확실히 숫자형이 되도록 한다.
        return parseInt(b.date) - parseInt(a.date);
      }
      if (sortByTime === 'oldest') {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(diaryList));
    const filteredList =
      filterByEmotion === 'all' ? copyList : copyList.filter(filterCallBack);
    const sortedList = filteredList.sort(compare);

    return sortedList;
  };

  return (
    <div className='DiaryList'>
      <div className='menu_wrapper'>
        <div className='left_col'>
          <ControlMenu
            value={sortByTime}
            onChange={setSortByTime}
            optionList={optionListByTime}
          />
          <ControlMenu
            value={filterByEmotion}
            onChange={setFilterByEmotion}
            optionList={optionListByEmotion}
          />
        </div>
        <div className='right_col'>
          <MyButton
            type={'positive'}
            onClick={() => navigate('/new')}
            text={'새 일기쓰기'}
          />
        </div>
      </div>

      {getProcessedDiaryList()?.map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
