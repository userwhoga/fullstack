# 🐳 Docker Setup Guide - Глава 17

## 📋 Содержание
1. [Исправление проблемы с виртуализацией](#исправление-виртуализации)
2. [Структура Docker файлов](#структура-файлов)
3. [Запуск проекта](#запуск-проекта)
4. [Полезные команды](#полезные-команды)

---

## ⚠️ Исправление проблемы с виртуализацией

### Ошибка: "Virtualization support not detected"

Эта ошибка означает, что виртуализация отключена в BIOS/UEFI вашего компьютера.

### Шаги для исправления:

#### 1. **Перезагрузите компьютер в BIOS/UEFI**
   - Перезагрузите ПК
   - Нажимайте `Delete`, `F2`, `F10`, или `F12` при загрузке (зависит от производителя)
   - Ключи для популярных производителей:
     - **Dell**: F2 или F12
     - **HP**: F10 или Esc
     - **Lenovo**: F1 или F2
     - **ASUS**: F2 или Delete
     - **Acer**: F2 или Delete

#### 2. **Включите виртуализацию**
   - Найдите раздел: `Advanced` → `CPU Configuration` или `Virtualization Technology`
   - Параметры могут называться:
     - **Intel**: `Intel VT-x`, `Intel Virtualization Technology`, `Vanderpool`
     - **AMD**: `AMD-V`, `SVM Mode`
   - Установите значение: `Enabled`

#### 3. **Сохраните и перезагрузитесь**
   - Нажмите `F10` для сохранения и выхода
   - Или найдите опцию `Save & Exit`

#### 4. **Дополнительно для Windows**
   
   Откройте PowerShell **от имени администратора** и выполните:

   ```powershell
   # Включить Hyper-V и контейнеры
   Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
   Enable-WindowsOptionalFeature -Online -FeatureName Containers -All
   
   # Перезагрузить компьютер
   Restart-Computer
   ```

#### 5. **Проверка виртуализации**
   
   После перезагрузки проверьте:
   
   ```powershell
   # В PowerShell
   systeminfo | findstr /i "Hyper-V"
   ```
   
   Должны увидеть строки с "Hyper-V Requirements" и значения "Yes"

#### 6. **Запустите Docker Desktop**
   - Откройте Docker Desktop
   - Дождитесь запуска Docker Engine
   - Проверьте статус: `docker --version`

---

## 📁 Структура файлов Docker

```
untitled4/
├── Dockerfile              # Multi-stage build для React
├── .dockerignore          # Исключения для Docker build
├── nginx.conf             # Конфигурация Nginx
├── docker-compose.yml     # Оркестрация всех сервисов
├── .env.production        # Production переменные
└── package.json           # Docker скрипты добавлены
```

### Dockerfile (React Frontend)
- **Stage 1**: Сборка React app с Node.js
- **Stage 2**: Serve через Nginx (production-ready)

### docker-compose.yml
Содержит 3 сервиса:
1. **mariadb** - База данных
2. **backend** - Spring Boot API (закомментирован, нужен путь к backend)
3. **frontend** - React приложение

---

## 🚀 Запуск проекта

### Вариант 1: Docker Compose (Рекомендуется)

Запускает все сервисы одной командой:

```bash
# Запустить все сервисы
npm run compose:up

# ИЛИ напрямую
docker-compose up -d

# Проверить логи
npm run compose:logs

# Остановить все сервисы
npm run compose:down
```

Сервисы будут доступны:
- **Frontend**: http://localhost
- **Backend**: http://localhost:8081 (если раскомментирован)
- **MariaDB**: localhost:3306

### Вариант 2: Только Frontend

```bash
# 1. Собрать Docker image
npm run docker:build

# 2. Запустить контейнер
npm run docker:run

# Frontend доступен: http://localhost

# 3. Остановить контейнер
npm run docker:stop
```

### Вариант 3: Только Database

```bash
docker run --name cardb \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=cardb \
  -e MYSQL_USER=user \
  -e MYSQL_PASSWORD=password \
  -p 3306:3306 \
  -d mariadb:latest
```

---

## 🛠️ Полезные команды Docker

### Управление контейнерами

```bash
# Список запущенных контейнеров
docker ps

# Список всех контейнеров
docker ps -a

# Логи контейнера
docker logs carfrontend
docker logs -f carfrontend  # следить за логами

# Остановить контейнер
docker stop carfrontend

# Удалить контейнер
docker rm carfrontend

# Войти в контейнер
docker exec -it carfrontend sh
```

### Управление образами

```bash
# Список образов
docker images

# Удалить образ
docker rmi carfrontend

# Очистить неиспользуемые образы
docker image prune

# Очистить все
docker system prune -a
```

### Docker Compose команды

```bash
# Запуск в фоне
docker-compose up -d

# Пересобрать и запустить
docker-compose up -d --build

# Остановить
docker-compose stop

# Остановить и удалить
docker-compose down

# Удалить с volumes
docker-compose down -v

# Логи всех сервисов
docker-compose logs -f

# Логи конкретного сервиса
docker-compose logs -f frontend
```

---

## 🔧 Настройка Backend (Spring Boot)

### 1. Создайте Dockerfile в проекте backend:

```dockerfile
FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
EXPOSE 8081
COPY build/libs/cardatabase-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```

### 2. Соберите JAR файл:

```bash
# В папке backend проекта
./gradlew build

# Или в Eclipse/IntelliJ
# Gradle Tasks → build → build (double click)
```

### 3. Раскомментируйте секцию backend в docker-compose.yml:

```yaml
backend:
  build:
    context: ../путь-к-backend-проекту
    dockerfile: Dockerfile
  container_name: carapp
  environment:
    SPRING_DATASOURCE_URL: jdbc:mariadb://mariadb:3306/cardb
    SPRING_DATASOURCE_USERNAME: user
    SPRING_DATASOURCE_PASSWORD: password
    SERVER_PORT: 8081
  ports:
    - "8081:8081"
  depends_on:
    mariadb:
      condition: service_healthy
  networks:
    - app-network
```

### 4. Обновите application.properties в backend:

```properties
spring.datasource.url=jdbc:mariadb://mariadb:3306/cardb
spring.datasource.username=user
spring.datasource.password=password
server.port=8081
```

---

## 🌐 Production Deployment

### AWS Elastic Beanstalk (Backend)

1. **Соберите JAR**:
   ```bash
   ./gradlew build
   ```

2. **Создайте Elastic Beanstalk приложение**:
   - Platform: Java 17
   - Upload JAR файл из `build/libs/`

3. **Настройте Environment Variables**:
   - `SERVER_PORT=5000`
   - `SPRING_DATASOURCE_URL=jdbc:mariadb://your-rds-endpoint:3306/cardb`
   - `SPRING_DATASOURCE_USERNAME=admin`
   - `SPRING_DATASOURCE_PASSWORD=your-password`

### Netlify (Frontend)

1. **Обновите API URL** в `.env.production`:
   ```
   VITE_API_URL=https://your-aws-domain.elasticbeanstalk.com
   ```

2. **Push на GitHub**:
   ```bash
   git add .
   git commit -m "Add Docker support"
   git push
   ```

3. **Deploy на Netlify**:
   - Import from Git
   - Build command: `npm run build`
   - Publish directory: `dist`

---

## 📊 Проверка работы

### 1. Проверьте что все контейнеры запущены:
```bash
docker-compose ps
```

Должны увидеть:
```
NAME          STATUS         PORTS
cardb         Up (healthy)   0.0.0.0:3306->3306/tcp
carfrontend   Up             0.0.0.0:80->80/tcp
```

### 2. Тест базы данных:
```bash
# Войти в MariaDB контейнер
docker exec -it cardb mysql -uuser -ppassword cardb

# В MySQL shell
SHOW TABLES;
EXIT;
```

### 3. Тест frontend:
Откройте браузер: http://localhost

### 4. Тест backend (если запущен):
```bash
# Проверка health
curl http://localhost:8081/api/cars

# Или используйте Postman
```

---

## ❓ Частые проблемы

### Проблема: Контейнер не запускается
```bash
# Проверьте логи
docker logs carfrontend

# Пересоберите образ
docker-compose up -d --build
```

### Проблема: Порт уже занят
```bash
# Найдите процесс на порту 80
netstat -ano | findstr :80

# Убейте процесс (замените PID)
taskkill /PID <PID> /F

# Или измените порт в docker-compose.yml
ports:
  - "8080:80"  # теперь доступен на :8080
```

### Проблема: Cannot connect to database
```bash
# Проверьте что MariaDB запущен и healthy
docker-compose ps

# Проверьте сеть
docker network ls
docker network inspect untitled4_app-network
```

---

## 📚 Дополнительные ресурсы

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Reference](https://docs.docker.com/compose/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [AWS Elastic Beanstalk Guide](https://docs.aws.amazon.com/elasticbeanstalk/)
- [Netlify Documentation](https://docs.netlify.com/)

---

## ✅ Checklist перед деплоем

- [ ] Виртуализация включена в BIOS
- [ ] Docker Desktop запущен
- [ ] Все тесты проходят (`npm run test`)
- [ ] Build проходит успешно (`npm run build`)
- [ ] Backend JAR файл собран
- [ ] Environment variables настроены
- [ ] Database credentials обновлены
- [ ] API URL указывает на production backend
- [ ] Git репозиторий обновлен

---

**Автор**: Full-Stack Development with Spring Boot and React (4th Edition)
**Глава**: 17 - Deploying Your Application


