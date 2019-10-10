import { Component, OnInit } from '@angular/core';
import { TicketPublicService } from 'src/app/services/ticket-public/ticket-public.service';


@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  nuevoParte:any;

  constructor(public _tp:TicketPublicService) {}

  ngOnInit() {
  }


}
