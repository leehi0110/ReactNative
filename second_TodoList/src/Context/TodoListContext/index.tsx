import React, {createContext, useState, useEffect, Children} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const TodoListContext = createContext<ITodoListContext>({
  todoList: [],
  addTodoList: (TodoList: string): void => {},
  removeTodoList: (index: number): void => {},
});

const TodoListContextProvider = ({children}: Props) => {
  const [todoList, setTodoList] = useState<Array<string>>([]);

  const addTodoList = ((TodoList: string):void => {
    let list = [...todoList,TodoList];
    setTodoList(list);
    AsyncStorage.setItem('todoList', JSON.stringify(list));
  });

  const removeTodoList = ((index:number): void => {
    let list = [...todoList];

    list.splice(index,1);

    setTodoList(list);
    AsyncStorage.setItem('todoList',JSON.stringify(list));
  });

  const initData = async () => {
    try {
      const list = await AsyncStorage.getItem('todoList');
      if(list === null) {
        setTodoList([]);
      }
      else {
        setTodoList(JSON.parse(list));
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    initData();
  },[]);

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        addTodoList,
        removeTodoList,
      }}>
      {children}
    </TodoListContext.Provider>
  );
};

export {TodoListContextProvider, TodoListContext};


