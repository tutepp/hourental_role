import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/model/role';
import { RoleService } from 'src/app/role.service';

@Component({
  selector: 'app-role-update',
  templateUrl: './role-update.component.html',
  styleUrls: ['./role-update.component.css']
})
export class RoleUpdateComponent implements OnInit {


    id!: any;
    role!: Role;


  updateForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
  });

  constructor(private roleService: RoleService ,
    private activatedRoute: ActivatedRoute ,
    private router: Router )

    {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getRole(this.id);

  }
  updateRole(id:number){

      this.roleService.updateRole(this.id, this.role).subscribe((data: any) => {
        this.role = data;
        console.log(data);
        this.gotoList();

      });
    }
  getRole(id:number){
      this.roleService.findById(id).subscribe((data:any) => {
      this.role = data;

      });
   }
   gotoList() {
    this.router.navigate(['/role']);
  }


}




