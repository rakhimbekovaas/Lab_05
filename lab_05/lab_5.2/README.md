# Lab 5.2

## Types (`types.ts`)

- **`User`** — interface with `name`, `email`, and `age`

## Components

**`UserCard`** — displays a single user. Props: `user: User`, optional `isActive?: boolean` (defaults to `true`), and `children: React.ReactNode` for slotting in extra content.

**`SearchApp`** — filters a typed `User[]` list in real time. Uses:
- `useState<User[]>` for users and filtered results
- `useState<string>` for the search term
- `React.ChangeEvent<HTMLInputElement>` for the search handler
- `React.MouseEvent<HTMLButtonElement>` for the clear button
- Renders results with `UserCard`, shows "No results found" when empty

## Running the app

```bash
npm run dev
```

