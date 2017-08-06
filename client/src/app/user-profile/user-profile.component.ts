import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { UserService } from '../../services/user.service';
  import { Observable } from 'rxjs';
  import "rxjs/add/operator/mergeMap";
  import { Router } from '@angular/router';
  import { DatePipe } from '@angular/common';

  @Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css'],
    providers: [UserService]
  })
export class UserProfileComponent implements OnInit {
    user: Object;
    show: boolean = false;

    constructor(private userService: UserService, private activeRoute: ActivatedRoute, private router: Router) {
      activeRoute.params
        .mergeMap(p => userService.show(p.id))
        .subscribe((user: Object) => {
          console.log(user);
          this.user = user;
        });
    }

    ngOnInit() {
    }

    showForm() {
      this.show = !this.show;
    }

    editUser(id, myForm) {
      this.userService.update(id, myForm.value).subscribe((user) => console.log(user));
    }

    remove(id) {
      this.userService.remove(id).subscribe();
      this.router.navigate(['']);
    }
  }
