# ЛР3. FOLIA — Angular

Вариант 4, блоговая платформа. Интерфейс на русском, в палитре лабораторной работы №1.

## Запуск

```bash
npm install
npm start
```

## Архитектура

Приложение собрано через `AppModule` (`@NgModule`).

- `HeaderComponent` — шапка с логотипом FOLIA.
- `ArticlesService` — `@Injectable({ providedIn: 'root' })`, метод `getArticles()` возвращает четыре статьи: `id`, `title`, `author`, `previewText`, `imageUrl`.
- `ArticleListComponent` получает сервис через конструктор, загружает статьи в `ngOnInit` и выводит карточки директивой `*ngFor`.
- `ArticleCardComponent` принимает одну статью через `@Input() article`.

Кнопка «Нравится» в обычном состоянии: иконка и обводка `#8C4A3A`. Высота кнопок — 44 px.
