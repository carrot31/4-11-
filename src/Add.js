import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { createWord } from './redux/modules/word';

const Add = () =>{
    const history = useHistory();
    const dispatch = useDispatch();

    const word_text = React.useRef(null);
    const word_explain = React.useRef(null);
    const word_example = React.useRef(null);

    const word_list = useSelector((state) => state.word.list)
    // console.log(word_list)

    return(
        <AddBox>
            <h3>단어 추가하기</h3>
            단어<input type='text' ref={word_text} />
            설명<input type='text' ref={word_explain}/>
            예시<input type='text' ref={word_example}/>

            <button onClick={()=>{
                dispatch(createWord(
                    {word:word_text.current.value, explain:word_explain.current.value, example: word_example.current.value}
                ));
                history.push('/');
            }}>저장하기</button>    
        </AddBox>
    )
}

const AddBox =styled.div`
    width: 400px;
    height: 500px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    /* border: 1px solid gray; */
    & h3{
        text-align: center;
    }
    & input{
        border-top: none;
        border-right: none;
        border-left: none;
        margin-bottom: 10px;
        padding:8px;

    }
    & button{
        width: 200px;
        height: 40px;
        margin: 10px auto;
        background: green;
        color: white;
        border:none;
    }
    & button:hover{
        box-shadow: 0px 0px 5px 0px gray;
    }
`;
export default Add