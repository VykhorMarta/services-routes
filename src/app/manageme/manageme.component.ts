import { Component, OnInit } from '@angular/core';
import { Employer } from '../employer.model';
import { ManageService } from '../services/manage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageme',
  templateUrl: './manageme.component.html',
  styleUrls: ['./manageme.component.css']
})
export class ManagemeComponent implements OnInit {
employers: Employer[] = [];
name: string;
sallary: number;
  constructor(private manageService: ManageService, private router: Router) { }

  ngOnInit() {
    this.employers =this.manageService.getEmployers();
    console.log(this.employers);
  }

  addNewEmployer(){
    let employer = new Employer(this.name, this.sallary);
    this.manageService.addEmployer(employer);

  }

  deleteEmployer(employer: Employer){
    this.manageService.deleteEmployer(employer);

  }

  goBack(){
    this.router.navigate(['/employers']);

  }
}
