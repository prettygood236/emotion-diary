import React, { useReducer, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      newState = [action.data, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default: {
      return state;
    }
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const App = () => {
  const dummyData = [
    { id: 1, content: '오늘의일기 1번', emotion: 1, date: 1648815012170 },
    { id: 2, content: '오늘의일기 2번', emotion: 2, date: 1648915012171 },
    { id: 3, content: '오늘의일기 3번', emotion: 3, date: 1649915012172 },
    { id: 4, content: '오늘의일기 4번', emotion: 4, date: 1650015012173 },
    { id: 5, content: '오늘의일기 5번', emotion: 5, date: 1650115012174 },
    { id: 6, content: '오늘의일기 6번', emotion: 5, date: 1648000012174 },
  ];
  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: dataId.current++,
        content,
        emotion,
        date: new Date(date).getTime(),
      },
    });
  };
  const onRemove = (targetId) => {
    dispatch({ type: 'REMOVE', targetId });
  };
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        content,
        emotion,
        date: new Date(date).getTime(),
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onRemove, onEdit }}>
        <BrowserRouter>
          <div className='App'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/new' element={<New />} />
              <Route path='/edit' element={<Edit />} />
              <Route path='/diary/:id' element={<Diary />} />
            </Routes>
            {/* <MyHeader
          headText={'App'}
          leftChild={
            //. 이렇게 컴포넌트 자체를 prop으로 전달하면 전달할 prop을 줄일 수 있다.
            //. <MyButton text={'왼쪽 버튼'} onClick={() => alert('왼쪽 클릭')} />
          }
          rightChild={
            <MyButton
              text={'오른쪽 버튼'}
              onClick={() => alert('오른쪽 클릭')}
            />
          }
        /> */}

            {/* src외부는 import가 안된다. public 폴더의 절대경로 사용 (현재 어디에 있건 접근가능한 경로) */}
            {/* <img src={process.env.PUBLIC_URL + '/assets/emotion1.png'} /> */}
            {/* <RouteTest /> */}
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;
