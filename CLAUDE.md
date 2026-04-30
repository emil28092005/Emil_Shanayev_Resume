# CLAUDE.md — my-project

> описание проекта

## Стек

**Языки:** Go, TypeScript
**Frontend:** React, TypeScript
**Инфраструктура:** Docker, Kubernetes, GitHub Actions, Jenkins
**Стиль кода:** Минимальные зависимости, явные типы (Go type hints + TS strict mode)

---

## Принципы работы агента

- При неоднозначности в задаче — спрашивай, не угадывай и не двигайся вперёд.
- Предпочитай простейшее рабочее решение. Не создавай абстракций без необходимости.
- Не трогай код, файлы и конфиги вне скоупа текущей задачи.
- Верифицируй результат: запускай тесты, проверяй edge cases до завершения задачи.
- Не ломай существующие тесты ради реализации новой функциональности.

---

## Запрещено

- Не изменять `.env`, `docker-compose.yml`, `k8s/prod/*` без явного разрешения.
- Не делать `git push --force` ни при каких обстоятельствах.
- Не деплоить в production без явного подтверждения пользователя.
- Не удалять Kubernetes namespaces, PersistentVolumes или secrets без явной команды.
- Не изменять pipeline-конфиги (Jenkinsfile, .github/workflows/*) без обсуждения.

---

## Точки остановки (обязательный checkpoint)

Агент обязан остановиться и явно спросить разрешение перед:

- Любыми изменениями в `k8s/prod/*` или `k8s/staging/*`
- Удалением Docker-образов, volumes или сетей
- Изменением RBAC-правил или ServiceAccount'ов
- Ротацией или созданием новых secrets/credentials
- Изменением resource limits/requests на production-сервисах
- Любой операцией, которую нельзя откатить за < 5 минут

---

## Структура проекта

```
.
├── cmd/              # точки входа (main.go)
├── internal/         # приватный код приложения
├── pkg/              # публичные пакеты
├── frontend/         # React-приложение (TypeScript)
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── pages/
│   └── package.json
├── k8s/
│   ├── base/         # базовые манифесты
│   ├── staging/      # overlays для staging
│   └── prod/         # overlays для production  ← только с разрешения
├── .github/
│   └── workflows/    # GitHub Actions pipelines
├── Dockerfile
├── docker-compose.yml  ← не изменять без разрешения
└── .env                ← не изменять без разрешения
```

---

## Соглашения по коду (Go)

- Стиль: стандартный `gofmt` / `goimports`
- Линтер: `golangci-lint` — запускать перед коммитом
- Ошибки: всегда оборачивать через `fmt.Errorf("...: %w", err)`
- Логирование: использовать структурированный логгер (slog / zap), не `fmt.Println`
- Конфигурация: через переменные окружения, не хардкодить значения
- Зависимости: минимальные; новую зависимость — только с обоснованием

---

## Соглашения по коду (React / TypeScript)

- TypeScript strict mode обязателен (`"strict": true` в tsconfig)
- Компоненты: только функциональные, без class components
- Именование: компоненты — `PascalCase`, хуки — `useCamelCase`, файлы — `kebab-case.tsx`
- Стейт: локальный через `useState`/`useReducer`; глобальный — только при явной необходимости
- Пропсы: всегда типизировать через `interface`, не `type` (для расширяемости)
- Эффекты: не использовать `useEffect` для получения данных — использовать React Query / SWR
- Линтер: ESLint + `eslint-plugin-react-hooks` — запускать перед коммитом
- Форматтер: Prettier с конфигом из репозитория — не менять настройки
- Тесты: Vitest + React Testing Library; не тестировать детали реализации, только поведение
- Никаких `any` типов — использовать `unknown` + type guard при необходимости

---

## CI/CD соглашения

### GitHub Actions
- Каждый PR запускает: lint → test → build → docker build
- Образы тегируются: `<registry>/<app>:<git-sha>`
- Merge в `main` → автодеплой на staging

### Jenkins
- Production-деплой только через Jenkins pipeline с ручным approve-шагом
- Rollback через `helm rollback` или `kubectl rollout undo`

---

## Работа с Docker

- Base image: `gcr.io/distroless/static-debian12` или `alpine:3.x` — не `latest`
- Multi-stage build обязателен для Go-бинарей
- Никаких секретов в ENV инструкциях Dockerfile (использовать BuildKit secrets или runtime env)
- Образы сканировать через `trivy` в CI перед пушем

---

## Работа с Kubernetes

- Все манифесты через Kustomize (не сырой kubectl apply в production)
- Resource requests/limits — обязательны для каждого контейнера
- Liveness/readiness probes — обязательны
- PodDisruptionBudget — обязателен для stateful сервисов
- Никаких `latest` тегов в манифестах

---

## Тестирование

- Unit-тесты: `go test ./...`
- Интеграционные тесты: `go test -tags=integration ./...`
- Покрытие Go: цель ≥ 70% для `internal/`
- Frontend тесты: `pnpm test` (Vitest) — запускать из `frontend/`
- Перед завершением задачи: убедиться, что все тесты проходят

---

## Соглашения по коммитам (Conventional Commits)

```
feat:     новая функциональность
fix:      исправление бага
chore:    рутинные задачи (зависимости, конфиги)
refactor: рефакторинг без изменения поведения
test:     добавление/изменение тестов
ci:       изменения в CI/CD пайплайнах
docs:     документация
```

Примеры:
- `feat(auth): add JWT validation middleware`
- `fix(deploy): correct resource limits for worker pod`
- `ci: add trivy scan step to GitHub Actions`
