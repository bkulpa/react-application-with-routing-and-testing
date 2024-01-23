import { FC } from 'react';
import { ProjectsList } from './ProjectsList';

export const Projects: FC = () => {
    return (
        <>
            <h2>Check our Projects!</h2>
            <img className='img__about' src={require("../img/games.jpg")} alt={"Games alphabet"} />
            <ul>
                {ProjectsList.map(({ projectName, score }) => (
                    <li key={projectName}>Game {projectName} with score: {score}!</li>
                ))}
            </ul>
        </>
    )
}