import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor() { }

  onDelete() {
    
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'delete-dialog',
  templateUrl: './delete.dialog.html',
  styleUrls: []
})

export class openDeleteComponent {
constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DeleteComponent , {
      width: '70%',
      height: '30%'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
