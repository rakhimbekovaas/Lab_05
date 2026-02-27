import type {Skill, SkillLevel} from './types'

interface SkillListProps {
    skills: Skill[];
}

const levelColors: Record<SkillLevel, string> = {
    Beginner: 'green',
    Intermediate: 'yellow',
    Expert: 'red',

};

const SkillList = ({ skills }: SkillListProps) => {
    return (
        <ul>
            {skills.map((skill) => (
                <li key={skill.id} style = {{ color: levelColors[skill.level] }}>
                    {skill.name} - {skill.level}
                </li>
            ))}
        </ul>
    );
};

export default SkillList;