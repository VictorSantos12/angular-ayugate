import { Component, OnInit } from '@angular/core';
import { Noticia } from './list';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  new: Noticia[]

  constructor(private service: ListService) { }

  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.new = dados)
  }

}



