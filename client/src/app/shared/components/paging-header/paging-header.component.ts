import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paging-header',
  templateUrl: './paging-header.component.html',
  styleUrls: ['./paging-header.component.scss']
})
export class PagingHeaderComponent implements OnInit {
  @Input() totalCount: number;
  @Input() pageNumber: number; 
  @Input() pageSize: number;
    
  constructor() { }

  ngOnInit(): void {
  }

  LowerRange() {
    var lowerRangeCurrentPage = (this.pageNumber-1) * this.pageSize + 1;
    return lowerRangeCurrentPage > this.totalCount 
    ? this.totalCount 
    : lowerRangeCurrentPage;
}

  UpperRange() {
    var upperRangeCurrentPage = this.pageNumber * this.pageSize;
    return upperRangeCurrentPage > this.totalCount 
     ? this.totalCount 
     : upperRangeCurrentPage;         
}

}
