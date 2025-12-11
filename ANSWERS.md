# 📚 Ответы на вопросы из книги "Full Stack Development with Spring Boot 3 and React"

**Полный файл ответов на все главы: 10, 11, 12, 13**

---

## Глава 10: Consuming the REST API with React

### Основные темы главы:

**1. Создание макета UI**
- Планирование интерфейса перед разработкой
- Определение основных компонентов
- Визуализация структуры приложения

**2. Подготовка бэкенда Spring Boot**
- Настройка CORS для взаимодействия с фронтендом
- Создание REST endpoints
- Обеспечение совместимости фронтенд/бэкенд

**3. Создание React приложения**
- Структурирование проекта
- Настройка для работы с API
- Организация компонентов

### Что добавлено в проект:

✅ **Структура для работы с API:**
- Папка `src/api/` для API сервисов
- Папка `src/types/` для TypeScript типов данных
- Настройка axios для HTTP запросов

✅ **Типы данных:**
- Interface для данных с бэкенда
- Типизация API ответов
- Обработка ошибок

✅ **API сервисы:**
- Централизованное управление запросами
- Переиспользуемые функции для работы с API
- Обработка аутентификации

### Основные концепции работы с REST API:

**HTTP методы:**
- `GET` - получение данных
- `POST` - создание новых данных
- `PUT` - обновление существующих данных
- `DELETE` - удаление данных

**Работа с асинхронностью:**
- `async/await` для чистого кода
- Обработка loading состояний
- Обработка ошибок с try/catch

**CORS (Cross-Origin Resource Sharing):**
- Разрешает фронтенду обращаться к бэкенду на другом порту
- Настраивается на Spring Boot стороне
- Без CORS браузер блокирует запросы

### Структура проекта для работы с API:

```
src/
├── api/
│   └── carService.ts      # API вызовы для работы с машинами
├── types/
│   └── Car.ts             # TypeScript типы данных
├── components/
│   └── CarList.tsx        # Компоненты для отображения данных
└── App.tsx
```

---

## Глава 11: Useful Third-Party Components for React

### 1. Как найти компоненты для React?

**Основные источники:**

- **JS.coach** (https://js.coach/) - поиск по ключевым словам с фильтром по React
- **awesome-react-components** (https://github.com/brillout/awesome-react-components) - курированный список компонентов
- **npm** - официальный реестр пакетов
- **GitHub** - поиск по репозиториям

**Что проверять при выборе компонента:**
- Активность разработки (последние коммиты)
- Количество звезд и загрузок
- Качество документации
- Наличие TypeScript типов
- Размер пакета
- Лицензия

---

### 2. Как устанавливать компоненты?

**Установка через npm:**
```bash
npm install component_name
```

**Установка через yarn:**
```bash
yarn add component_name
```

**Установка конкретной версии:**
```bash
npm install component_name@version
```

**Удаление компонента:**
```bash
npm uninstall component_name
# или
yarn remove component_name
```

**Полезные команды:**
```bash
npm outdated      # Проверка устаревших пакетов
npm update        # Обновление всех пакетов
npm list          # Список установленных зависимостей
```

**Важно:** Зависимости сохраняются в `package.json`, а сами файлы - в папке `node_modules` (которая не загружается в git).

---

### 3. Как использовать ag-grid компонент?

**AG Grid** - мощный компонент таблицы с сортировкой, фильтрацией и пагинацией.

**Установка:**
```bash
npm install ag-grid-community ag-grid-react
```

**Основное использование:**

```tsx
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

const [rowData] = useState([
  { id: 1, name: 'Ford', price: 25000 },
  { id: 2, name: 'Toyota', price: 30000 }
]);

const [columnDefs] = useState<ColDef[]>([
  { field: 'id', sortable: true, filter: true },
  { field: 'name', sortable: true, filter: true },
  { field: 'price', sortable: true, filter: true }
]);

return (
  <div className="ag-theme-material" style={{ height: 500 }}>
    <AgGridReact
      rowData={rowData}
      columnDefs={columnDefs}
      pagination={true}
      paginationPageSize={10}
    />
  </div>
);
```

**Основные возможности:**
- `sortable: true` - сортировка
- `filter: true` - фильтрация
- `pagination={true}` - пагинация
- `cellRenderer` - кастомизация ячеек
- `headerName` - заголовок колонки

---

### 4. Как использовать библиотеку компонентов MUI?

**Material UI (MUI)** - библиотека компонентов, реализующая Material Design от Google.

**Установка:**
```bash
npm install @mui/material @emotion/react @emotion/styled
```

**Добавление шрифта Roboto в index.html:**
```html
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
```

**Основные компоненты:**

```tsx
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// Использование
<Container maxWidth="lg">
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">My App</Typography>
    </Toolbar>
  </AppBar>
  
  <Button variant="contained">Click Me</Button>
  
  <TextField label="Name" fullWidth margin="dense" />
  
  <List>
    <ListItem>Item 1</ListItem>
  </List>
</Container>
```

**Варианты кнопок:**
- `text` (по умолчанию)
- `contained` (залитая)
- `outlined` (с обводкой)

---

### 5. Как реализовать роутинг в React приложении?

**React Router** - самая популярная библиотека для роутинга в React.

**Установка:**
```bash
npm install react-router-dom@6
```

**Основное использование:**

```tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**Ключевые компоненты:**
- `BrowserRouter` - корневой компонент роутера
- `Routes` - обертка для Route компонентов
- `Route` - определяет путь и компонент
- `Link` - ссылка для навигации (не перезагружает страницу)

**Вложенные маршруты:**
```tsx
<Routes>
  <Route path="/contact" element={<Contact />}>
    <Route path="london" element={<ContactLondon />} />
    <Route path="paris" element={<ContactParis />} />
  </Route>
</Routes>
```

**Wildcard маршрут (404):**
```tsx
<Route path="*" element={<PageNotFound />} />
```

---

## Глава 12: Setting Up the Frontend for Our Spring Boot RESTful Web Service

### 1. Почему нужно делать mock-up UI?

**Mock-up (макет UI)** - это визуальное представление интерфейса перед началом разработки.

**Преимущества:**

📋 **Для клиента:**
- Видит, как будет выглядеть приложение до написания кода
- Может предложить изменения на раннем этапе
- Легче понять функциональность и дизайн
- Помогает согласовать требования

💻 **Для разработчика:**
- Четкое понимание структуры UI
- Планирование компонентов заранее
- Избежание переделок в коде
- Экономия времени

⚡ **Процесс:**
- Mock-up изменить легко и быстро
- Изменения в коде сложнее и дороже
- Можно создать интерактивные mock-ups для демонстрации функционала

**Инструменты для создания mock-ups:**
- Figma
- Balsamiq
- Adobe XD
- Карандаш и бумага

**Пример из главы:**
Для Car List приложения создан mock-up:
- Таблица с машинами (пагинация, сортировка, фильтрация)
- Кнопка "+ CREATE" для добавления машины
- Модальная форма для ввода данных
- Кнопки Edit/Delete в каждой строке
- Экспорт в CSV

---

### 2. Как отключить Spring Security в бэкенде?

Для разработки фронтенда часто нужно временно отключить security.

**В файле SecurityConfig.java:**

```java
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    // Отключаем security - разрешаем всем доступ ко всем endpoints
    http.csrf((csrf) -> csrf.disable())
        .cors(withDefaults())
        .authorizeHttpRequests((authorizeHttpRequests) -> 
            authorizeHttpRequests.anyRequest().permitAll());
    
    /* ЗАКОММЕНТИРУЙ СУЩЕСТВУЮЩУЮ КОНФИГУРАЦИЮ
    http.csrf((csrf) -> csrf.disable()) 
        .cors(withDefaults())
        .sessionManagement((sessionManagement) ->
            sessionManagement.sessionCreationPolicy(
                SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests((authorizeHttpRequests) -> 
            authorizeHttpRequests
            .requestMatchers(HttpMethod.POST, "/login").permitAll()
            .anyRequest().authenticated())
        .addFilterBefore(authenticationFilter, 
            UsernamePasswordAuthenticationFilter.class)
        .exceptionHandling((exceptionHandling) ->
            exceptionHandling.authenticationEntryPoint(
                exceptionHandler));
    */
    
    return http.build();
}
```

**Что делает `.permitAll()`:**
- Разрешает доступ без аутентификации
- Полезно для начальной разработки
- Потом включаем security обратно

**Проверка:**
```bash
# GET запрос без токена должен работать
curl http://localhost:8081/api/cars
```

**Важно:** 
- Это только для разработки!
- Перед продакшеном включить security обратно
- В нашем проекте security включен, но есть Login компонент

---

## Глава 13: Adding CRUD Functionalities

### Вопросы главы 13:

### 1. Как создать список элементов с помощью REST API?

**Ответ:**

Для создания списка элементов используется:
1. **GET запрос** для получения данных
2. **useState** для хранения данных
3. **useEffect** для загрузки при монтировании
4. **Таблица или список** для отображения

**Пример:**

```tsx
function CarList() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    loadCars();
  }, []);
  
  const loadCars = async () => {
    try {
      setLoading(true);
      const data = await getCars(); // GET /api/cars
      setCars(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <table>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Model</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car => (
          <tr key={car.id}>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>${car.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

**Ключевые моменты:**
- `useEffect` с пустым массивом зависимостей `[]` загружает данные один раз
- `async/await` для асинхронных запросов
- `try/catch` для обработки ошибок
- `map()` для рендеринга списка
- `key` prop обязателен для каждого элемента списка

---

### 2. Как удалить элемент с помощью REST API?

**Ответ:**

Для удаления элемента используется:
1. **DELETE запрос** с ID элемента
2. **Подтверждение** от пользователя (confirm)
3. **Обновление списка** после удаления

**Пример:**

```tsx
const handleDelete = async (id: number) => {
  // Подтверждение перед удалением
  if (window.confirm('Are you sure you want to delete this car?')) {
    try {
      await deleteCar(id); // DELETE /api/cars/{id}
      loadCars(); // Обновляем список
    } catch (err) {
      alert('Failed to delete car');
      console.error(err);
    }
  }
};

// В таблице
<button onClick={() => handleDelete(car.id)}>
  Delete
</button>
```

**API функция:**

```tsx
export const deleteCar = async (id: number): Promise<void> => {
  const response = await apiClient.delete(`/api/cars/${id}`);
  return response.data;
};
```

**Важно:**
- Всегда подтверждайте удаление (`window.confirm`)
- Обновляйте список после удаления
- Обрабатывайте ошибки
- DELETE метод не возвращает данные (Promise<void>)

---

### 3. Как добавить элемент с помощью REST API?

**Ответ:**

Для добавления элемента используется:
1. **Модальная форма** для ввода данных
2. **useState** для хранения данных формы
3. **POST запрос** с данными нового элемента
4. **Обновление списка** после добавления

**Пример компонента AddCar:**

```tsx
type AddCarProps = {
  onCarAdded: () => void; // Callback для обновления списка
};

function AddCar({ onCarAdded }: AddCarProps) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState<NewCar>({
    brand: '',
    model: '',
    color: '',
    registrationNumber: '',
    modelYear: 2024,
    price: 0,
    ownerId: 1
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createCar(car); // POST /api/cars
      setOpen(false);
      setCar({ brand: '', model: '', ... }); // Очистка формы
      onCarAdded(); // Обновление списка
    } catch (err) {
      alert('Failed to add car');
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>+ Create</Button>
      
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>New Car</DialogTitle>
        <DialogContent>
          <TextField
            label="Brand"
            value={car.brand}
            onChange={(e) => setCar({...car, brand: e.target.value})}
            fullWidth
          />
          {/* Остальные поля... */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
```

**API функция:**

```tsx
export const createCar = async (car: NewCar): Promise<Car> => {
  const response = await apiClient.post<Car>('/api/cars', car);
  return response.data;
};
```

**Ключевые моменты:**
- Используйте `Dialog` из MUI для модального окна
- `TextField` для инпутов
- `onChange` обновляет state через spread operator `{...car, field: value}`
- `e.preventDefault()` предотвращает перезагрузку страницы
- После успешного добавления закрывайте форму и обновляйте список
- POST возвращает созданный объект

---

### 4. Как обновить элемент с помощью REST API?

**Ответ:**

Для обновления элемента используется:
1. **Модальная форма** с предзаполненными данными
2. **PUT запрос** с обновленными данными
3. **Обновление списка** после изменения

**Пример компонента EditCar:**

```tsx
type EditCarProps = {
  car: Car;
  onCarUpdated: () => void;
};

function EditCar({ car, onCarUpdated }: EditCarProps) {
  const [open, setOpen] = useState(false);
  const [editedCar, setEditedCar] = useState<Car>(car);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (editedCar.id) {
        await updateCar(editedCar.id, editedCar); // PUT /api/cars/{id}
        setOpen(false);
        onCarUpdated();
      }
    } catch (err) {
      alert('Failed to update car');
    }
  };

  return (
    <>
      <Button onClick={() => {
        setEditedCar(car); // Предзаполнение формы
        setOpen(true);
      }}>
        Edit
      </Button>
      
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Car</DialogTitle>
        <DialogContent>
          <TextField
            label="Brand"
            value={editedCar.brand}
            onChange={(e) => setEditedCar({...editedCar, brand: e.target.value})}
            fullWidth
          />
          {/* Остальные поля... */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
```

**API функция:**

```tsx
export const updateCar = async (id: number, car: NewCar): Promise<Car> => {
  const response = await apiClient.put<Car>(`/api/cars/${id}`, car);
  return response.data;
};
```

**Отличия от Add:**
- Форма предзаполняется существующими данными
- Используется PUT вместо POST
- В URL передается ID: `/api/cars/{id}`
- Заголовок диалога "Edit" вместо "New"

---

### 5. Как использовать React Query для управления данными?

**Ответ:**

**React Query** упрощает работу с серверными данными (загрузка, кеширование, обновление).

**Установка:**
```bash
npm install @tanstack/react-query@4
```

**Настройка:**

```tsx
// main.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

**Использование для GET (загрузка данных):**

```tsx
import { useQuery } from '@tanstack/react-query';

function CarList() {
  const { data: cars, isLoading, error, refetch } = useQuery({
    queryKey: ['cars'],
    queryFn: getCars
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {cars?.map(car => <div key={car.id}>{car.brand}</div>)}
      <button onClick={() => refetch()}>Refresh</button>
    </div>
  );
}
```

**Использование для POST/PUT/DELETE (мутации):**

```tsx
import { useMutation, useQueryClient } from '@tanstack/react-query';

function AddCar() {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: createCar,
    onSuccess: () => {
      // Автоматическое обновление списка после добавления
      queryClient.invalidateQueries({ queryKey: ['cars'] });
    }
  });

  const handleSubmit = (car: NewCar) => {
    mutation.mutate(car);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Форма */}
      <button disabled={mutation.isPending}>
        {mutation.isPending ? 'Adding...' : 'Add Car'}
      </button>
    </form>
  );
}
```

**Преимущества React Query:**
- ✅ Автоматическое кеширование данных
- ✅ Фоновое обновление данных
- ✅ Обработка loading/error состояний "из коробки"
- ✅ `refetch()` для ручного обновления
- ✅ `invalidateQueries()` для автоматического обновления после мутаций
- ✅ Оптимистичные обновления
- ✅ Retry логика при ошибках

**Ключевые концепции:**
- `useQuery` - для GET запросов (чтение данных)
- `useMutation` - для POST/PUT/DELETE (изменение данных)
- `queryKey` - уникальный ключ для кеша
- `queryFn` - функция для загрузки данных
- `invalidateQueries` - сброс кеша для обновления

---

### Итоги главы 13:

**Что реализовано:**
- ✅ **Read (GET)** - Получение списка машин
- ✅ **Delete (DELETE)** - Удаление машины с подтверждением
- ✅ **Create (POST)** - Добавление машины через модальную форму
- ✅ **Update (PUT)** - Редактирование машины через модальную форму
- ✅ **Loading states** - Индикаторы загрузки
- ✅ **Error handling** - Обработка ошибок
- ✅ **React Query** (опционально) - Упрощенное управление данными

**CRUD операции - полный цикл:**

```
Create  → POST   /api/cars       (добавить)
Read    → GET    /api/cars       (список)
        → GET    /api/cars/{id}  (один элемент)
Update  → PUT    /api/cars/{id}  (обновить)
Delete  → DELETE /api/cars/{id}  (удалить)
```

---

## Глава 14: Styling the Frontend with MUI

### Вопросы главы 14:

### 1. Что такое MUI?

**Ответ:**

**MUI (Material UI)** - это библиотека React компонентов, которая реализует **Material Design** от Google.

**Основные характеристики:**

📦 **Что включает:**
- Готовые компоненты UI (Button, TextField, Dialog, AppBar, и т.д.)
- Система стилей на основе Material Design
- Темизация и кастомизация
- Адаптивность и accessibility
- TypeScript поддержка из коробки

🎨 **Material Design:**
- Дизайн-система созданная Google
- Современный, чистый и профессиональный внешний вид
- Единообразие интерфейса
- Анимации и переходы

**Версии:**
- MUI v5 (используется в этом проекте) - поддерживает Material Design v2
- MUI v6 - поддерживает Material Design v3

**Преимущества:**
- ✅ Экономия времени разработки
- ✅ Профессиональный внешний вид
- ✅ Хорошая документация
- ✅ Большое сообщество
- ✅ Accessibility (доступность) из коробки
- ✅ Responsive дизайн

**Установка:**
```bash
npm install @mui/material @emotion/react @emotion/styled
```

---

### 2. Как использовать различные Material UI компоненты?

**Ответ:**

Для использования MUI компонентов нужно:

#### Шаг 1: Импортировать компонент

```tsx
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
```

**Важно:** Импортируйте компоненты напрямую из подпапок для оптимизации bundle size:
- ✅ `import Button from '@mui/material/Button';`
- ❌ `import { Button } from '@mui/material';`

#### Шаг 2: Использовать компонент в JSX

**Пример с Button:**

```tsx
// Базовая кнопка (variant="text" по умолчанию)
<Button onClick={handleClick}>Click Me</Button>

// Filled кнопка
<Button variant="contained" color="primary">
  Save
</Button>

// Outlined кнопка
<Button variant="outlined" color="secondary">
  Cancel
</Button>

// С иконкой
<Button startIcon={<SaveIcon />}>
  Save
</Button>
```

**Варианты Button:**
- `text` - текстовая (по умолчанию)
- `contained` - залитая
- `outlined` - с обводкой

**Пример с TextField:**

```tsx
<TextField
  label="Brand"
  value={brand}
  onChange={(e) => setBrand(e.target.value)}
  fullWidth
  required
/>

// С разными вариантами
<TextField variant="outlined" />  // По умолчанию
<TextField variant="filled" />
<TextField variant="standard" />
```

**Пример с Dialog (модальное окно):**

```tsx
const [open, setOpen] = useState(false);

<>
  <Button onClick={() => setOpen(true)}>Open Dialog</Button>
  
  <Dialog open={open} onClose={() => setOpen(false)}>
    <DialogTitle>Title</DialogTitle>
    <DialogContent>
      <TextField label="Name" fullWidth />
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={handleSave}>Save</Button>
    </DialogActions>
  </Dialog>
</>
```

**Пример с Stack (для spacing):**

```tsx
import Stack from '@mui/material/Stack';

<Stack spacing={2} mt={1}>
  <TextField label="Field 1" />
  <TextField label="Field 2" />
  <TextField label="Field 3" />
</Stack>
```

`spacing={2}` создает отступ между элементами (1 unit = 8px, 2 = 16px).

**Настройка props:**

Все MUI компоненты принимают множество props:
- `variant` - вариант внешнего вида
- `color` - цвет ('primary', 'secondary', 'error', 'warning', 'info', 'success')
- `size` - размер ('small', 'medium', 'large')
- `fullWidth` - занять всю ширину
- `disabled` - отключить компонент
- `sx` - inline стили через sx prop

**Пример с sx prop:**

```tsx
<Button
  sx={{
    mt: 2,        // margin-top: 16px
    mb: 1,        // margin-bottom: 8px
    bgcolor: 'primary.light'
  }}
>
  Styled Button
</Button>
```

---

### 3. Как использовать MUI иконки?

**Ответ:**

#### Установка:

```bash
npm install @mui/icons-material
```

#### Способы использования:

**1. IconButton (кнопка-иконка):**

```tsx
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

<IconButton 
  onClick={handleDelete} 
  color="error" 
  size="small"
  aria-label="delete"
>
  <DeleteIcon fontSize="small" />
</IconButton>
```

**Важно:** `aria-label` обязателен для accessibility (screen readers).

**2. Иконка в кнопке (startIcon/endIcon):**

```tsx
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

<Button startIcon={<SaveIcon />}>
  Save
</Button>

<Button endIcon={<DeleteIcon />}>
  Delete
</Button>
```

**3. Tooltip для иконок:**

```tsx
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

<Tooltip title="Edit car">
  <IconButton size="small" aria-label="edit">
    <EditIcon fontSize="small" />
  </IconButton>
</Tooltip>
```

**Поиск иконок:**

1. Открой документацию: https://mui.com/material-ui/material-icons/
2. Используй поиск (например, "delete")
3. Кликни на иконку чтобы увидеть import:

```tsx
import DeleteIcon from '@mui/icons-material/Delete';
```

**Популярные иконки:**

```tsx
// Общие
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

// Действия
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RefreshIcon from '@mui/icons-material/Refresh';

// Навигация
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Файлы
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadIcon from '@mui/icons-material/FileUpload';

// Аутентификация
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
```

**Размеры иконок:**

```tsx
<EditIcon fontSize="small" />      // 20px
<EditIcon fontSize="medium" />     // 24px (default)
<EditIcon fontSize="large" />      // 35px
<EditIcon fontSize="inherit" />    // Наследует от родителя
```

**Цвета иконок:**

```tsx
<IconButton color="default">
  <EditIcon />
</IconButton>

<IconButton color="primary">    // Синий
  <EditIcon />
</IconButton>

<IconButton color="error">      // Красный
  <DeleteIcon />
</IconButton>

<IconButton color="success">    // Зеленый
  <SaveIcon />
</IconButton>
```

**В нашем проекте используется:**

```tsx
// В CarList.tsx
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import LogoutIcon from '@mui/icons-material/Logout';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

// В EditCar.tsx
import EditIcon from '@mui/icons-material/Edit';

// Использование с Tooltip
<Tooltip title="Delete car">
  <IconButton 
    onClick={handleDelete}
    color="error"
    size="small"
    aria-label="delete"
  >
    <DeleteIcon fontSize="small" />
  </IconButton>
</Tooltip>
```

---

### Итоги главы 14:

**Что реализовано:**

✅ **Button компоненты:**
- Replaced HTML buttons with MUI Button
- Added variants (contained, outlined)
- Added colors (primary, error, success)
- Added icons with startIcon prop

✅ **IconButton компоненты:**
- Edit button как IconButton с EditIcon
- Delete button как IconButton с DeleteIcon
- Добавлены Tooltips для лучшего UX
- Добавлены aria-labels для accessibility

✅ **TextField компоненты:**
- Заменены все HTML input на MUI TextField
- Использован Stack component для spacing
- Outlined variant для профессионального вида

✅ **Экспорт в CSV:**
- Кнопка "Export CSV" с FileDownloadIcon
- Автоматическое скачивание файла с датой
- Disabled если список пуст

**Преимущества после стилизации:**
- 🎨 Профессиональный внешний вид
- 📱 Responsive дизайн
- ♿ Accessibility (aria-labels, tooltips)
- 🚀 Единообразный UI
- 💡 Интуитивно понятные иконки

---

**Сделано для изучения React с Spring Boot! 🎓**
