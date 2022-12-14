import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGatsby,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMaterialui,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const base = "h-8 w-8 transition-colors duration-200";
  return (
    <article className="mt-10 py-20 text-center" id="skills">
      <h2 className="text-4xl font-bold sm:text-5xl">Skills</h2>
      <div className="mt-20 grid grid-cols-5 flex-wrap justify-items-center gap-x-8 gap-y-16">
        <SiHtml5 className={`${base} hover:fill-[#E34F26]`} />
        <SiCss3 className={`${base} hover:fill-[#1572B6]`} />
        <SiJavascript className={`${base} hover:fill-[#F7DF1E]`} />
        <SiTailwindcss className={`${base} hover:fill-[#06B6D4]`} />
        <SiTypescript className={`${base} hover:fill-[#3178C6]`} />
        <SiReact className={`${base} hover:fill-[#61DAFB]`} />
        <SiNextdotjs className={`${base}`} />
        <SiGatsby className={`${base} hover:fill-[#663399]`} />
        <SiMaterialui className={`${base} hover:fill-[#007FFF]`} />
        <SiNodedotjs className={`${base} hover:fill-[#339933]`} />
        <SiExpress className={`${base}`} />
        <SiMongodb className={`${base} hover:fill-[#47A248]`} />
        <SiMysql className={`${base} hover:fill-[#4479A1]`} />
        <SiPostgresql className={`${base} hover:fill-[#4169E1]`} />
        <SiSqlite className={`${base} hover:fill-[#003B57]`} />
        <SiSupabase className={`${base} hover:fill-[#3ECF8E]`} />
        <SiGit className={`${base} hover:fill-[#F05032]`} />
        <SiGithub className={`${base}`} />
        <SiLinux className={`${base} hover:fill-[#FCC624]`} />
        <SiDocker className={`${base} hover:fill-[#2496ED]`} />
        <SiFigma className={`${base} hover:fill-[#F24E1E]`} />
      </div>
    </article>
  );
}
