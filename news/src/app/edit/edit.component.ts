import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PublishComponent } from '../publish/publish.component'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'edit-dialog',
  templateUrl: './edit.dialog.html',
  styleUrls: []
})

export class openEditComponent {
constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(EditComponent , {
      width: '100%',
      height: '80%'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
