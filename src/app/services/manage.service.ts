import { Employer } from "../employer.model";

export class ManageService {
    employers: Employer[] = [
        new Employer('Max', 500),
        new Employer('Lilia', 450)
    ];
      
      
      
        getEmployers(){
            return this.employers;
        }

        addEmployer(employer: Employer){
            this.employers.push(employer)
          }

          deleteEmployer(employer: Employer){
              let i =this.employers.indexOf(employer);
              if(i > -1){
                this.employers.splice(i, 1);

              }
          }

    }

