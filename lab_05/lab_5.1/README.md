# Lab 5.1

## Types (`types.ts`)

- **`User`** — interface with `name`, `email`, and `age`
- **`SkillLevel`** — union type alias: `'Beginner' | 'Intermediate' | 'Expert'`
- **`Skill`** — interface with `id`, `name`, and `level` (uses `SkillLevel`)

## Components

**`UserCard`** — displays a single user. Props: `user: User`, optional `isActive?: boolean` (defaults to `true`), and `children: React.ReactNode` for slotting in extra content.

**`SkillList`** — takes `skills: Skill[]` and renders each skill with a color based on its level using `Record<SkillLevel, string>`.

## Running the app

```bash
npm run dev
```