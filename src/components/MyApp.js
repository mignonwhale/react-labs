import { useState } from 'react';
import Input, { InputChange, InputState } from './Input';
import Iterator from './Iterator';
import EventDeclare, { ArrowEvent, InlineEvent } from './EventHandle';



export default function MyApp() {
  const nonStateValue = 'mignon';
  const [stateValue, setStateValue] = useState('mignon');
  return (
    <>
      <h1>props</h1>
      <ul>
        <li>
          원시타입 넘기기
        </li>
        <Input value={nonStateValue} />
        <p />
        <li>
          input.value와 onChange는 짝궁
        </li>
        <InputChange value={'hello'} />
        <p />
        <li>
          반응형상태 넘기기
        </li>
        <p>
          자식이 변경한 값: {stateValue} <br></br>
          - 자식은 부모한테서 받은 setState함수로 부모의 데이터를 변경한다. 이걸 'lifting state up'이라고 한다.
        </p>
        <InputState value={stateValue} setStateValue={setStateValue} />
      </ul>
      <h1>Iterator</h1>
      <h2>map</h2>
      <p>반복은 'map()'를 사용한다. </p>
      <Iterator flag={'map'} />
      <h2>filter</h2>
      <p>리스트 변경은 'filter()'를 사용한다. </p>
      <Iterator flag={'filter'} />
      <h1>event</h1>
      <ul>
        <li>
          함수선언식을 props로 넘기기
        </li>
        <EventDeclare />
        <p />
        <li>
          JSX 내부에서 인라인 익명함수로
        </li>
        <InlineEvent />
        <p />
        <li>
          JSX 내부에서 인라인 화살표함수로
        </li>
        <ArrowEvent />
      </ul>


    </>
  )
}