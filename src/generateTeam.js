const generateManager = new Manager()
const generateEngineer = new Engineer()
const generateIntern = new Intern()

function generateTeam(answers){
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <header>
      <section id="headerContainer">
        <h1>My Team</h1>
      </section>
       
    </header>
    <section id="detailsContainer">
        <div class="card text-white bg-success mb-3" id="grids" style="max-width: 18rem;">
            <div class="managerName"></div>
            <div class="card-header" id="designation">Manager <i class='fas fa-user-check'></i></div>
            <div class="card-body">
              <p class="card-text"><b>Name : </b>${answers.manager_name}</p>
              <p class="card-text"><b>ID : </b>${answers.manager_employee_id}</p>
              <p class="card-text"><b>Email :</b><a href="mailto:${answers.manager_email}" target="_blank"></a></p>
              <p class="card-text"><b>Phone Number :</b>${answers.manager_office_phone_number}</p>
            </div>
          </div>
          <div class="card text-white bg-danger mb-3" id="grids" style="max-width: 18rem;">
            <div class="enginnerName"></div>
            <div class="card-header" id="designation">Engineer <i class='fas fa-user-cog'></i></div>
            <div class="card-body">
              <p class="card-text"><b>Name : </b>${answers.engineer_name}</p>
              <p class="card-text"><b>ID : </b>${answers.engineer_employee_id}</p>
              <p class="card-text"><b>Email :</b><a href="mailto:${answers.engineer_email}" target="_blank"></a></p>
              <p class="card-text"><b> GitHub username :</b><a href="${answers.git_details}" target="_blank"></a></p>
            </div>
        </div>
        <div class="card text-white bg-warning mb-3" id="grids" style="max-width: 18rem;">
            <div class="traineeName"></div>
            <div class="card-header" id="designation">Intern <i class='fas fa-user-graduate'></i></div>
            <div class="card-body">
              <p class="card-text"><b>Name : </b>${answers.trainee_name}</p>
              <p class="card-text"><b>ID : </b>${answers.trainee_employee_id}</p>
              <p class="card-text"><b>Email :</b><a href="mailto:${answers.trainee_email}" target="_blank"></a></p>
              <p class="card-text"><b>School Name :</b>${answers.trainee_school}</p>
            </div>
          </div>
    </section>
</body>
</html>
    `
} 