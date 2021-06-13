const softwareDevelopmentSkillBank = [
    {description: "HTML, CSS e JavaScript", progress: 75},
    {description: "MySQL", progress: 35},
    {description: "PHP", progress: 60},
    {description: "Git e GitHub", progress: 60},
    {description: "Bootstrap", progress: 40},
    {description: "Java", progress: 35},
    {description: "Figma", progress: 25},
    {description: "Kotlin", progress: 25},
    {description: "PWA", progress: 25},
]

const hardwareAndNetworkBank = [
    {description: "Conhecimento das peças do computador", progress: 90},
    {description: "Conceitos da criação e administração de redes de computadores", progress: 30},
    {description: "Windows Server 2016", progress: 15},
]


const createSoftwareDevelopmentSkills = (skills) => {
    const insertSkills = document.createElement('div')
    insertSkills.innerHTML = `
      <p>${skills.description}</p>
      <div class="progress-bar" style="--progress:${skills.progress};" ></div>
    `
    document.querySelector('#softwareDevelopmentSkills').appendChild(insertSkills)
}

const createHardwareSkillsAndNetworks = (skills) => {
    const insertSkills = document.createElement('div')
    insertSkills.innerHTML = `
      <p>${skills.description}</p>
      <div class="progress-bar" style="--progress:${skills.progress};" ></div>
    `
    document.querySelector('#hardwareAndNetworkingSkills').appendChild(insertSkills)
}

const updateSkills = () => {
    softwareDevelopmentSkillBank.forEach(createSoftwareDevelopmentSkills)
    hardwareAndNetworkBank.forEach(createHardwareSkillsAndNetworks)
}


updateSkills()