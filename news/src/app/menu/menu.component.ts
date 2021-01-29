import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PublishComponent } from '../publish/publish.component'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(PublishComponent , {
      width: '100%',
      height: '80%'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


