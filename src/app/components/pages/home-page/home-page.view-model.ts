import { HomePageProps, TodoItem } from './home-page.types';
import { useTranslation } from '@lib/i18n';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useHomePageViewModel({}: HomePageProps) {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [todoText, setTodoText] = useState<string>('');
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const language = useMemo(() => i18n.language, [i18n.language]);

  const addTodo = useCallback(() => {
    setTodoItems((items) => [
      ...items,
      {
        id: items.length + 1,
        text: todoText,
        completed: false,
      },
    ]);
    setTodoText('');
  }, [todoText]);

  const removeTodo = useCallback(
    (id: number) => () => {
      setTodoItems((items) => items.filter((item) => item.id !== id));
    },
    [],
  );

  const toggleTodo = useCallback(
    (id: number) => () => {
      setTodoItems((items) =>
        items.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        }),
      );
    },
    [],
  );

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  }, []);

  const changeLanguage = useCallback(
    (language: string) => () => {
      i18n.changeLanguage(language);
    },
    [i18n],
  );

  const handleGetStarted = useCallback(() => {
    navigate('/getting-started');
  }, [navigate]);

  return {
    todoItems,
    todoText,
    addTodo,
    removeTodo,
    toggleTodo,
    handleInputChange,
    t,
    language,
    changeLanguage,
    handleGetStarted,
  };
}

export default useHomePageViewModel;
