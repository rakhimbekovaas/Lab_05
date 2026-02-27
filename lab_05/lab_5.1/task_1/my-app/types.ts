interface User {
    name: string;
    email: string;
    age: number;
}

type SkillLevel = 'Beginner' | 'Intermediate' | 'Expert';

interface Skill {
    id: number;
    name: string;
    level: SkillLevel;
}