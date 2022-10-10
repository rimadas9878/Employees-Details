function generateTeam(answers) {
    console.log(answers)
    let teamCards = ""
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].getRole() === "Manager") {
            teamCards += generateManager(answers[i])
        }
        else if (answers[i].getRole() === "Engineer") {
            teamCards += generateEngineer(answers[i])
        }
        else if (answers[i].getRole() === "Intern") {
            teamCards += generateIntern(answers[i])
        }
    }
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Document</title>
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
           integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
           <link rel="stylesheet" href="./style.css">
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>
    <body>
        <header>
          <section id="headerContainer">
            <h1>My Team</h1>
          </section>      
        </header>
        <section id="detailsContainer">
            ${teamCards}
        </section>
    </body>
    </html>`
}
function generateManager(answers) {
    return `
    <section id="detailsContainer">
    <div class="card text-white bg-success mb-3" id="grids" style="max-width: 18rem;">
            <div class="managerName"></div>
            <div class="card-header" id="designation">Manager <i class='fas fa-user-check'></i></div>
            <div class="card-body">
              <p class="card-text"><b>Name : </b>${answers.name}</p>
              <p class="card-text"><b>ID : </b>${answers.id}</p>
              <p class="card-text"><b>Email :</b><a href="mailto:${answers.email}" target="_blank">${answers.email}</a></p>
              <p class="card-text"><b>Phone Number :</b>${answers.officeNumber}</p>
            </div>
    </div>
    `
}

function generateEngineer(answers) {
    return `
        <div class="card text-white bg-danger mb-3" id="grids" style="max-width: 18rem;">
            <div class="enginnerName"></div>
            <div class="card-header" id="designation">Engineer <i class='fas fa-user-cog'></i></div>
            <div class="card-body">
              <p class="card-text"><b>Name : </b>${answers.name}</p>
              <p class="card-text"><b>ID : </b>${answers.id}</p>
              <p class="card-text"><b>Email :</b><a href="mailto:${answers.email}" target="_blank">${answers.email}</a></p>
              <p class="card-text"><b> GitHub username :</b><a href="${answers.gitHub}" target="_blank">${answers.gitHub}</a></p>
            </div>
        </div>
    `
}

function generateIntern(answers) {
    return `
    <div class="card text-white bg-warning mb-3" id="grids" style="max-width: 18rem;">
        <div class="internName"></div>
         <div class="card-header" id="designation">Intern <i class='fas fa-user-graduate'></i></div>
    <div class="card-body">
    <p class="card-text"><b>Name : </b>${answers.name}</p>
    <p class="card-text"><b>ID : </b>${answers.id}</p>
    <p class="card-text"><b>Email :</b><a href="mailto:${answers.email}" target="_blank">${answers.email}</a></p>
    <p class="card-text"><b>School Name :</b>${answers.school}</p>
    </div>
    </div>
    `
}

module.exports = generateTeam;