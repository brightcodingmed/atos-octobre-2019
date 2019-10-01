import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

 @Input('like') like: number = 0;
 @Input('disLike') disLike: number = 0;

 @Output('likeChildToParent') likeChildToParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incLike() {
    this.like++;
    this.likeChildToParent.emit({ type: 1, value: this.like });
  }

  incDisLike() {
    this.disLike++;
    this.likeChildToParent.emit({ type: 0, value: this.disLike });
  }

}
