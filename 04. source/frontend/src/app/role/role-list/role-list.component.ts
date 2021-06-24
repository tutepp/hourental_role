import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  role: any;

  constructor( private roleService: RoleService) { }

  ngOnInit(): void { this.getRoleList();
  }
  getRoleList() {
    this.roleService.getRoleList().subscribe((data: any) => {
      this.role = data;
      console.log(data);
    });
  }
  deleteRole(id: number){
    console.log(id);
      this.roleService.deleteRole(id).subscribe((data: any) => {
        this.role = data;
      });
    }




}
