# 🚀 Быстрый старт с Docker

## ⚠️ ВАЖНО: Исправьте проблему с Docker!

У вас ошибка **"Virtualization support not detected"**. Это значит виртуализация отключена.

### Решение (5 минут):

1. **Перезагрузите ПК в BIOS** (нажмите Del/F2/F10 при загрузке)
2. **Найдите настройку**: CPU Configuration → Virtualization Technology
3. **Измените на**: Enabled (для Intel VT-x или AMD-V)
4. **Сохраните**: F10 → Save & Exit
5. **После загрузки Windows**, откройте PowerShell от админа:
   ```powershell
   Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
   Restart-Computer
   ```

📖 **Подробная инструкция**: см. `DOCKER_SETUP.md`

---

## 📦 Что создано для Docker:

✅ `Dockerfile` - Multi-stage build (Node.js → Nginx)  
✅ `.dockerignore` - Исключения для сборки  
✅ `nginx.conf` - Конфигурация веб-сервера  
✅ `docker-compose.yml` - Запуск всех сервисов  
✅ Скрипты в `package.json`

---

## 🎯 Запуск после исправления Docker:

```bash
# Вариант 1: Все сервисы (DB + Frontend)
npm run compose:up

# Вариант 2: Только Frontend
npm run docker:build
npm run docker:run

# Открыть в браузере
start http://localhost
```

---

## 📋 Полезные команды:

```bash
# Проверить Docker
docker --version
docker ps

# Логи
npm run compose:logs

# Остановить
npm run compose:down
```

---

## 🔗 Файлы проекта:

- **Frontend**: http://localhost (порт 80)
- **Backend**: http://localhost:8081 (если запущен)
- **Database**: localhost:3306

---

**Next Steps**: Прочитайте `DOCKER_SETUP.md` для деталей!


