import { Component, OnInit } from '@angular/core';
import { Employer } from '../employer.model';
import { ManageService } from '../services/manage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  employers: Employer[] = [];
  constructor(private manageService: ManageService, private router: Router) { }

  ngOnInit() {
    this.employers =this.manageService.getEmployers();
  }

  goToManage(){
  this.router.navigate(['/manage']);
  }
}
