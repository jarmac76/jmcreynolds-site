import Skill from "../components/skill";

const Skills = () => {

    return(
        <>
            <div className="main-band">
                <div className="skill-band">
                    <a href="https://html.com/"><Skill imgSrc='/assets/images/html5.png' imgAlt="Html logo" /></a>
                    <a href="https://www.javascript.com/"><Skill imgSrc='/assets/images/javascript.png' imgAlt="Javascript logo" /></a>
                    <a href="https://www.w3.org/Style/CSS/Overview.en.html"><Skill imgSrc='/assets/images/css3.png' imgAlt="CSS logo" /></a>
                    <a href="https://jquery.com/"><Skill imgSrc='/assets/images/jquery.png' imgAlt="jQuery logo" /></a>
                    <a href="https://react.dev/"><Skill imgSrc='/assets/images/react.png' imgAlt="React Logo" /></a>
                    <a href="https://www.php.net/"><Skill imgSrc='/assets/images/php.png' imgAlt="PHP logo" /></a>
                    <a href="https://www.python.org/"><Skill imgSrc='/assets/images/python.png' imgAlt='Python logo' /></a>
                    <a href="https://wordpress.com/"><Skill imgSrc='/assets/images/wordpress.png' imgAlt='Wordpress logo' /></a>
                    <a href="https://jasmine.github.io/"><Skill imgSrc='/assets/images/jasmine.png' imgAlt="Jasmine.js logo" /></a>
                    <a href="https://code.visualstudio.com/"><Skill imgSrc='/assets/images/vscode-original.png' imgAlt="VS Code logo" /></a>
                    <a href="https://www.atlassian.com/software/confluence"><Skill imgSrc='/assets/images/confluence.png' imgAlt="Confluence logo" /></a>
                    <a href="https://www.gnu.org/software/bash/"><Skill imgSrc='/assets/images/bash.png' imgAlt="Bash logo" /></a>
                    <a href="https://git-scm.com/"><Skill imgSrc='/assets/images/git.png' imgAlt="Git Logo" /></a>
                </div>
                
            </div>
        </>

    )
}

export default Skills;