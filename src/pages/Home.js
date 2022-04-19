import { useContext, useEffect, useState } from 'react';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import { DiaryStateContext } from '../App';
import DiaryList from '../components/DiaryList';

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    //? If문과 Array?. 중 뭐가 더 나은가?
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();
      const LastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();
      setData(
        diaryList?.filter(
          (diary) => firstDay <= diary.date && diary.date <= LastDay
        )
      );
    }
  }, [diaryList, curDate]);

  const increseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  const decreseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div className='Home'>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={'<'} onClick={decreseMonth} />}
        rightChild={<MyButton text={'>'} onClick={increseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
